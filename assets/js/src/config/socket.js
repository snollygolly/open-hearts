import Socket from 'socket.io-client';

const io = Socket('http://localhost:8080');

module.exports = io;