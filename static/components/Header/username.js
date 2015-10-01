// Field for the username
// currently disabled to match mock-up
// plan on making an accompanying button to allow change on username

var UsernameField = React.createClass({
	getInitialState: function(){
		return {username: this.props.username}
	},
	componentWillReceiveProps: function(nextProps) {
	  this.setState({
	    username: nextProps.username
	  });
	},
	render: function(){
		var props = {
				className: 'usernameField',
				id: 'username',
				type: 'text',
				placeholder: 'Enter Username',
				disabled: true,
				value: this.state.username
			}
		
		return (
			React.createElement('input', props)
		);
	}
})
