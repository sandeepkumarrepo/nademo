const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const controller = require("./app/controllers/demo.controller.js");
const Demo = require("./app/models/demo.model.js");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
  const demo = new Demo(
    aNumber = 1234,
  )
Demo.create(demo)
  console.log(`get all == ${Demo.getAll()}.`);
});

require("./app/routes/demo.routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
