// Create a new 'render' controller method
exports.render = function(req, res) {
	// Set the safe user object 
	const user = (!req.user) ? null : req.user;

	// Use the 'response' object to render the 'index' view with a 'title' and 'user' properties
	res.render('index', {
		user: JSON.stringify(user)
	});
};