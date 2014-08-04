#! /usr/bin/env node

var file = require('./package.json');
var pkg = JSON.parse(JSON.stringify(file));
var spawn = require('child_process').spawn
spawn('open', [pkg.trello]);
