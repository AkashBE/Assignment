const express = require("express");
const bodyParser = require("body-parser");
const metadata = require("./src/routes/metadata");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/get-meta-data", metadata);

app.get("/", (req, res) => {
  res.send("Please go to /modeule_name and /screen_name");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listining on port ${port}...`));
