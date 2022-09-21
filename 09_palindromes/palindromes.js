const palindromes = function (string) {
    const arr = [];
    for (i of string.toLowerCase().split('')) {
	if (/[a-z]/.test(i)) arr.push(i);
    }

    if (arr.join('') === arr.reverse().join('')) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
