function sumAll(number1, number2)
{
    if (!(Number.isFinite(number1) && Number.isFinite(number2)))
    {
        return "ERROR";
    }

    if ((number1 < 0)||(number2 < 0))
    {
        return "ERROR";
    }

    let startNumber = number1;
    let endNumber = number2;

    if (number1 > number2)
    {
        startNumber = number2;
        endNumber = number1;
    }
    
    let runningSum = 0;
    for (i = startNumber; i <= endNumber; i++)
    {
        runningSum += i;
    }
    return runningSum;
}

// Do not edit below this line
module.exports = sumAll;
