//Square and sum the array elements using the arrow function and then find the average of the array
let arr = [1,2,3,4];
let ans = (sum,arr) => {
    for(let i=0;i<arr.length;i++){
        sum += arr[i]*arr[i]
    }
    return sum;
};

console.log(ans(0,arr));


// Create a new array using the map function whose each element is equal to the original element plus 5.
let newarr = arr.map((el) => el+5);
console.log(newarr);

/*Write a function called doubleAndReturnArgs which accepts an array and a
 variable number of arguments. The function should return a new array with the original
 array values and all of the additional arguments doubled*/

 let doubleAndReturnArgs  = (arr, ...args) => [
    ...arr,
    ...args.map((v)=>v*2),
 ]

 console.log(doubleAndReturnArgs([1,2,3,4],4,4));

//merge two objects
let mergeobj = (obj1,obj2) => ({...obj1,...obj2});
console.log(mergeobj({k:1 , l:2},{m:3 , n:4}));