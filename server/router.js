const authentication = require('./controllers/authentication');
const passportservice = require('./services/passport');
const passport = require('passport');

//by default wants to create a cookie based session
const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});


//const test = require('./controllers/test');

module.exports = function(app){
	app.get('/', requireAuth, function(req, res){
		res.send({message: 'RUBY RUSSELL loves you'});
	});
	app.post('/signin', requireSignin, authentication.signin);
	app.post('/signup', authentication.signup);

	//app.post('/ever', test.ruby);
	};
