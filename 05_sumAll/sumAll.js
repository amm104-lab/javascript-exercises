const sumAll = function(firstNum, lastNum) {

    let sum = 0;
if(firstNum<0 || Number.isInteger(firstNum)===false || lastNum<0 || Number.isInteger(lastNum)===false){
    return "ERROR"
}

 else if(lastNum<firstNum){
    for(let i = lastNum; i <= firstNum; i++){
        sum += i
    }
}
else{
    for(let i = firstNum; i <= lastNum; i++){
        sum += i
    }
}

    return sum

};

// Do not edit below this line
module.exports = sumAll;
