function selectionSort(array){
    for (let i = 0; i < array.length - 1; i++){
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++){
            if (array[j] < array[minIndex]){
                minIndex = j; // Update minIndex to the index of the new minimum value
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
}

console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

module.exports = selectionSort;
