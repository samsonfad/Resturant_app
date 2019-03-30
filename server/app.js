const express = require('express'),
// const mongoose = require('mongoose');



const app = express();
// mongoose.connect("mongodb://localhost/resturant_app");
app.use(bodyParser.urlencoded({extended: true}));

// const orderSchema = new mongoose.Schema({

// });


app.post('/order', function(req, res) {
  
});

app.listen(8000, () => {
  console.log('Server has started');
});