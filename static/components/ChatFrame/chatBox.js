// The chat window
// sends message via socket
// contains title bar with delete button, message window, message input

var ChatBox = React.createClass({
	// anti-pattern
	// getInitialState: function(){
	// 	return {
	// 		// chatWith: this.props.chatWith,
	// 		// chat: this.props.chat,
	// 		// savedChat: convos.findWhere({with: this.props.chatWith}),
	// 		// user: this.props.user,
	// 		// handleDelete: this.props.delete
	// 	}
	// },
	// componentWillReceiveProps: function(nextProps) {
	//   this.setState({
	// 		chatWith: nextProps.chatWith,
	// 		chat: nextProps.chat,
	// 		user: nextProps.user,
	// 		handleDelete: nextProps.delete
	// 	});
	// },
	sendMessage: function(message){
		var messages = props.chat;
		messages.push(message);
		this.setState({ chat: messages });
		convos.findWhere({with: this.props.chatWith}).save({messages: messages})
		socket.emit('newMessage', {
			message: message,
			room: this.props.chatWith
		});
	},
	render: function(){
		var deleteChat = React.createElement(DeleteButton, {handleClick: this.spropshandleDelete})
		var title = React.createElement('h4',{className: 'chatTitle'}, this.props.chatWith, deleteChat)
		var hr = React.createElement('hr',{className: 'chatHR'})
		var chat = React.createElement(ChatMessages, {
			chat: this.props.chat,
			me: this.props.user,
			chatWith: this.props.chatWith
		})
		var input = React.createElement(MessageInput, {
			user: this.props.user,
			onMessageSubmit: this.sendMessage
		})
		var props = {
			className: 'chatBox col-xs-12 col-sm-4 col-md-3 col-lg-2',
			id: 'chat-' + this.props.chatWith
		}

		return (
			React.createElement('div', props, title, hr, chat, input)
		);
	}
})
