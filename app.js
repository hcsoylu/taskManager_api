const express = require("express");
const app = express();

const connectDB = require("./db/connect");

require("dotenv").config();

const tasksRouter = require("./routes/tasks");

//middleware
app.use(express.json());

const PORT = process.env.PORT || 7070;

app.use("/api/v1/tasks", tasksRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(PORT, () => {
      console.log(`server is listening on ${PORT}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
