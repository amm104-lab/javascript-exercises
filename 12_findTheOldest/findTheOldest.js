const current =  (new Date()).getFullYear();

const findTheOldest = function(people) {

    /*people.sort((first, second) => (first.people.yearOfDeath - first.people.yearOfBirth)> (second.people.yearOfDeath - second.people.yearOfBirth) ? 1:-1);
   
    return people[0];*/

    //let s = people.sort((a,b) => a.yearOfBirth - a.yearOfDeath > b.yearOfBirth - b.yearOfDeath ? 1:-1);

    let s = people.sort((a,b) => a.yearOfBirth - (a.yearOfDeath === undefined ? current:a.yearOfDeath) > b.yearOfBirth - (b.yearOfDeath === undefined ? current:b.yearOfDeath) ? 1:-1);


    return s[0]


};

// Do not edit below this line
module.exports = findTheOldest;
