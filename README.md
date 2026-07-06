# InvisQ Project Structure

``` text
InvisibleQueue/
│
├── client/                         # React Frontend
│
│   ├── public/
│   │
│   ├── src/
│   │
│   ├── assets/
│   │      ├── images/
│   │      ├── icons/
│   │      └── logo/
│   │
│   ├── components/
│   │      ├── common/
│   │      │      Navbar.jsx
│   │      │      Footer.jsx
│   │      │      Loader.jsx
│   │      │      Button.jsx
│   │      │      Modal.jsx
│   │      │
│   │      ├── admin/
│   │      │      QueueTable.jsx
│   │      │      StatsCard.jsx
│   │      │      TokenCard.jsx
│   │      │      QueueControls.jsx
│   │      │
│   │      ├── customer/
│   │      │      JoinQueue.jsx
│   │      │      CurrentStatus.jsx
│   │      │      ETA.jsx
│   │      │      NotificationCard.jsx
│   │      │
│   │      └── map/
│   │             MapView.jsx
│   │
│   ├── pages/
│   │      Home.jsx
│   │      Login.jsx
│   │      Register.jsx
│   │      CustomerDashboard.jsx
│   │      AdminDashboard.jsx
│   │      QueuePage.jsx
│   │      Profile.jsx
│   │      NotFound.jsx
│   │
│   ├── layouts/
│   │      AdminLayout.jsx
│   │      CustomerLayout.jsx
│   │
│   ├── hooks/
│   │      useSocket.js
│   │      useNotification.js
│   │      useQueue.js
│   │
│   ├── context/
│   │      AuthContext.jsx
│   │      QueueContext.jsx
│   │
│   ├── services/
│   │      api.js
│   │      authService.js
│   │      queueService.js
│   │      socketService.js
│   │
│   ├── utils/
│   │      calculateETA.js
│   │      formatTime.js
│   │      constants.js
│   │
│   ├── routes/
│   │      AppRoutes.jsx
│   │
│   ├── styles/
│   │      globals.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├──────────────────────────────────────────────
│
├── server/
│
│   ├── config/
│   │      db.js
│   │      socket.js
│   │
│   ├── controllers/
│   │      authController.js
│   │      queueController.js
│   │      adminController.js
│   │      analyticsController.js
│   │
│   ├── routes/
│   │      authRoutes.js
│   │      queueRoutes.js
│   │      adminRoutes.js
│   │      analyticsRoutes.js
│   │
│   ├── middleware/
│   │      authMiddleware.js
│   │      errorMiddleware.js
│   │      roleMiddleware.js
│   │
│   ├── models/
│   │      User.js
│   │      Organization.js
│   │      Queue.js
│   │      Token.js
│   │
│   ├── services/
│   │      etaService.js
│   │      notificationService.js
│   │      queueEngine.js
│   │
│   ├── sockets/
│   │      queueSocket.js
│   │
│   ├── utils/
│   │      tokenGenerator.js
│   │      averageCalculator.js
│   │      responseHandler.js
│   │
│   ├── validators/
│   │      authValidation.js
│   │      queueValidation.js
│   │
│   ├── .env
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├──────────────────────────────────────────────
│
├── docs/
│      API.md
│      ER-Diagram.png
│      Architecture.png
│      Flowchart.png
│
├── README.md
│
├── .gitignore
│
└── package.json
```