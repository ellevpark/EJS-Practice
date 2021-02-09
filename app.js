const express = require('express'); 
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

  let today = new Date();
  let currentDay = today.getDay();
  let day = '';

  if (currentDay === 6 || currentDay === 0) {
    day = 'Weekend';
  } else {
    day = 'Weekday';
  }
  res.render('list', {kindOfDay: day});
});


app.listen(3000, function() {
  console.log("I am listening")
})