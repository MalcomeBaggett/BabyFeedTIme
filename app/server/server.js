const express = require("express")
const dotenv = require("dotenv")
const app = express()
const connectDB = require("./config/db")

// api routes
const feedRoute = require("./routes/feedRoutes")
const sleepRoute = require("./routes/sleepRoutes.js")
const diaperRouter = require("./routes/diaperRoutes")

// mount body-parser
app.use(express.json());
// configs
dotenv.config({
  path: "./config/config.env",
});
// connect DB
connectDB()

// load routes
app.use("/api/v1/feedRoutes", feedRoute);
app.use("/api/v1/sleepRoutes", sleepRoute)
app.use("/api/v1/diaperRoutes", diaperRouter)
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})

// Handle unhandled promise rejections and for mongodb connection failure
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`)
  server.close(() => process.exit(1))
})