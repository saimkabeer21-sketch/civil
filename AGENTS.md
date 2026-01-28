## Project Summary
A simple and professional Civil Engineering Portfolio website designed to showcase engineering services, project history, and professional expertise. The application features a clean, responsive UI with a focus on structural engineering aesthetics.

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS 4.x, Lucide React (Icons), Axios
- **Backend**: Node.js, Express.js
- **Data**: Static JSON files (No database)
- **Deployment**: Configured for local development with a proxy for API calls

## Architecture
- `client/`: React frontend with Vite
  - `src/components/`: Reusable UI components (Navbar, Hero, Services, etc.)
  - `src/App.jsx`: Main entry point and data fetching logic
- `server/`: Express backend
  - `data/`: Static data storage for projects and services
  - `index.ts`: API routes and server configuration

## User Preferences
- No database required (stateless/static data)
- Simple and clean UI
- Focus on civil engineering context (Structural Design, Construction, etc.)

## Project Guidelines
- Use Tailwind CSS for styling
- Maintain a professional, engineering-focused color palette (Deep Blue/Primary)
- Ensure mobile responsiveness for all sections
- Use Lucide React for consistent iconography

## Common Patterns
- Data fetching from `/api` endpoints using Axios in `useEffect` hooks
- Smooth scrolling for internal navigation links
- Component-based architecture for clear separation of concerns
