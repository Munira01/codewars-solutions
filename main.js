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
