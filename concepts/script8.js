var myVar = 'foo';
(function() {
	console.log('Original value was: ', + myVar);
	var myVar = 'bar';
	console.log('New value is: ' + myVar);
})();
