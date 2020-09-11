// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

//step 1:
// If two of any of the numbers in the array add up to the target return true, else return false 
// The inputs is an array of numbers 
// the output should be true if the target number is found, false if not

//step 2: 
//function findTarget([1,2,3], 4) = true 
//function findTarget([1,2,3], 6) = false 
// function findTarget([], 5) = false 

//step3: 
//loop through the array
// create a nested loop that will be the index of the second number we will add to the first number
//if the target number is found, return true 
//else return false 

function findTarget(arr, target){
    for(let i = 0; i < arr.length; i++){
        for(let j=i+1; j < arr.length; j++){
            if(arr[i]+arr[j] == target){
                return true; 
            }
        }
    } return false;
}

console.log(findTarget([10,15,3,7], 17))
