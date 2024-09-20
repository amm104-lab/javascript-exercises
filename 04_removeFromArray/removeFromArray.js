const removeFromArray = function(array, ...toRemove) {

    const filteredArray = array.filter(num => num && toRemove.includes(num)===false);
    return filteredArray
};

// Do not edit below this line
module.exports = removeFromArray;
