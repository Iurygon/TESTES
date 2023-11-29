function merge(array){ //Constinuosly divides the array until there's only one item in it
    if (array.length > 1){
        const middle = Math.floor(array.length / 2);
        const arrPartOne = merge(array.slice(0, middle));
        const arrPartTwo = merge(array.slice(middle, array.length));
        array = sorting(arrPartOne, arrPartTwo);
    };
    return array
};

function sorting(partOne, partTwo){
    let actualIdxOne = 0;
    let actualIdxTwo = 0;
    const finalArray = [];

    while (actualIdxOne < partOne.length && actualIdxTwo < partTwo.length){
        let actualElemOne = partOne[actualIdxOne];
        let actualElemTwo = partTwo[actualIdxTwo];

        if (actualElemOne < actualElemTwo){
            finalArray.push(actualElemOne);
            actualIdxOne++
        }
        else{
            finalArray.push(actualElemTwo);
            actualIdxTwo++
        };
    };
    return finalArray.concat(actualIdxOne < partOne.length
        ? partOne.slice(actualIdxOne)
        : partTwo.slice(actualIdxTwo)
        )
};

const list = [12, 1, 2, 54, 33, 20, 14, 8, 9, 6, 3, 15, 24, 38, 97, 56, 58, 85, 79, 6];

console.log(merge(list));