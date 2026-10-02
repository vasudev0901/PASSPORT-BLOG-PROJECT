# BlogSpace

A simple blog website with user authentication, built with **Node.js**, **Express**, **Passport.js** (local strategy), and **EJS** templates.

## 🎥 project Video

Watch the project demo here: [ Google Drive](https://drive.google.com/file/d/1HyHv1R4q1gPbjGA0QRt5DMdwSIrPQjcz/view?usp=sharing)

## Features

- Email and password login using Passport Local Strategy
- Session-based authentication with `express-session`
- Protected home page (redirects to login if not signed in)
- Logout functionality
- Responsive design (login page and blog grid adapt to mobile screens)
- Server-side rendering with EJS

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime |
| Express 5 | Web framework |
| Passport + passport-local | Authentication |
| express-session | Session management |
| EJS | Templating |
| Nodemon | Auto-restart during development |

## Project Structure

```
├── app.js              # Express server, routes, and Passport config
├── package.json
├── package-lock.json
├── views/
│   ├── login.ejs       # Login page
│   └── index.ejs       # Home page (protected)
└── public/
    └── style.css       # Styles
```

> Note: Express looks for templates in `views/` and static files in `public/`, so place the files accordingly.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd <your-project-folder>

# Install dependencies
npm install
```

### Run the App

```bash
node app.js
```

Or with auto-reload:

```bash
npx nodemon app.js
```

Open **http://localhost:3000** in your browser.

## Demo Login

| Field | Value |
|-------|-------|
| Email | `admin@gmail.com` |
| Password | `12345` |

## Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/login` | Show login page |
| POST | `/login` | Authenticate user |
| GET | `/` | Home page (requires login) |
| GET | `/logout` | Log out and redirect to login |

## Notes

- The credentials are hardcoded for demo purposes. For a real application, use a database and hash passwords (e.g., with `bcrypt`).
- Change the session secret (`blog-secret`) and store it in an environment variable before deploying.
