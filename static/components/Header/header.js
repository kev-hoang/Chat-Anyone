//Header with Title and HR

var Header = React.createClass({
	render: function(){
		var title = React.createElement('h1', null, 'Chat Anyone')
		var hr = React.createElement('hr')

		return (
			React.createElement('div', {
				'className': 'title-heading',
			},
			title,
			hr)
		);
	}
})