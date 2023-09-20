function removeFromArray(array, ...args)
{
    const newArray = array;
    console.log(newArray)
    console.log(args)

    for (i in args)
    {
        for (j in newArray)
        {
            if (newArray[j] === args[i])
            {
                newArray.splice(j, 1)
            }
        }
    }
    console.log(newArray)
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
