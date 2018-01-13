
const jwt = require('jwt-simple');

const User = require('../models/user');

const config = require('../config');

function tokenForUser(user){
	const timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}


exports.signin = function(req, res, next){
	//user has already had their email and password authed
	//we just need to give them a token
	res.send({token: tokenForUser(req.user)});
}

exports.signup = function(req, res, next){

//console.log(req.body);

const email = req.body.email;
const password = req.body.password;
const username = req.body.username;


if (!email || !password){
	return res.status(422).send({error: "Oops, you must provide an email AND a password"});
}
//see if a user with the given email exists
User.findOne({
	email: email}, function(err, existingUser){
if (err) {return next(err);
}

// if a user with email does exist return an error

 if (existingUser) {return res.status(422).send({error: "Oops, email is in use"});
}

//  if (takenUsername) {return res.status(422).send({error: "Oops, someone has taken this username"});
// }

User.findOne({ username: username}, function(err, takenUsername){
if (err) {return next(err);
}
 if (takenUsername) {return res.status(422).send({error: "Oops, someone has taken this username. Try a new one"});
}

//if a user with email does not exist, create and save user record
const user = new User({
	username: username,
	email: email,
	password: password
});

user.save(function(err){
	if (err){
		return next(err);
	}
});

//respond to request indicating the users was created
res.json({token: tokenForUser(user)});
console.log("JWT TOKEN: " + tokenForUser(user));
});


}
);

}
