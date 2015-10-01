// Login Page
// socketed for login error

var Login = React.createClass({
	getInitialState: function(){
		return {
			error: false,
			username: ''
		}
	},
	componentDidMount: function() {
		socket.on('loginError', this.loginError)
	},
	loginError: function(){
		this.setState({error: true})
	},
	usernameHandler: function(e){
		this.setState({username: e.target.value})
	},
	tryLogin: function(e){
		e.preventDefault()
		socket.emit('userCheck', {user: this.state.username})
	},
	render: function(){
		var title = React.createElement('h3', null, 'Please Log In with a Username First')
		var hr = React.createElement('hr')
		var signup = React.createElement('input', {type: 'text', placeholder:'Enter Username Here', onChange: this.usernameHandler, className: 'loginInput'})
		var submit = React.createElement('input', {type: 'submit', value: 'Log In', className:'loginButton'})
		var app = ['form', {onSubmit: this.tryLogin, className:'loginApp'}, title, hr, signup, submit]
		
		if(this.state.error){
			app.push(React.createElement(ErrorMessage, {error: 'Username already exists!\nPlease try a different username.'}))
		}
		return (React.createElement.apply(null, app))
	}
})
