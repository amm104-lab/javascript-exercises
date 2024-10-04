const getTheTitles = function(array) {

    let s = array.map(array => `${Object.values(array)[0]}`);
    return s;
};

// Do not edit below this line
module.exports = getTheTitles;
