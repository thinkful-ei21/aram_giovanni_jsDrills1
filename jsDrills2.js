function jediName(firstName, lastName) {
    return (lastName.slice(0, 3)) + (firstName.slice(0, 2));
}

//console.log(jediName("Test", "Dummy"));

function beyond(num){
    if(Number.isFinite(num)){console.log('And beyond')}
    else if(num > 0){console.log('To infinity')}
    else if(num < 0){console.log('To negative infinity')}
    else if(num === 0){console.log('Staying home')}

}