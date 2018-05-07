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
        //   console.log(words[i]);
        //   console.log(words[i][0]);
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



function daysInMonth(month, leapYear = false){
    const months = {
        january: '',
        febuary: '',
        march: '',
        april: '',
        may: '',
        june: '',
        july: '',
        august: '',
        september: '',
        october: '',
        november: '',
        december: ''
    }
    console.log(month.toLowerCase())

    if (!(month.toLowerCase() in months)) {
        throw ('Must provide a valid month')
    }

    switch (month.toLowerCase()) {
        case 'january':
        case 'march':
        case 'may':
        case 'july':
        case 'august':
        case 'october':
        case 'december':
            return `${month} has 31 days`;
            break;
        case 'april':
        case 'june':
        case 'september':
        case 'november':
            return `${month} has 30 days`;
            break;
        case 'febuary':
            if (leapYear) {
                return `${month} has 29 days`;
            } else {
                return `${month} has 28 days`;
            }
            break;

    }

}

// console.log(daysInMonth('January', false));