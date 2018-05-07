'use strict';

function whoAmI(name = 'Chris', age = 29) {
    console.log(`My name is ${name} and I'm ${age} years old`);
    let yob;
    try{yob = yearOfBirth(age)}
    catch(err){console.log(err)}
    console.log(`I was born in ${yob}`);
}

function yearOfBirth(age = 29) {
    if(age < 0){throw(`age can't be less than 0`)}
    else{return 2018 - age;}
    }
    


whoAmI('bob', -123);