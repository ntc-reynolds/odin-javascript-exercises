const repeatString = function(stringToRepeat, numOfRepeats) {
    if (numOfRepeats<0)
    {
        return 'ERROR';
    }
    else
    {
        let repeatedString='';
        for(let i=0; i<numOfRepeats;i++){
            repeatedString+=stringToRepeat;
        }
        return repeatedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
