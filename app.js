const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connection");
const tasks = require("./routes/tasks");

app.use(express.static("./public"));
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, () => {
      console.log("Server is listening to port 3000...");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
