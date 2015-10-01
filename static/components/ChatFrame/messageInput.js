var MessageInput = React.createClass({
	getInitialState: function(){
		return {
			text:"",
			user: this.props.user
		}
	},
	handleSubmit: function(e){
		e.preventDefault()
		var message = {
			user: this.state.user,
			text: this.state.text,
			date: Date.now()
		}
		this.props.onMessageSubmit(message)
		this.setState({ text: '' })
	},
	changeHandler: function(e){
		this.setState({ text : e.target.value })
	},
	render: function(){
		var props = {
				'type': 'text',
				"placeholder": 'Enter Message',
				onChange: this.changeHandler,
				value: this.state.text,
				onSubmit: this.sendMessage
			}
		var input = React.createElement('input', props)
		
		return (
			React.createElement('form', {id: 'messageInput', onSubmit: this.handleSubmit}, input)
		)
	}
})
