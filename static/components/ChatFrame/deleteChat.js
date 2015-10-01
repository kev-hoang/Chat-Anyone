// the delete button to remove a single window

var DeleteButton = React.createClass({
	render: function(){
		return (
			React.createElement('button',{
				'className': 'btn-danger',
				onClick: this.props.handleClick
			}, 'x')
		);
	}
})