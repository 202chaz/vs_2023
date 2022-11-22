const NodeMediaServer = require('node-media-server');
const cors = require('cors');
const io = require('socket.io-client');
const socket = io.connect('http://cms:1337');
const axios = require('axios');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config)

nms.run();

socket.on('connect', () => {
  console.log('Socket connected')
})

socket.on('error', () => {
  console.log('Socket error')
})

socket.on('client-connected', () => {
  console.log('Client connected')
  getStreams()
})

const notitifyCMS = async (data) => {
  await axios.post('http://cms:1337/api/notifications', {
    meta: data
  })
}

const getStreams = async (path) => {
  await axios.get('http://media-server:8000/api/streams')
    .then((res) => notitifyCMS(res.data))
    .catch((err) => console.lor(err))
}

nms.on('postPublish', (id, StreamPath, args) => {
  console.log('[NodeEvent on postPublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
  getStreams();
})

nms.on('donePublish', (id, StreamPath, args) => {
  console.log('[NodeEvent on donePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
  getStreams();
});