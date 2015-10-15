// Each individual message

var Message = React.createClass({
 //      // anti-pattern
  // getInitialState: function(){
  //  return {
	// 		// user: this.props.user,
	// 		// text: this.props.text,
 //      // me: this.props.me
 //      date: new Date(this.props.date).toLocaleTimeString(),
	// 	}
	// },
 //  componentWillReceiveProps: function(nextProps) {
 //    this.setState({
 //      // anti-pattern
 //      // user: nextProps.user,
 //      // text: nextProps.text,
 //      date: new Date(nextProps.date).toLocaleTimeString()
 //    });
 //  },
  render: function() {
    var person = this.props.user === this.props.me ? 'me':'friend'
  	var name = React.createElement('strong', {
      className: person + 'Name'
    }, this.props.user)
  	var text = React.createElement('span', {className: 'text'}, this.props.text)
    var date = React.createElement('span', {className: 'date'}, new Date(this.props.date).toLocaleTimeString())
    return React.createElement('div', {className: 'message ' + person}, date, name, text)
  }
})