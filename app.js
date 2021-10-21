const express = require("express");
const app = express();

const tasksRouter = require("./routes/tasks");

//middleware
app.use(express.json());

const PORT = process.env.PORT || 9000;

//routes
app.get("/", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}...`);
});
