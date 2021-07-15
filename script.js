console.log(z);
// let x = 4;
var z = 5;
let x = 1;
const y = 2;
var z = () => {

};

console.log(x);
console.log(y);
console.log(z);
var c = 33;
if(true) {
    let d = 10;
    {
        const b = 20;
        {
            var c = 30;
            {
                function abc() {
                    x = 22;
                    console.log('Hello1 X ', x);
                    function aaa() {
                        console.log('Hello D ', d);
                    }
                    aaa();
                }
            }
        }
    }
}

abc();
console.log(x);
console.log(c);
// var k = 60;
// function abc() {
//     let j = 40;
//     var k = 50;
//     console.log(j);
//     console.log(k);
// }
// abc();
// console.log(j);
// console.log(k);