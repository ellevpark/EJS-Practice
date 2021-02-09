const express = require('express'); 
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

let items= [];

app.get('/', (req, res) => {

  let today = new Date();
  // let currentDay = today.getDay();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day,
    newListItems: items
  });
});

app.post("/", (req, res) => {
  let item = req.body.newItem
  items.push(item)
  res.redirect("/")
});

app.listen(3000, function() {
  console.log("I am listening")
})