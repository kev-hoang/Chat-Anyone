// this is the main component of the chat window
// contains array of messages objects that turn to message components

var ChatMessages = React.createClass({
	getInitialState: function(){
		return {
			chat: this.props.chat,
			me: this.props.me
		}
	},
	componentWillReceiveProps: function(nextProps) {
	  this.setState({
	    chat: nextProps.chat
	  });
	},
	render: function(){
		var me = this.state.me
		var messages = this.state.chat.map(function(message){
			return React.createElement(Message, {
				user: message.user,
				text: message.text,
				date: message.date,
				me: me
			})
		})
		
		var el = ['div', {className: 'chat'}]
		el = el.concat(messages)
		return (
			React.createElement.apply(null, el)
		)
	}
})