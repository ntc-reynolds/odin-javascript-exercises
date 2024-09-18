const sumAll = function(numberOne, numberTwo) {
    if(Number.isInteger(numberOne) && Number.isInteger(numberTwo)){
        if(numberOne<0||numberTwo<0){
            return 'ERROR';
        }
        else{
            let min = 0;
            let max = 0;
            if(numberOne<=numberTwo){
                min = Number.parseInt(numberOne);
                max = Number.parseInt(numberTwo);
                
            }else{
                min = Number.parseInt(numberTwo);
                max = Number.parseInt(numberOne);
            }
            let sum = 0;
            for (let i = min; i < max + 1;i++){
                sum+=i;
            }
            return sum;
        }
    }
    else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
