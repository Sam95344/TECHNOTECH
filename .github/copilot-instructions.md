# TechNotech MERN Website - AI Agent Instructions

## Architecture Overview
This is a MERN stack application with separate `backend/` (Express.js + MongoDB) and `frontend/` (React + Vite) directories. The backend provides REST APIs for services, certificates, and internships management, while the frontend delivers a glassmorphism-styled website with sections for services, internships, and admin functionality.

**Key Components:**
- `backend/server.js`: Main Express server with MongoDB connection and API routes
- `frontend/src/App.jsx`: React app with section-based routing (home, about, services, verify, admin)
- Certificate verification via `frontend/src/components/PublicVerification.jsx` calling `/api/certificates/verify/:number`
- Services management via `frontend/src/components/AdminDashboard.jsx` calling `/api/services/*`

## Development Workflow
- **Start both servers**: `npm run dev` (root) runs backend on port 5000 and frontend on port 5173 concurrently
- **Individual servers**: `npm run server` (backend) or `npm run client` (frontend)
- **Install all deps**: `npm run install-all` (root script installs both backend and frontend dependencies)
- **Environment**: Create `backend/.env` with `MONGODB_URI`, `JWT_SECRET`, `PORT=5000`

## Code Patterns
- **API Calls**: Use axios in frontend components (e.g., `axios.get('http://localhost:5000/api/certificates/verify/${number}')`)
- **Certificate Generation**: Auto-generate IDs like `'CERT' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase()`
- **Styling**: CSS variables in `frontend/src/index.css` for glassmorphism theme (dark background, blue/purple gradients)
- **Component Structure**: Functional React components with className-based styling, no CSS modules
- **Backend Routes**: RESTful endpoints in `backend/routes/` with async/await and try/catch error handling

## Key Files to Reference
- `backend/models/Service.js`, `backend/models/Internship.js`, `backend/models/Certificate.js`: Mongoose schemas for services, internships, and certificates
- `backend/routes/serviceRoutes.js`, `backend/routes/internshipRoutes.js`, `backend/routes/certificateRoutes.js`: REST API routes for CRUD operations
- `frontend/src/components/AdminDashboard.jsx`: Admin interface for managing services, internships, and certificates (uses backend APIs)
- `frontend/src/components/PublicVerification.jsx`: Public certificate verification interface
- `frontend/src/components/Services.jsx`: Dynamic services display component (fetches from `/api/services`)
- `frontend/src/components/Internship.jsx`: Dynamic internships display component (fetches from `/api/internships`)
- `frontend/vite.config.js`: Vite configuration for React development

## Integration Points
- MongoDB connection in `backend/server.js` with Mongoose models for services, internships, and certificates
- CORS enabled for frontend-backend communication
- Services display flow: Frontend fetches from `/api/services` → renders dynamic service cards
- Internships display flow: Frontend fetches from `/api/internships` → renders dynamic internship cards
- Certificate verification flow: Frontend input → Backend lookup → JSON response with certificate details

## Conventions
- Use `section-spacing` class for consistent spacing between components
- Glassmorphism effects via `backdrop-filter: blur()` and rgba backgrounds
- Admin routes accessible via `/admin` pathname (no auth implemented yet)
- Public certificate verification available via navbar "Verify Certificate" link</content>
<parameter name="filePath">c:\Users\sa721\Downloads\technotech_website\NEW\mern-technotech\.github\copilot-instructions.md