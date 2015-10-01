// makes an error message

var ErrorMessage = React.createClass({
	getInitialState: function(){
		return {error: this.props.error}
	},
	componentWillReceiveProps: function(nextProps) {
	  this.setState({error: nextProps.error});
	},
	render: function(){
		return (
			React.createElement('div',{
				'className': 'error'
			}, this.state.error)
		);
	}
})