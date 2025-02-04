import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// __dirname सेट करें
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// .env कॉन्फ़िगर करें
dotenv.config();

// डेटाबेस कनेक्ट करें
connectDB();

// Express ऐप बनाएं
const app = express();

// मिडलवेयर
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// API रूट्स
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// स्टैटिक फोल्डर सर्व करें
app.use(express.static(path.join(__dirname, "./client/dist")));

// कोई भी अन्य रूट पर React ऐप लोड करें
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});


// // Serve static files from the React app (if in production)
// app.use(express.static(path.join(__dirname, "client/build")));

// // Catch-all route to serve React app
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });


// पोर्ट सेट करें
const PORT = process.env.PORT || 5000;

// सर्वर रन करें
app.listen(PORT, () => {
  console.log(`🚀 Server running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});






// {
//   "name": "e-comm-2025",
//   "version": "1.0.0",
//   "main": "server.js",
//   "type": "module",
//   "scripts": {
//     "start": "node server.js",
//     "install-client": "cd client && npm install",
//     "build-client": "cd client && npm run build && mv client/dist ../client/dist",
//     "build": "npm run install-client && npm run build-client",
//     "client": "cd client && npm run dev",
//     "backend": "nodemon server.js",
//     "dev": "concurrently \"npm run backend\" \"npm run client\""
//   },
//   "keywords": [
//     "ecommerce",
//     "rest api",
//     "nodejs",
//     "express",
//     "mongoose"
//   ],
//   "author": "Vineet Mishra",
//   "license": "MIT",
//   "description": "Ecommerce REST API built using Node.js, Express, and MongoDB",
//   "dependencies": {
//     "axios": "^1.7.9",
//     "bcrypt": "^5.1.1",
//     "bcryptjs": "^2.4.3",
//     "braintree": "^3.28.0",
//     "colors": "^1.4.0",
//     "concurrently": "^9.1.2",
//     "cors": "^2.8.5",
//     "dotenv": "^16.4.7",
//     "express": "^4.21.2",
//     "express-formidable": "^1.2.0",
//     "helmet": "^8.0.0",
//     "jsonwebtoken": "^9.0.2",
//     "moment": "^2.30.1",
//     "mongodb": "^6.12.0",
//     "mongoose": "^8.9.5",
//     "morgan": "^1.10.0",
//     "react-helmet": "^6.1.0",
//     "slugify": "^1.6.6"
//   },
//   "devDependencies": {
//     "nodemon": "^3.1.9"
//   }
// }