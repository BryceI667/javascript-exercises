const findTheOldest = function(ages) {
    const today = new Date();
    const thisYear = today.getFullYear();
    let oldest = 0
    let oldest_person = 0
    for (let i = 0; i < ages.length; i++) {
        let tmp_age = 0
        if (ages[i].yearOfDeath == null) {
            tmp_age = thisYear - ages[i].yearOfBirth
        } else {
            tmp_age = ages[i].yearOfDeath - ages[i].yearOfBirth
        }
        if (tmp_age > oldest) {
            console.log(`new ${ages[i].name}`)
            oldest_person = i;
            oldest = Math.max(tmp_age, oldest)
        }
    }
    return ages[oldest_person]
};

// Do not edit below this line
module.exports = findTheOldest;
