# TECHNOTECH MERN Website

A modern glassmorphism-themed MERN stack website for TECHNOTECH NOVA SOLUTIONS, featuring dynamic services, internships, certificate verification, and an admin dashboard.

## Features
- **Glassmorphism UI**: Stylish, blurred backgrounds with blue/purple gradients for a futuristic look.
- **Dynamic Sections**: Home, About, Services, Internships, Careers, FAQs, Contact, and more.
- **Admin Dashboard**: Manage services, internships, and certificates from a single interface.
- **Certificate Verification**: Publicly verify certificates by ID.
- **Internship Applications**: Apply for internships and receive email notifications.
- **Responsive Design**: Works beautifully on desktop and mobile.

## Tech Stack
- **Frontend**: React + Vite
- **Backend**: Express.js + MongoDB
- **Styling**: Custom CSS with glassmorphism effects
- **Email**: Nodemailer for internship notifications

## Quick Start
1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/technotech-mern.git
   cd technotech-mern
   ```
2. **Install dependencies**
   ```bash
   npm run install-all
   ```
3. **Configure environment**
   - Create `backend/.env` with:
     ```env
     ADMIN_USERNAME=admin@technotech.com
     ADMIN_PASSWORD=yourpassword
     JWT_SECRET=your_jwt_secret
     MONGODB_URI=mongodb://localhost:27017/technotech
     MAIL_USER=your_email@gmail.com
     MAIL_PASS=your_app_password
     ```
4. **Start servers**
   ```bash
   npm run dev
   ```
   - Backend: http://localhost:5000
   - Frontend: http://localhost:5173

## Folder Structure
```
backend/    # Express.js API & MongoDB models
frontend/   # React + Vite client app
```

## Main Components
- `frontend/src/App.jsx`: Routing and layout
- `frontend/src/components/`: All UI sections
- `backend/models/`: Mongoose schemas
- `backend/routes/`: REST API endpoints

## Theming & UI
- Glassmorphism: `frontend/src/index.css`
- Consistent spacing: `section-spacing` class
- Footer only visible after scrolling

## Admin Access
- Go to `/admin` in the navbar
- Use credentials from `.env`

## License
MIT

---
Transforming ideas into reality with innovative technology solutions and exceptional digital experiences. Your reliable partner for comprehensive IT services and software development expertise.