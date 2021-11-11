const express = require ('express');
const app = express();
const bodyParser = require('bodyParser');
const {config} = require('dotenv');
const router = express.Router()
config();

module.exports = {app,config};