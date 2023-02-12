const express = require("express");


const app = express();
const port = 3002;
const cors = require("cors");
const { dbconnection } = require("./config/db");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => res.send("Home Route"));

app.listen(port, async () => {
  try {
    dbconnection;
    console.log({ msg: "connected to database" });
  } catch (err) {
    console.log(err);
  }
  console.log(`app listening to port ${port}!`);
});
