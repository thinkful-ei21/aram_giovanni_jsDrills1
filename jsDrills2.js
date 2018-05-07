function jediName(firstName, lastName) {
    return (lastName.slice(0, 3)) + (firstName.slice(0, 2));
}

//console.log(jediName("Test", "Dummy"));

function beyond(num) {
    if (!Number.isFinite(num)) {
        console.log('And beyond');
    } else if (num > 0) {
        console.log('To infinity');
    } else if (num < 0) {
        console.log('To negative infinity');
    } else if (num === 0) {
        console.log('Staying home');
    }

}

//beyond(1);
let string = 'craft block argon meter bells brown croon droop'
// for loop 
function decode(string) {
    let words = string.split(" ");
    let answer = "";

    for (var i = 0; i < words.length; i++) {
        console.log(words[i]);
        console.log(words[i][0]);
        if (words[i][0] === "a") {
            answer = answer.concat(words[i][1]);
        } else if (words[i][0] === "b") {
            answer = answer.concat(words[i][2]);
        } else if (words[i][0] === "c") {
            answer = answer.concat(words[i][3]);
        } else if (words[i][0] === "d") {
            answer = answer.concat(words[i][4]);
        } else {
            answer = answer.concat(" ");
        }
    }
    console.log(answer);
}

// decode(string);