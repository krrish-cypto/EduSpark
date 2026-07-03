// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // This is the new tool!

const app = express();
const PORT = process.env.PORT || 3000;

// --- CONNECT TO MONGODB ---
// Using MongoDB Atlas (Cloud):
const MONGO_URI = 'mongodb+srv://krishnaadubey1906_db_user:jUfaNiwQy47tSAcr@cluster0.rclseod.mongodb.net/eduspark?appName=Cluster0'; 

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

app.use(cors());
app.use(express.json());

// --- SCHEMA (The Blueprint) ---
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  points: { type: Number, default: 0 },
  badges: { type: [String], default: [] },
  streak: { type: Number, default: 1 },
  lastLogin: { type: Date, default: Date.now },
  loginCount: { type: Number, default: 0 }
});

const User = mongoose.model('User', userSchema);

// --- ROUTES ---

// 1. REGISTER
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: 'Required field missing' });

  try {
    const existing = await User.findOne({ username });
    if (existing) return res.status(409).json({ message: 'User already exists' });

    const newUser = new User({ username, password });
    await newUser.save();
    
    return res.status(201).json({
        username: newUser.username,
        points: newUser.points,
        badges: newUser.badges,
        streak: newUser.streak
    });
  } catch (err) {
    res.status(500).json({ message: 'Error', error: err.message });
  }
});

// 2. LOGIN
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  
  if (username === 'teacher' && password === 'admin') {
    return res.json({ username: 'Teacher', role: 'teacher', greeting: 'Welcome back' });
  }

  try {
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(404).json({ message: 'Invalid credentials' });
    }

    // Streak Logic
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    if (user.lastLogin) {
      const last = new Date(user.lastLogin);
      const lastDate = new Date(last.getFullYear(), last.getMonth(), last.getDate());
      const diffTime = Math.abs(today - lastDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) user.streak += 1;
      else if (diffDays > 1) user.streak = 1;
    }
    
    user.lastLogin = now;
    user.loginCount += 1;
    await user.save();

    return res.json({ 
        username: user.username, 
        points: user.points, 
        badges: user.badges, 
        streak: user.streak,
        greeting: user.loginCount === 1 ? 'Welcome' : 'Welcome back',
        role: 'student' 
    });
  } catch (err) {
    res.status(500).json({ message: 'Error', error: err.message });
  }
});

// 3. UPDATE PROGRESS
app.put('/api/user/:username/progress', async (req, res) => {
  const { username } = req.params;
  const { points, badges } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (points !== undefined) user.points = points;
    if (badges !== undefined) user.badges = badges;
    
    await user.save();
    return res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error', error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 MongoDB Server running on http://localhost:${PORT}`);
});