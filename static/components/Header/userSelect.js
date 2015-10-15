// the select and option tags for all connected users
// enables chat window for another user
// this is temp until the next iteration of slack-like select

var UserSelect = React.createClass({
	getInitialState: function() {
        return {
        	selected: ''
        	// users: this.props.users
        }
      },
	componentDidUpdate: function(prevProps, prevState){
		if(this.state.selected != prevState.selected){
			socket.emit('chat', {with: this.state.selected})
		}
	},
	// anti-pattern
	// componentWillReceiveProps: function(nextProps) {
	//   this.setState({
	//     users: nextProps.users
	//   });
	// },
	changeHandler: function(e) {
		this.setState({selected : e.target.value })
	},
	render: function(){
		var el = [
			'select',
			{
				className: 'users', 
				value: this.state.selected, 
				onSelect: this.changeHandler
			},
			React.createElement('option', {
				disable: true,
				value: '',
				hidden: true
			})
			]
		
		var x = this.props.users.map(function(user){
			return React.createElement('option', {value: user}, user)
		})
		el = el.concat(x)
		
		return (
			React.createElement.apply(null, el)
		);
	}

})
