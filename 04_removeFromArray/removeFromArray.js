const removeFromArray = function(inputArray, ...removals) {
    let removalsArray = removals;
    let returnArray = [];
    for (let i =0;i<inputArray.length;i++){
        if (removalsArray.indexOf(inputArray[i])==-1){
            returnArray.push(inputArray[i])
        }
        else{
            continue;
        }
    }
    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
