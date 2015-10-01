// Chat App
// socketed for user join and leave

var App = React.createClass({
	getInitialState: function(){
		return {
			onlineUsers: this.props.users,
			user: this.props.user
		}
	},
	componentDidMount: function() {
		socket.on('userJoined', this.userJoined)
		socket.on('userLeft', this.userLeft)
	},
	userJoined: function(data){
		this.setState({onlineUsers: data.users})
	},
	userLeft: function(data){
		this.setState({onlineUsers: data.users})
	},
	render: function(){
		var header = React.createElement(Header, {username: this.state.user, users: this.state.onlineUsers})
		var chatFrame = React.createElement(ChatFrame, {user: this.state.user})
		var app = React.createElement('div', null, header, chatFrame)
		return (
			app
		);
	}
})