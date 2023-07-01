const findMax = (array) => {
    let resultMax = array[0];
    let resultMin = array[0];

    for(let number of array){
        //Max
        if(number > resultMax){
            resultMax = number;
        }
        //Min
        else if(number < resultMin){
            resultMin = number;
        }
    }

    return { resultMax, resultMin };
};

console.log(findMax([1, 2, 3, 4]));

let num = [4, 1, 10, 23, 0, 75, -5];
console.log(findMax(num));