from flask import Flask, render_template, jsonify, session, request
from flask.ext.socketio import SocketIO, emit, join_room, leave_room

app = Flask(__name__)
users = []
app.config['SECRET_KEY'] = 'snFNOHn@14nFQGnaf_r81ne+r794!npFMQ'

socketio = SocketIO(app)

@app.route('/', methods=['GET', 'POST', 'PUT', 'DELETE'])
def main():
	return render_template('index.html')

#socket connected
@socketio.on('connect', namespace='/chat')
def on_connect():
	print('Client Connected')

#socket disconnected
@socketio.on('disconnect', namespace='/chat')
def test_disconnect():
	print('Client disconnected')
	try:
		user = session['user']
		users.remove(user)
		leave_room(user)
	except KeyError:
		print('Key Error')
	print(users)
	emit('userLeft', {'users': sorted(users)}, broadcast=True)

#checks if username already exists
@socketio.on('userCheck', namespace='/chat')
def check(data):
	index = None
	try:
		index = users.index(data['user'])
	except ValueError:
		index = -1
	emit('userChecked', {'exists': index})

#join chat server, join room of username
@socketio.on('join', namespace='/chat')
def join(data):
	user = data['user']
	session['user'] = user
	join_room(user)
	try:
		users.index(user)
	except ValueError:
		users.append(user)
	emit('userJoined', {'users': sorted(users)}, broadcast=True)

#open chat window
@socketio.on('chat', namespace='/chat')
def chat(data):
	emit('openChat', {'with': data['with']})

#send message
@socketio.on('newMessage', namespace='/chat')
def newMessage(data):
	emit('incomingMessage', {'message': data['message']}, room=data['room'])


if __name__ == "__main__":
	socketio.run(app)