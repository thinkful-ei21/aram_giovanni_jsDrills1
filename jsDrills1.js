'use strict';

function whoAmI(name, age) {
    if (typeof name  !== "string" || typeof age !== 'number') {
        console.error("Argument is invalid")
    } else {
        console.log(`My name is ${name} and I'm ${age} years old`);
        let yob;
        try {
            yob = yearOfBirth(age);
            console.log(`I was born in ${yob}`);
        } catch (err) {
            console.log(err)
        }
    }
}

function yearOfBirth(age) {
    if (age < 0) {
        throw (`age can't be less than 0`)
    } else {
        return 2018 - age;
    }
}



whoAmI("Johnny");