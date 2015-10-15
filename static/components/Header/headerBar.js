//Header bar
//contains the name label, disabled user field, users label, select option ot chat with users

var HeaderBar = React.createClass({
	// anti-pattern
	// getInitialState: function(){
	// 	return{
	// 		username: this.props.username,
	// 		users: this.props.users
	// 	}
	// },
	// componentWillReceiveProps: function(nextProps) {
	//   this.setState({
	//     username: nextProps.username,
	//     users: nextProps.users
	//   });
	// },
	render: function(){
		var nameLabel = React.createElement('label', null, 'Name: ')
		var usernameForm = React.createElement(UsernameField, {username: this.props.username})
		var selectLabel = React.createElement('label', null, 'Start a Conversation: ')
		var userSelect = React.createElement(UserSelect, {user: this.props.username, users: this.props.users})

		var name = React.createElement('div', {
			className: 'col-xs-12 col-sm-4 col-md-4 col-lg-4'
		}, nameLabel, usernameForm)

		var select = React.createElement('div', {
			className: 'col-xs-12 col-sm-4 col-md-4 col-lg-4'
		}, selectLabel, userSelect)

		return (
			React.createElement('div', {
				'className': 'row header-bar',
			},
			name,
			select)
		);
	}
})