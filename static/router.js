// Backbone router for home and login

var users = []
var router = new Router()

// Home, the chat server.
// Checks if existing user on localStorage.
// If none sends to login page

router.on('route:home', function(){
	var user = localStorage.user
	if(user === undefined || user === 'undefined'){
		window.location.href = '/#/login'
	}else{
		socket.emit('join', {user: user})
		var app = React.createElement(App, {users: users, user: user})
		React.render(app, document.getElementById('app'))
	}
})

// Login page
// Checks if username already exists on server.

router.on('route:login', function(){
	socket.on('loginSuccess', function(data){
		localStorage.user = data.username
		window.location.href = '/#'	
	})
	React.render(React.createElement(Login), document.getElementById('app'))
})

Backbone.history.start()