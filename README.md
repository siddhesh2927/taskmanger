Task Manager Application - Complete README
A full-stack task management web application built with React, Redux, Node.js, Express, and MongoDB. Create, manage, and organize your tasks with subtasks across different categories.

📋 Table of Contents
Features
Tech Stack
Project Structure
Prerequisites
Installation & Setup
Environment Variables
Running the Application
API Documentation
Features Guide
Troubleshooting
Security Notes
Future Enhancements
✨ Features
User Management
User Registration - Create new account with validation
User Login - Secure authentication with JWT tokens
Session Persistence - Cookies-based session management (7-day expiry)
Task Management
Create Tasks - Add tasks with title, description, date, and tag
Read Tasks - View all tasks with filtering options
Update Tasks - Edit task details and status
Delete Tasks - Remove tasks permanently
Task Status - Mark tasks as pending or completed
Task Organization
Tags/Categories - Organize tasks as Personal, Official, or Others
Subtasks - Add multiple subtasks to parent tasks
Subtask Status - Track subtask completion independently
Status Filtering - Filter tasks by status (All, Pending, Completed)
User Experience
Dashboard - Task summary showing count by category
Responsive Design - Works seamlessly on mobile, tablet, and desktop
Material UI - Professional, accessible UI components
Real-time Updates - Immediate feedback on task operations
🛠 Tech Stack
Frontend
Technology	Version	Purpose
React	18.1.0	UI library
Redux	4.2.0	State management
React Redux	8.0.2	Redux bindings for React
Redux Thunk	2.4.1	Async actions middleware
Material UI	5.8.1	Component library
React Router	6.3.0	Client-side routing
JS Cookie	3.0.1	Cookie management
Styled Components	5.3.5	CSS-in-JS styling
Backend
Technology	Version	Purpose
Node.js	-	Runtime environment
Express	4.18.1	Web framework
MongoDB	6.3.4	Database
Mongoose	6.3.4	MongoDB ODM
JWT	8.5.1	Authentication
Bcrypt	5.0.1	Password hashing
CORS	2.8.5	Cross-origin requests
Express Validator	6.14.1	Input validation
Dotenv	16.0.1	Environment variables
📁 Project Structure
📦 Prerequisites
Before getting started, ensure you have:

Node.js (v14 or higher) - Download
npm (comes with Node.js)
MongoDB Atlas Account - Create Account
Git (optional) - Download
🚀 Installation & Setup
1. Clone the Repository
2. Backend Setup
Install Dependencies
Configure Environment Variables
Edit .env file with your MongoDB Atlas credentials and JWT secret.

3. Frontend Setup
Install Dependencies
Configure Environment Variables
The frontend .env is pre-configured for local development.

🔐 Environment Variables
Backend (.env)
Frontend (.env)
▶️ Running the Application
Start Backend Server (Terminal 1)
Expected output:

Start Frontend Development Server (Terminal 2)
Frontend opens automatically at: http://localhost:3000

📡 API Documentation
Authentication Endpoints
Register User
Login User
Task Endpoints
Get Tasks
Create Task
Update Task
Update Subtask
Delete Task
Get Task Summary
📚 Features Guide
User Registration
Click "Sign up" on the login page
Fill in:
Your name
Email address
Mobile number
Password (5-8 characters)
Click Register
Success! You'll be redirected to home page
User Login
Enter your email
Enter your password
Click Submit
Access your account
Creating a Task
Click "Add Task" in the sidebar
Fill in task details:
Task Title - Name of the task
Description - Detailed description
Tag - Choose Personal, Official, or Others
Date - Due date for the task
Add subtasks:
Enter subtask title
Click the + button
Click "Add Task" to save
Managing Tasks
View Tasks:

Click a category (Personal, Official, Others, or All)
Use the filter dropdown to show All, Pending, or Completed tasks
Update Task Status:

Click "Mark Completed" or "Mark Pending" button
Update Subtask:

Check/uncheck the checkbox next to subtask
Delete Task:

Click "Delete" button
Edit Task Details:

Update task status with the status button
Delete and recreate to change other details
Dashboard
The home page shows:

Welcome message with your name
Total task count
Count by category (Personal, Official, Others)
Loading indicators while fetching data
🔧 Troubleshooting
CORS Errors
Problem: Getting CORS error when logging in/registering

Solutions:

Ensure backend is running on port 1200
Check frontend .env has: REACT_APP_API_URL=http://localhost:1200
Restart both servers after changing .env
Clear browser cache (Ctrl+Shift+Delete)
MongoDB Connection Error
Problem: MongoDB connection error

Solutions:

Authentication Failed
Problem: "Invalid or expired token"

Solutions:

Try logging out and logging back in
Check browser cookies (DevTools > Application > Cookies)
Clear cookies manually if needed
Verify JWT_SECRET is consistent in .env
Frontend Won't Connect to Backend
Problem: Tasks not loading, getting network errors

Solutions:

Port Already In Use
Problem: Error: listen EADDRINUSE: Address already in use :::1200

Solutions:

Tasks Not Saving
Problem: Added task but it doesn't appear

Solutions:

Check backend console for error messages
Verify token is valid (hasn't expired)
Check browser console for error details
Ensure all required fields are filled
Try creating a simple task with minimal info first
🔒 Security Notes
Production Deployment
Backend (Heroku/Railway):

Frontend (Vercel/Netlify):

Security Best Practices
Never commit .env files - Already in .gitignore
Use strong passwords - Min 8 characters, mixed case, numbers, symbols
Change JWT_SECRET regularly
Restrict CORS origins in production
Use HTTPS for all production URLs
Validate input on both frontend and backend
Hash passwords with bcrypt (already implemented)
Validate tokens on protected routes (already implemented)
🚀 Deployment
Deploy Backend to Heroku
Deploy Frontend to Vercel
📈 Future Enhancements
 Task search and advanced filtering
 Task priority levels
 Due date reminders/notifications
 Attach files to tasks
 Collaboration (share tasks with others)
 Task templates
 Task statistics and analytics
 Dark mode
 Export tasks to PDF/CSV
 Task recurrence (daily, weekly, monthly)
 Time tracking
 Comments on tasks
🤝 Contributing
Contributions are welcome! Feel free to:

Fork the repository
Create a feature branch
Make your changes
Submit a pull request
📄 License
This project is open source and available under the ISC License.

⭐ Support
If you found this project helpful, please consider giving it a star on GitHub!


GitHub Repository: https://github.com/siddhesh2927/taskmanger.git

Created with ❤️ using React, Node.js, and MongoDB

📞 Contact & Support
For issues, questions, or suggestions, please:

Open an issue on GitHub
Check the CORS_FIX_README.md for common issues
Review MONGODB_SETUP.md for database setup
Last Updated: 2024
Version: 1.0.0
