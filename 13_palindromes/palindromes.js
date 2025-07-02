function isAlphaNumeric(char) {
    return /^\w+$/.test(char)
}
const palindromes = function (string) {
    let og_string = string.toLowerCase()
    og_string = og_string.split("").filter(val => isAlphaNumeric(val)).join("")
    reverseString = og_string.split("").filter(val => isAlphaNumeric(val)).reverse().join("")
    console.log("fjiewa")
    console.log(og_string)
    console.log(reverseString)
    return og_string === reverseString
};

// Do not edit below this line
module.exports = palindromes;
