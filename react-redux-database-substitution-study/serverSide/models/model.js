var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/myCRUD_database');

var db = mongoose.connection;

db.on('error', function(){
	console.log("Mongodb connection error!!!");
	});
db.on('open', function(){
	console.log('db is super connected');
});

var Schema = mongoose.Schema;

//create a schema definition
//this is like the skeleton of your db collection

var testSchema = new Schema({
	id: String,
	title: String,
	categories: String,
	content: String
});

var CRUDList = mongoose.model('CRUDcollectionTest', testSchema);

// var ObjectID = require('mongodb').ObjectID;

// var user = {
//   name: 'rube',
//   age: 25
//  //_id: new ObjectID()
// };

// db.collection('joker').insert(user);

//create a model class

//first argument is singular name of the collection that will be created for your mondel.
//Mongoose will create the database collection for the above model, 
//second argument is the schema you want to use in creating the model


module.exports = CRUDList;