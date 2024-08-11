const reverseString = function(string) {
    let input = string;
    let ans = '';
    for (let index = input.length-1; index >= 0; index--) {
         ans += input.charAt(index);
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
