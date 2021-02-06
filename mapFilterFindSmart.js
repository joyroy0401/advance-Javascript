const numbers = [3, 4, 5, 8, 9];
// const output = [];


// for(let i = 0; i< numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);


// }

// For Smart way------------------------------------------

// const result = numbers.map(function(element, index, array){
//     console.log(element, index, array);

// })
// console.log(result);



// const result = numbers.map(function(element){
//     return element * element;

// })
// console.log(result);

const bigger = numbers.filter(x => x < 5);
console.log(bigger)
