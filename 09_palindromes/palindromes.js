const isPunctuation = (char) => /[.,\/#!$%\^&\*;:{}=\-_`~()]/ .test(char);


const palindromes = function (input) {
    const forward = input.toLowerCase().split("").filter(item => item.trim() !== '').filter(item => !isPunctuation(item)).join("");
    const reverse = input.toLowerCase().split("").filter(item => item.trim() !== '').filter(item => !isPunctuation(item)).reverse().join("");
    return  (forward == reverse);
};

// Do not edit below this line
module.exports = palindromes;
