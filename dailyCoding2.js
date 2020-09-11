// This problem was asked by Uber.
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
// Follow-up: what if you can't use division?

//Step 1:
// find the product of all numbers except the index and push to a new array without using division
// the input is an array 
//the outout should be an array with the product of all the other numbers excpet for the index number 

//Step 2: 
// function productOfOthers([3,2,1]) == [2,3,6] (2 * 1 = 2, 3 * 1 = 3, 2 * 3 = 6)
// function productOfOthers([1,2,3,4,5] == [120,60,40,30,24] - (2*3*4*5 = 120, 1*3*4*5 = 60, 1*2*4*5 = 40, 1*2*3*5 = 30, 1*2*3*4 = 24)
// function productOfOthers([]) == [] or undefined 

//Step3: 
// function productOfOthers(arr){
    //create a new array to be returned
    //create prefix numbers array
    //create suffix numbers array 
    //loop through the array
// }

function productOfOthers(arr){
    let result = []; 
    let prefix = []; 
    let suffix = [];
    for(let i = 0; i < arr.lenght; i++){
        if(prefix[0] != null){
            prefix.push(prefix[i-1] * arr[i])
        }
        else{
            prefix.push(arr[i])
        }
    }console.log(prefix)
}

console.log(productOfOthers([1,2,4]));