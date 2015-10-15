# Chat-Anyone
Python-Flask/BackboneJS/React/SocketIO Chat Server

## Synopsis

This is a chat service without a server-side database. The data is stored in the client's browser's localStorage and served via Backbone. Python, Flask, and Flask-SocketIO were used on the server side mostly for the socketing. React was used for the entire view component. SocketIO allowed front-end, back-end, and peer communication.

## Issues

1. If forked and hosting, please use your ip address and port 8080. For some reason, localhost is not serving my css.
2. On refresh - socket connects before the previous one disconnects. Persistence can be shown if you leave a page and return after 5 seconds.
3. Responsive design is a bit off. Need to adjust media sizes.

##Future Implementations

0.5. Deploy to Heroku.
1. Allow for name change. Right now you can do so by going into your localStorage.
2. Notifications on user going offline in the middle of a chat.
3. Delete chat history.
4. Change the select option for connect to a slack-like scrollable div.
5. Fix the responsiveness of the chat windows.
6. Draggable chat windows.
7. Create chatrooms.
8. Reject incoming messages.

## License

The MIT License (MIT)

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

