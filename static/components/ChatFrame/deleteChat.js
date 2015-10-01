// the delete button to remove a single window

var DeleteButton = React.createClass({
	render: function(){
		return (
			React.createElement('button',{
				'className': 'btn-danger deleteChat',
				onClick: this.props.handleClick
			}, 'x')
		);
	}
})