function reverseString(string)
{
    const stringLength = string.length;
    let reversedString = "";
    for (i=0; i<stringLength; i++)
    {
        reversedString += string[stringLength - i - 1]
    }

    return reversedString;
}

// Do not edit below this line
module.exports = reverseString;
