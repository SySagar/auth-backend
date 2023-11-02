import express from "express";
import cors from "cors";
import appRoutes from "./routes/auth.js";
import welcomeRoutes from "./routes/welcome.js";
import DBConnect from "./config/db.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const whitelist = [
    "https://pensdown-staging.firebaseapp.com",
  ];
  app.use(
    cors({
      credentials: true,
      origin: function (origin, callback) {
        // console.log('origin', origin)
        if (whitelist.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
    })
  );
  app.use(express.json({limit: '50mb'}));
  app.use(express.urlencoded({limit: '50mb', extended: true}));

//connect to database
DBConnect();

//routes
app.use("/auth", appRoutes);
app.use("/", welcomeRoutes);

app.listen(5000, () => {
  console.log("🚀 Server is running on port 5000");
});
