const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).render("index");
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

//app.
//get - getting data from db
//post - creating new data
//put - updating data
//delete - delete
