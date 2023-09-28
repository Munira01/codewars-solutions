//7kyu codewars problems

//Problem 1 - Elevator Distance
// https://www.codewars.com/kata/59f061773e532d0c87000d16/javascript

// function elevatorDistance(array) {
//     let distance = 0;
//     for (let i = 0; i < array.length - 1; i++){
//       distance += Math.abs(array[i] - array[i + 1])
//     }
//     return distance;
// }


//Problem 2 - Product Array (Array Series #5)
// https://www.codewars.com/kata/5a905c2157c562994900009d/javascript

// function productArray(numbers){
//     let prod = 1;
//     for (let i = 0; i < numbers.length; i++){
//         prod *= numbers[i]
//     }
      
//     return numbers.map((x) => prod / x)
// }


//Problem 3 - Find factors of a number
// https://www.codewars.com/kata/564fa92d1639fbefae00009d/javascript

// function factors(x){
//     if (x <= 0 || typeof x !== 'number' || x % 1 !== 0) return -1
//     let newArray = []
//     for (let i = x; i > 0; i--){
//         if (x % i === 0){
//             newArray.push(i)
//         }
//     }
      
//     return newArray
// }

//Problem 4 - Reducing Problems - Bug Fixing #8
// https://www.codewars.com/kata/55d2603d506a40e162000056/javascript

// function calculateTotal(team1, team2) {
//     var t1s = team1.reduce((t, c) => t + c, 0);
//     var t2s = team2.reduce((t, c) => t + c, 0);
//     if (t1s > t2s){
//         return true
//     }else{
//         return false
//     }
// }


//Problem 5 - Find an employees role in the company
// https://www.codewars.com/kata/55c9fb1b407024afe6000055/javascript

// function findEmployeesRole(name) {
//     for (let i = 0; i < employees.length; i++){
//         if ( (employees[i].firstName + " " + employees[i].lastName) === name){
//             return employees[i].role
//         }
//     }
//     return "Does not work here!";// Passed employees role
// }


//Problem 6 - Tidy Number (Special Numbers Series #9)
// https://www.codewars.com/kata/5a87449ab1710171300000fd/javascript

// function tidyNumber(n){
//     let arr = n.toString().split("")
//     let result = true;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > arr[i + 1]){
//             result = false
//         }
//     }
    
//     return result
// }


//Problem 7 - Find the capitals
// https://www.codewars.com/kata/539ee3b6757843632d00026b/javascript

// var capitals = function (word) {
//    let newArr = []
// 	for (let i = 0; i < word.length; i++){
//        if (word[i] == word[i].toUpperCase()){
//            newArr.push(i)
//        }
//    }
  
//    return newArr
// };


//Problem 8 - Odd or Even?
// https://www.codewars.com/kata/5949481f86420f59480000e7/javascript

// function oddOrEven(array) {
//     let red = array.reduce((a, b) => {
//         return a + b
//     }, 0)
    
//     if (red % 2 === 0){
//         return "even"
//     }else{
//         return "odd"
//     }
// }


//Problem 9 - Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/javascript

// var number=function(array){
//     let newArr = []
//     for (let i = 0; i < array.length; i++){
//         newArr.push((i+1) + ": " + array[i])
//     }
//     return newArr
// }


//Problem 10 - Length and two values.
// https://www.codewars.com/kata/62a611067274990047f431a8/javascript

// function alternate(n, firstValue, secondValue){
//     let newArr = []
//     for (let i = 0; i < n; i++){
//         if (i % 2 == 0){
//             newArr.push(firstValue)
//         }else{
//             newArr.push(secondValue)
//         }
//     }
//     return newArr
// }


//Problem 11 - How many are smaller than me?
// https://www.codewars.com/kata/56a1c074f87bc2201200002e/javascript

// function smaller(nums) {
//     let count = Array(nums.length).fill(0)
//     for (let i = 0; i < nums.length - 1; i++){
//         for (let j = i + 1; j < nums.length; j++){
//             if ( nums[j] < nums[i]){
//                     count[i]++
//                 }
//             }
//         }
      
//     return count;
// }


//Problem 12 - Ones and Zeros
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/javascript

// const binaryArrayToNumber = arr => {
//     let joined = arr.join("");
//     return parseInt(joined, 2)
// };
