const arr = [-6, -2, 0,  2,  3,  4, 6,  7, 8, 13, 17, 20, 22, 97];

function searching(array, from, to, element){
//array it's the ordened array where the search will be executed, from and to are the inital e final elements where the search will be done, element it's the element searched 
    const middle = Math.floor((from + to) / 2);
    const actual = array[middle];
    if (from > to){
//to prevent erros, the first element must be minor then the last element where the search will be done
        return -1
    }
    else if (element == actual){
        return middle;
    }
    else if (element < actual){
        return searching(array, from, middle - 1, element);
    }
    else if (element > actual){
        return searching(array, middle + 1, to, element);
    };

};

console.log(searching(arr, 0, arr.length - 1, 5));