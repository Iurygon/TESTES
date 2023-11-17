const changeElements = require("./changeElements");

function insertionSort(array){

    for (let i = 0; i < array.length; i++){
        let actualIndex = i;
        
        while (actualIndex > 0 && array[actualIndex] < array[actualIndex - 1]){
            changeElements(array, actualIndex);
            actualIndex--;
        };
    };
    return array
};

console.log(insertionSort([2, 5, 3, 7, 9, 8]));