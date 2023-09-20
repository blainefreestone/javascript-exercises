const palindromes = function (string) {
    stringProcessed = string.replace(/[\.,?!]/g, "") // Remove punctuation.
                            .replace(/\s+/g, "")     // Remove white space.
                            .toLowerCase();          // Replace uppercase letters with lowercase.
    
    stringReversed = stringProcessed.split("") // Make string an array of single characters.
                                    .reverse() // Reverse the order of the characters.
                                    .join(""); // Join the reversed array as a new string.
    return stringReversed === stringProcessed;
};

// Do not edit below this line
module.exports = palindromes;
