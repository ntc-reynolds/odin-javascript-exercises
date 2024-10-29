const fibonacci = function(input) {
    let number = Number(input);
    if (number<0){
        return "OOPS";
    }else{
        const sequence = [0,1];
        while (sequence.length<=number){
            sequence.push(sequence.at(-1)+sequence.at(-2));
        }
        return sequence[number];
    }
};

// Do not edit below this line
module.exports = fibonacci;
