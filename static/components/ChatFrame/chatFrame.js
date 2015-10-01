// The frame that contains all the chat windows
// socketed for incoming messages and opening chat windows
// uses an array of open chats objects on the state
// not as efficient, need to optimize to render a single chat window

var ChatFrame = React.createClass({
	getInitialState: function(){
		return {
			openChats: [],
			user: this.props.user
		}
	},
	componentDidMount: function() {
		socket.on('openChat', this.openChat)
		socket.on('incomingMessage', this.receiveMessage)
	},
	removeChat: function(user){
		var self = this
		return function(){
			var openChats = self.state.openChats
			openChats = openChats.filter(function(chat){
				return user !== chat.with
			})
			self.setState({openChats: openChats})
		}
	},
	openChat: function(data){
		var exists = false
		var chatWith = data.with
		var chatDetail = {with: chatWith}
		var convo = convos.findWhere(chatDetail)
		if(!convo){
			chatDetail.messages = []
			convos.create(chatDetail)
		}else{
			chatDetail.messages = convo.get('messages')
		}
		
		var openChats = this.state.openChats.map(function(chat){
			if(chat.with === chatWith){
				exists = true
				return chatDetail
			}
			return chat
		})

		if(!exists){
			openChats.push(chatDetail)
		}

		this.setState({openChats: openChats})
	},
	receiveMessage: function(data){
		var friend = data.message.user
		var chat = convos.findWhere({with: friend})
		var messages = []
		if(!chat){
			convos.create({
				with: friend,
				messages: [data.message]
			})
		}else{
			messages = chat.get('messages')
			messages.push(data.message)
			chat.save({messages: messages})
		}
		data.with = friend
		this.openChat(data)
	},
	render: function(){
		var user = this.state.user
		var removeChat = this.removeChat
		var chats = this.state.openChats.map(function(chat){
			return React.createElement(ChatBox, {
				chatWith: chat.with,
				chat:chat.messages,
				user: user,
				delete: removeChat(chat.with)
			})
		})
		var heading = React.createElement('h2', null, 'Your Chats')
		var el = ['div', {className: 'chatFrame'}, heading]
		el = el.concat(chats)
		return (
			React.createElement.apply(null, el)
		);
	}
})