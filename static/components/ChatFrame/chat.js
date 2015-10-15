// this is the main component of the chat window
// contains array of messages objects that turn to message components

var ChatMessages = React.createClass({
	// anti-pattern
	// getInitialState: function(){
	// 	return {
	// 		chat: this.props.chat,
	// 		me: this.props.me,
	// 		chatWith: this.props.chatWith
	// 	}
	// },
	// componentWillReceiveProps: function(nextProps) {
	//   this.setState({
	//     chat: nextProps.chat
	//   });
	// },
	componentWillUpdate: function() {
	  var node = this.getDOMNode();
	  this.shouldScrollBottom = node.scrollTop + node.offsetHeight >= node.scrollHeight-50;
	},
	 
	componentDidUpdate: function() {
	  if (this.shouldScrollBottom) {
	    var node = this.getDOMNode();
	    node.scrollTop = node.scrollHeight+10000
	  }
	},
	render: function(){
		var me = this.props.me
		var messages = this.props.chat.map(function(message){
			return React.createElement(Message, {
				user: message.user,
				text: message.text,
				date: message.date,
				me: me
			})
		})
		
		var el = ['div', {
			className: 'chat',
			id: 'chat-'+this.props.chatWith+'-messages'
		}]
		el = el.concat(messages)
		return (
			React.createElement.apply(null, el)
		)
	}
})