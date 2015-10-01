//Header bar
//contains the name label, disabled user field, users label, select option ot chat with users

var Header = React.createClass({
	getInitialState: function(){
		return{
			username: this.props.username,
			users: this.props.users
		}
	},
	componentWillReceiveProps: function(nextProps) {
	  this.setState({
	    username: nextProps.username,
	    users: nextProps.users
	  });
	},
	render: function(){
		var nameLabel = React.createElement('label', null, 'Name: ')
		var usernameForm = React.createElement(UsernameField, {username: this.state.username})
		var selectLabel = React.createElement('label', null, 'Start a Conversation: ')
		var userSelect = React.createElement(UserSelect, {user: this.state.username, users: this.state.users})

		return (
			React.createElement('form', {
				'className': 'header',
			},
			nameLabel,
			usernameForm,
			selectLabel,
			userSelect)
		);
	}
})