//connect socket
var socket = io.connect('http://' + document.domain + ':' + location.port + '/chat')
socket.on('connected', function(){
	console.log('connected via socket')
})
//Backbone standard router, model, collection with browser localStorage

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'login': 'login'
	}
})

var Chat = Backbone.Model.extend({
	defaults: {
		messages: [],
		with: ''
	}
});

var Conversations = Backbone.Collection.extend({
	model: Chat,
	localStorage: new Backbone.LocalStorage("Conversations")
})

//fetch's conversations in storage on startup
var convos = new Conversations()
convos.fetch()