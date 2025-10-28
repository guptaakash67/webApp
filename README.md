#Web Application

A full-stack web application built with React, Node.js, Express, and MongoDB.

## 🚀 Features

- **User Authentication**
  - Register and Login functionality
  - JWT-based authentication
  - Protected routes

- **Task Management**
  - Create, Read, Update, and Delete tasks
  - Task status tracking
  - Task filtering and organization

## 🛠️ Tech Stack

### Frontend
- React
- React Router for navigation
- Axios for API requests
- Tailwind CSS for styling
- Vite as build tool

### Backend
- Node.js & Express
- MongoDB with Mongoose
- JWT for authentication
- CORS enabled
- dotenv for environment variables

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/guptaakash67/webApp.git
cd webApp
```

2. **Setup Backend**
```bash
cd backend
npm install

# Create a .env file with the following:
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret
# PORT=5000

npm start
```

3. **Setup Frontend**
```bash
cd frontend
npm install
npm run dev
```

## 🌐 Environment Variables

### Backend (.env)
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
```

## 🚀 Deployment

The application is deployed using Vercel:

- Frontend: https://web-app-ten-theta.vercel.app
- Backend: https://web-app-backend-gamma.vercel.app

### Local Development
- Frontend runs on: http://localhost:5173
- Backend runs on: http://localhost:5000

## 📝 API Endpoints

### Authentication
- POST `/auth/register` - Register a new user
- POST `/auth/login` - Login user
- GET `/auth/me` - Get current user

### Tasks
- GET `/tasks` - Get all tasks
- POST `/tasks` - Create a new task
- PUT `/tasks/:id` - Update a task
- DELETE `/tasks/:id` - Delete a task

### Profile
- GET `/profile` - Get user profile
- PUT `/profile` - Update user profile

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React Documentation
- Node.js
- Express
- MongoDB
- Vercel for hosting
