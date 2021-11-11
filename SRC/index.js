const HOST = 'localhost';
const PORT = 3000
const http = require('http');
const fs = require('fs');
const {app} = require('./app.js')
const {config} = require('dotenv')
const server = http.createServer(app);
const {initDBPool} = require('./database/database.js')
config();
initDBPool();


app.listen(HOST,PORT,()=> console.log('server running on port',PORT))