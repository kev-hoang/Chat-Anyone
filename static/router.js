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
	var username
	var usernameHandler = function(e){
		username = e.target.value
	}
	var login = function(){
		socket.emit('userCheck', {user: username})
		socket.on('userChecked', function(data){
			if(data.exists < 0){
				localStorage.user = username
				window.location.href = '/#'	
			}else{
				window.location.href = '/#/login'	
				alert('Username already exists!\nPlease enter a unique username.')
			}
		})
	}
	var title = React.createElement('h2', null, 'Please Log In with a Username First.')
	var signup = React.createElement('input', {type: 'text', placeholder:'Enter Username Here', onChange: usernameHandler})
	var submit = React.createElement('input', {type: 'submit', value: 'Log In'})
	var app = React.createElement('form', {onSubmit: login}, title, signup, submit)
	React.render(app, document.getElementById('app'))
})

Backbone.history.start()