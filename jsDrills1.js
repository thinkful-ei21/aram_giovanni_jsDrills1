'use strict';

function whoAmI(name = 'Chris', age = 29) {
    console.log(`My name is ${name} and I'm ${age} years old`);
    console.log(`I was born in `, yearOfBirth(age));
}

function yearOfBirth(age = 29) {
    return 2018 - age;
}

whoAmI();