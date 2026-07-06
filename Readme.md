React acts as the frontend (the visual user interface) while Node.js acts as the backend (the server-side engine). Together, they form a "full-stack" JavaScript application where React builds what the user sees in the browser and Node.js manages the data, security, and logic behind the scenes.

   ┌────────────────────────────────┐         HTTP Request (API Call)         ┌───────────────────────────────┐
   │            FRONTEND            │  ────────────────────────────────────>  │            BACKEND            │
   │            (React)             │                                         │      (Node.js + Express)      │
   │  • Displays UI Components     │  <────────────────────────────────────  │  • Authenticates users        │
   │  • Captures user clicks/inputs │            JSON Data Response           │  • Fetches data from database │
   └────────────────────────────────┘                                         └───────────────────────────────┘

React (The Visual Layer): React runs entirely inside the user’s web browser. Its only purpose is to render interactive, reusable UI components like buttons, forms, navigation bars, and data dashboards. React cannot talk directly to a database or perform secure operations.
   
Node.js (The Logic Layer): Node.js runs on a computer server, not in the browser. Its purpose is to listen for requests from the frontend, execute heavy business logic, securely communicate with a database (like MongoDB or PostgreSQL), and handle user authentication.

React and Node.js are completely separate applications that communicate over the internet using APIs (Application Programming Interfaces) via HTTP requests.

The newer version of Vite does all of these automatically:

✅ Creates the client folder.
✅ Installs all dependencies (npm install).
✅ Starts the development server (npm run dev).

we just need to do (npm create vite@latest client -- --template react).
Now our react app will be serving at local host.

main.jsx

This is the entry point of your application.

Think of it as the main switch that turns your React app on.

Browser
   ↓
main.jsx
   ↓
App.jsx
   ↓
Login.jsx

Every React app starts here.

App.jsx

This is the root component.

Initially, it will simply say:

"Display the Login page."

Later, it will display different pages based on the route (Login, Register, Dashboard, etc.).

Login.jsx

This is where we'll build your login screen.

