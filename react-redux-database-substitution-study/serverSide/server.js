var express = require('express');
const app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3008;
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
 
 var CRUDList = require('./models/model.js');

const cors = require('cors');
app.use(cors());


app.post('/new', function(req, res){
new companyList({
	//name: req.body.name,
	//age: req.body.age

id: req.body.id,
    title: req.body.title,
    categories: req.body.categories,
    content: req.body.content


}).save(function(err, doc){
	if(err) res.json(err);
	else res.redirect('/');
})


 });


app.get('/getdata', function(req, res, next) {

CRUDList.model('CRUDcollectionTest').find(function(err, users){

if (err) {
      console.log(err);
      return res.send(500, 'Something Went wrong with Retrieving data');
    } else {


    for (var i = 0; i < users.length; i++) {
        var name = users[i].name;
        
        console.log(name);

        //var price = res[users][i].Price;
        // var badge = document.createElement('div');
        // badge.className = 'badge';
        // badge.innerHTML =
        //     '<h1>' + name + '</h1>' +
        //     '<div class="options-only-phone">';
        //I gave the div the same ID's as the userss in the object for ease
        //document.getElementById(users).appendChild(badge);
 
    }
}




	
});

});




app.get('/posts', function(req, res) {

CRUDList.model('CRUDcollectionTest').find({}, function(err, users){
	res.send(users);
});

});


app.get('/posts/:id', function(req, res) {

CRUDList.model('CRUDcollectionTest').find({_id: req.params.id}, function(err, users){
	res.send(users);
});

});


app.get('/', function(req, res){
	//res.sendFile(path.join(__dirname + '/index.html'));
    CRUDList.model('CRUDcollectionTest').find({}, function(err, users){
    res.send(users);
});

});



app.listen(PORT, function() {
    console.log('app connected and listening on ' + PORT);
});
