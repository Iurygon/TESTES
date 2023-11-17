function changeElements(array, index){

    let actualElement = array[index];
    let previousElement = array[index - 1];

    array[index] = previousElement;
    array[index - 1] = actualElement;

};

module.exports = changeElements;