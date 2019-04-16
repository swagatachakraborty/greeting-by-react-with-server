const http = require('http');
const app = require('./app.js');
const PORT = process.env.PORT || 3001;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
