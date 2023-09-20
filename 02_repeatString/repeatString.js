function repeatString(string, repeatNumber)
{
    let repeatString = "";

    if (repeatNumber < 0) 
    {
        return "ERROR";
    }

    for (i = 0; i < repeatNumber; i++)
    {
        repeatString = repeatString + string;
    }
    return repeatString;
}

// Do not edit below this line
module.exports = repeatString;
