#  Smart Traffic Monitoring Dashboard

A Full Stack Smart Traffic Monitoring Dashboard developed using the MERN Stack. This project helps monitor traffic conditions, manage traffic junctions, and visualize real-time traffic information through an interactive dashboard.

---

#  Features

- User Login
- Traffic Dashboard
- Vehicle Count Monitoring
- Traffic Signal Management
- Traffic Junction Management
- Live Traffic Map
- Camera Feed
- Traffic Analytics
- Reports
- MongoDB Atlas Integration
- REST API using Express.js

---

#  Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- React Router DOM
- React Icons
- Recharts
- Axios

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- CORS

## AI
- Python
- OpenCV
- YOLO

---

#  Project Structure

```text
Traffic-Monitoring-Dashboard
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── README.md
└── .gitignore
```

---

#  Database Schema

Traffic Collection

| Field | Type |
|-------|------|
| name | String |
| latitude | Number |
| longitude | Number |
| vehicleCount | Number |
| congestionLevel | String |
| signal | String |

---

#  REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/traffic | Get All Traffic Records |
| GET | /api/traffic/:id | Get Traffic Record By ID |
| POST | /api/traffic | Add New Traffic Record |
| PUT | /api/traffic/:id | Update Traffic Record |
| DELETE | /api/traffic/:id | Delete Traffic Record |

---

#  Installation

## Clone Repository

```bash
git clone https://github.com/magulur2022-del/Traffic-Monitoring-Dashboard.git
```

## Frontend

```bash
cd client
npm install
npm run dev
```

## Backend

```bash
cd server
npm install
npm run dev
```

---

#  Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Create a `.env.example` file.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

#  API Testing

The backend APIs were tested using Thunder Client.

- GET All Traffic Records
- GET Traffic Record By ID
- POST New Traffic Record
- PUT Update Traffic Record
- DELETE Traffic Record

All CRUD operations are connected successfully with MongoDB Atlas using Mongoose.

---

#  Screenshots

- Login Page
- Dashboard
- Live Traffic Map
- Traffic Signal Management
- Traffic Junction Management
- Traffic Analytics
- MongoDB Atlas
- Thunder Client GET API
- Thunder Client POST API
- Thunder Client PUT API
- Thunder Client DELETE API

---

#  Future Enhancements

- Emergency Vehicle Detection
- Automatic Traffic Signal Control
- Number Plate Recognition
- Accident Detection
- AI Traffic Prediction
- Weather-Based Traffic Analysis

---

#  Developer

**Nagamani Maguluri**

GitHub: https://github.com/magulur2022-del

---

##  Star this repository if you like this project.