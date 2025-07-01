const removeFromArray = function(array, ...args) {
    const res = [];
    array.forEach(function(item){
        if (!args.includes(item)) {
            res.push(item);
        }
    });
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
