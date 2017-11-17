var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/commentDB',{useMongoClient:true});
var roastSchema = mongoose.Schema({
  Professor:String,
  Roast:String
});

var Roast = mongoose.model('Roast',roastSchema);

var db = mongoose.connection;

db.on('error', console.error.bind(console,'connection error:'));
db.once('open',function(){ console.log("connected")});

/* GET home page. */
router.post('/roast', function(req,res,next){
  console.log("roast");
  console.log(req.body);
  var newcomment = new Roast(req.body); //[3]
  console.log(newcomment); //[3]
  newcomment.save(function(err, post) { //[4]
    if (err) return console.error(err);
    console.log(post);
    res.sendStatus(200);
  });
});

router.get('/roast', function(req, res, next) {
  console.log("roast");
  Roast.find(function(err,roastList){
    if(err) return console.error(err);
    else{
      console.log(roastList);
      res.json(roastList);
    }
  });
});

router.delete('/roast',function(req,res,next){
  console.log("roast");
  Roast.remove(function(err){
    if(err) return console.error(err);
    else{
      console.log("delete worked");
      res.sendStatus(200);
    }
  });
});


module.exports = router;
