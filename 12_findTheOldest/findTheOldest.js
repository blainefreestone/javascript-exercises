const findTheOldest = function(people) {
    oldestPerson = people.sort( (a,b) => {
        
        let currentYear = new Date().getFullYear();

        if (!a.yearOfDeath) {ageA = currentYear - a.yearOfBirth}
        else {ageA = a.yearOfDeath - a.yearOfBirth};
        
        if (!b.yearOfDeath) {ageB = currentYear - b.yearOfBirth}
        else {ageB = b.yearOfDeath - b.yearOfBirth};

        return (ageA < ageB) ? 1 : -1;
    });
    
    return oldestPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;
