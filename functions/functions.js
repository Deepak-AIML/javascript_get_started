// function to find the maximum of three numbers
function maxOfTwo(x, y) {
    if (x >= y) {
        return x;
    }
    else {
        return y;
    }
}

function maxOfThree(x, y, z) {
    return maxOfTwo(x, maxOfTwo(y, z));
}

console.log(maxOfThree(1, 2, 9));


// function to sum all the numbers in a list
let num_list = [8, 2, 3, 0, 7];

function sum_array(input_array) {
    let sum = 0;
    for (i=0; i<input_array.length; i++) {
        sum += input_array[i];
    }
    return sum;
}

console.log(sum_array(num_list));


