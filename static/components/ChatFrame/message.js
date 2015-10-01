// Each individual message

var Message = React.createClass({
	getInitialState: function(){
		return {
			user: this.props.user,
			text: this.props.text,
      date: new Date(this.props.date).toLocaleTimeString(),
      me: this.props.me
		}
	},
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      user: nextProps.user,
      text: nextProps.text,
      date: new Date(nextProps.date).toLocaleTimeString()
    });
  },
  render: function() {
  	var name = React.createElement('strong', {
      className: this.state.user === this.state.me ? 'me':'friend'
    }, this.state.user + ': ')
  	var text = React.createElement('span', {className: 'text'}, this.state.text)
    var date = React.createElement('span', {className: 'date'}, this.state.date)
      return (
      	React.createElement('div', {className: 'message'}, name, text, date)
      )
  }
})