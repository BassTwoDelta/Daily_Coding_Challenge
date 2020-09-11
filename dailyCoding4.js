// This problem was asked by Stripe.

// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
// You can modify the input array in-place.
// First find if it contains 1, then 2, then 3, ad nauseum. Stop when it does not contain that integer.
// Sort the array first, so as to not iterate through it each search. 
// if arr[i] < 0 continue
//if arr[i] + 1 == arr[i+1] || arr[i] == arr[i+1] contiunue... else return arr[i]+1


function MissingInt(arr){
    let sArr = arr.sort();
    let prev = 0
    for(let i=0; i<sArr.length; i++){
        if(sArr[i]<=0){
            continue
        }
        if (sArr[i]==prev||sArr[i]==prev+1){
            prev = sArr[i]
            continue
        }
        else{
            return prev+1
        }
    }
    return prev+1
}

console.log(MissingInt([1,2,0]))