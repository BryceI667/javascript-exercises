const sumAll = function(start, end) {
    if ((!(Number.isInteger(start)) || !(Number.isInteger(end))) || (start < 0 || end < 0)) {
        return 'ERROR';
    }
    return Math.floor((Math.abs(start - end) + 1) * (start + end)/2);
};

// Do not edit below this line
module.exports = sumAll;