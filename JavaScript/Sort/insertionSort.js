const changeElements = require("./changeElements");

function insertionSort(array){

    for (let i = 0; i < array.length; i++){
        let minIndex = i;
        
        while (minIndex > 0 && array[minIndex] < array[minIndex - 1]){
            changeElements(array, minIndex);
            minIndex--;
        };
    };
    return array
};

console.log(insertionSort([2, 5, 3, 7, 9, 8]));