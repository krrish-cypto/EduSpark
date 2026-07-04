# 🚀 EduSpark - The Learning Adventure

EduSpark is an interactive, gamified educational platform designed to make learning fun and engaging for students from classes 6-10. With interactive games, progress tracking, and multi-language support, EduSpark combines education with entertainment.

## ✨ Features

### Student Features
- **🎮 Gamified Learning**: Interactive games like Periodic Crush and Math Quiz
- **⭐ Points & Badges**: Earn points and badges as you progress
- **🔥 Streak System**: Maintain daily login streaks
- **🌍 Multi-Language Support**: English, Hindi, Marathi, and Spanish
- **📊 Progress Tracking**: Track your learning progress across subjects
- **🎓 Multiple Subjects**: Chemistry, Physics, Mathematics, Biology, and more

### Teacher Features
- **👩‍🏫 Teacher Dashboard**: View student performance reports
- **📈 Student Analytics**: Track student progress and badges
- **🔄 Real-time Updates**: Refresh data to see latest student activities

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **APIs**: RESTful API architecture
- **Animation**: Canvas Confetti, CSS Animations

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (for cloud database)
- Internet connection

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd EduSpark-main/backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Update the MongoDB URI in `server.js`:
```javascript
const MONGO_URI = 'your_mongodb_atlas_uri_here';
```

### 4. Start the Server
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
backend/
├── server.js           # Express server and API routes
├── EduSpark2.html      # Frontend HTML/CSS/JavaScript
├── package.json        # Project dependencies
└── README.md           # This file
```

## 🔌 API Endpoints

### Authentication
- **POST** `/api/register` - Register a new user
  - Body: `{ username, password }`
  
- **POST** `/api/login` - Login user
  - Body: `{ username, password }`

### User Progress
- **GET** `/api/user/:username/progress` - Get user progress
- **POST** `/api/user/:username/progress` - Update user progress
  - Body: `{ points, badges, streak }`

### Teacher Dashboard
- **GET** `/api/teacher/students` - Get all students (requires teacher credentials)

## 🎮 Game Mechanics

### Periodic Crush
Match elements to create chemical compounds. Select the correct representation of each element and build the target compound.

**How to Play:**
1. Look at the target compound
2. Select elements from the grid
3. For each element, choose the correct image representation
4. Complete the compound to earn points

### Math Quiz
Solve algebraic equations to earn points.

**How to Play:**
1. Read the equation
2. Choose the correct answer
3. Get instant feedback
4. Complete more questions to increase your score

## 👤 User Authentication

### Student Login
- Create an account with any username and password
- Login to access your personalized dashboard
- Your progress is automatically saved

### Teacher Login
- Username: `teacher`
- Password: `admin`
- Access the teacher dashboard to view student analytics

## 📊 Gamification System

### Points System
- Earn points by completing games and challenges
- Points are displayed in real-time on your dashboard

### Badges
- Novice Explorer 🧭
- Science Apprentice 🧪
- Lab Expert 🔬
- Master Scientist 🌟
- Legendary Genius 🏆

Earn badges as you accumulate points (each badge at 500 point intervals).

### Streak System
- Login daily to maintain your streak
- Streak resets if you miss a day
- Shows your consistency and dedication

## 🌐 Language Support

- **English** (en)
- **Hindi** (hi) - हिंदी
- **Marathi** (mr) - मराठी
- **Spanish** (es) - Español

Change language from the dashboard language selector.

## 📱 Responsive Design

EduSpark is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## 🔐 Security Notes

⚠️ **Important**: The current implementation stores passwords in plain text. For production:
- Use password hashing (bcrypt recommended)
- Implement proper authentication tokens (JWT)
- Add input validation and sanitization
- Use environment variables for sensitive data

## 🐛 Troubleshooting

### MongoDB Connection Error
- Check your MongoDB Atlas URI
- Ensure your IP is whitelisted in MongoDB Atlas
- Verify internet connection

### Port Already in Use
```bash
# Change the port in server.js or set environment variable
$env:PORT=5000
npm start
```

### Games Not Loading
- Clear browser cache
- Check console for JavaScript errors
- Ensure all CDN resources are accessible

## 📝 Development

### Running in Development Mode
```bash
npm start
```

### Making Changes
1. Edit `EduSpark2.html` for frontend changes
2. Edit `server.js` for backend changes
3. Restart the server to see changes

## 🚀 Future Enhancements

- [ ] More interactive games
- [ ] Leaderboard system
- [ ] Achievement badges
- [ ] Parent notifications
- [ ] Advanced analytics dashboard
- [ ] Mobile app version
- [ ] Offline functionality
- [ ] Video tutorials
- [ ] Live class integration

## 📄 License

This project is created by Krishna Dubey (AIML). All rights reserved.

## 👨‍💻 Author

**Krishna Dubey** - AIML
- Project Lead & Developer

## 📞 Support

For issues, questions, or suggestions, please open an issue on the repository.

## 🙏 Acknowledgments

- Canvas Confetti library for animations
- Google Fonts (Nunito, Fredoka)
- MongoDB Atlas for database hosting
- Express.js community

---

**Happy Learning! 🚀✨**
