'use strict'

const blur = document.getElementById('blur');

// blur.addeventlistener('change', changePic);

// function changePic() {
//     document.documentElement.style.width =  this.value;
// }

function Person(name) {
    this.name = name;
    console.log('this :', this);
}

console.log(Person);
console.log(Person.prototype);
console.log(Person.prototype.constructor);

Person.prototype.constructor = function(id) {
    this.id = id;
    console.log('doesn\'t work');
}

let dasy = new Person('IdOrName?');

console.log(dasy); // Why name not id?
console.log(Person.prototype.constructor); 

