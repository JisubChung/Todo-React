/**
 * Created by jisubchung on 8/11/16.
 */


var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var TODO_LIST = path.join(__dirname, 'todos.json');

app.set('port', (process.env.PORT || 8000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));

app.listen(app.get('port'), function() {
	console.log('Server started on http://localhost:' + app.get('port') + '/');
});