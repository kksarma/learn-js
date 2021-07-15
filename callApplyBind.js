// call, apply and bind

// Working example without call, apply and bind because displayDeetails is a normal function
let car = {
    registrationNumber: 'GA27AK3',
    brand: 'Toyota',
    displayDetails: function() {
        console.log(this.registrationNumber + ' ' + this.brand);
    }
}

// Works
car.displayDetails();

//wont work
const myCarDetails =  car.displayDetails;
myCarDetails();

// This will not work with arrow funnction
let car2 = {
    registrationNumber: 'GA27AK3',
    brand: 'Toyota',
    displayDetails: () => {
        console.log(this.registrationNumber + ' ' + this.brand);
    }
}

//wont work
car2.displayDetails();

//wont work
const myCarDetails2 =  car2.displayDetails;
myCarDetails2();

// For solving this issue we will use call, apply or bind
car.displayDetails.call(car); // Using call method
car.displayDetails.apply(car); // Using apply method
const myCarDetails3 = car.displayDetails.bind(car); // using bind method
myCarDetails3();


/**
 * Another example
 */

const cvvCard = {
    firstName: 'Krishan',
    pincode: 124560,
    getFullname: function(lastname) {
        console.log('Fullname is: ', this.firstName + ' ' + lastname);
    },
    getAddress: function(city, country) {    
        console.log('Address is: ' + city + ', ' + country + ', ' + this.pincode);
    }
}

//using call method
cvvCard.getFullname.call(cvvCard, 'Sharma');
cvvCard.getAddress.call(cvvCard, 'Agra', 'India');

//using apply method
cvvCard.getFullname.apply(cvvCard, ['Sharma']);
cvvCard.getAddress.apply(cvvCard, ['Agra', 'India']);

//using bind method
const fullname = cvvCard.getFullname.bind(cvvCard, 'Sharma');
fullname();
const address = cvvCard.getAddress.bind(cvvCard, 'Agra', 'India');
address();


/**
 * Another example 
 * Not related to above topic
 */

function sumOfNumbers() {
    console.log('arguments ', arguments);
    console.log('arguments constructor ', arguments.constructor);
    console.log('typeof arguments ', typeof arguments);
    console.log('is array ', typeof arguments === 'object' && arguments.constructor === Array);
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
var sum = sumOfNumbers(1,2,3);
console.log(sum);