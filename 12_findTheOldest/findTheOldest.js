const findTheOldest = function(arr) {
    let maxAge = 0;
    let maxAgeIndex = 0;
    let ageTemp = 0;
    const currentYear = new Date().getFullYear();
    for (const item of arr){
        if(item.yearOfDeath!=null){
            ageTemp = item.yearOfDeath - item.yearOfBirth;
        }else{
            ageTemp = currentYear - item.yearOfBirth;
        }
        if(ageTemp>maxAge){
            maxAge = ageTemp;
            maxAgeIndex = arr.indexOf(item);
        }
    }
    return arr[maxAgeIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
