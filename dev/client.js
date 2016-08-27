var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
	render: function(){
		return (
			<div>
			Hello World! 123
			</div>
		)
	}
});
ReactDOM.render(
	<HelloWorld />,
	document.getElementById('content')
);
//
// ReactDOM.render(
// 	<h1>Hello, world! fndjkafnvjka</h1>,
// 	document.getElementById('content')
// );