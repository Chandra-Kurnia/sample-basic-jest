const sum = (a, b) => {
    return a + b;
}

const subtraction = (a, b) => {
    return a - b;
}

const multiplication = (a, b) => {
    return a * b;
}

const distribution = (a, b) => {
    return a / b;
}

const arrLength = (a) => {
    return a.length;
}

const checkString = (a) => {
    if(typeof(a) === 'string'){
        return true;
    }else{
        return false;
    }
}

const checkNumber = (a) => {
    if(typeof(a) === 'number'){
        return true;
    }else{
        return false;
    }
}

const checkOddNumber = (a) => {
    if(a % 2 === 0){
        return false;
    }else{
        return true;
    }
}

const checkEvenNumber = (a) => {
    if(a % 2 === 0){
        return true;
    }else{
        return false;
    }
}

const checkPalindrome = (string) => {
    const stringReserve = string.split("").reverse().join("")
    if(stringReserve === string){
        return true
    }else{
        return false
    }
}

module.exports = {
    sum,
    subtraction,
    multiplication,
    distribution,
    arrLength,
    checkString,
    checkNumber,
    checkOddNumber,
    checkEvenNumber,
    checkPalindrome
};