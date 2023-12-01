function quickSort(array){
    if (array.length < 2){
        return array;
    };
    let pivot = array[array.length - 1];
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < array.length - 1; i++){
        if (array[i] <= pivot){
            leftArr.push(array[i]);
        }
        else {
            rightArr.push(array[i]);
        };
    };
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

const array = [8, 20, -2, 4, -6, 17, 22, 13, 97, 2, 0, 6, 3, 7];

console.log(quickSort(array));