const reverseString = function(givenString) {
    let outputString = '';
    for (let i = givenString.length ; i>0;i--){
        outputString+=givenString[i-1];
    }

    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
