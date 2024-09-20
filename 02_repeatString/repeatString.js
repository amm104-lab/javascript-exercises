

const repeatString = function(string, num) {

    greeting = "";

    if(num >= 0){

    for (let i = 1; i <= num; i++){
        greeting  =  greeting + string;               
    };
    return greeting
    }
    else{
        return "ERROR"
    }

};

// Do not edit below this line
module.exports = repeatString;
