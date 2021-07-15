/** -- Problem -- **/
for(var i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
}
console.log('Hello JavaScript!');

/** -- First solution using let -- **/
for(let i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
}
console.log('Hello JavaScript!');


/** -- Second solution using closure -- **/
for (var i = 0; i <= 5; i++) {
    function close(x) {
        setTimeout(function() {
            console.log(x);
        }, x * 1000);
    }
    close(i);
}
console.log('Hello JavaScript!');

/** -- Second solution using IIFE -- **/
for (var i = 0; i <= 5; i++) {
    (function(x) {
        setTimeout(function() {
            console.log(x);
        }, x * 1000)
    })(i);
}
console.log('Hello JavaScript!');