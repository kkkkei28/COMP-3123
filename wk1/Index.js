 //Exercise 1
 function capitalizeFirstLetter(str){

    return str 
        .split(' ') //Split the string into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))  //Capitalize first letter of each word
        .join(' '); //Join the words back into a string 

}

const sentence = "the quick brown fox";
console.log(capitalizeFirstLetter(sentence)); //Output: The Quick Brown Fox


//Exercise 2

function maxOfThree(a,b,c){
    return Math.max(a,b,c);
}

console.log(maxOfThree(1,0,1)); //Output: 1
console.log(maxOfThree(0,10,-20));  //Output: 0
console.log(maxOfThree(1000, 510, 440));    //Output: 1000

//Exercise 3

function right(str){
    if(str.length >= 3){
        let lastThree = str.slice(-3); //Get the last three characters
        let restOfString = str.slice(0, -3); //Get the rest of the string
        return lastThree + restOfString; //Concatenate last three characters at the start
    }
    return str; //Return the original string if its length is less than 3
}
console.log(right("Python"));   //Output: "honPyt"
console.log(right("JavaScript")); //Output: "iptJavaScr"
console.log(right("Hi"));   //Output: "Hi"



//Exercise 4
function angle_Type(angle){
    if(angle > 0 && angle < 90){
        return "Acute angle"
    }else if(angle == 90){
        return "Right angle";
    }else if(angle > 90 && angle < 180){
        return "Obtuse angle";
    }else if(angle == 180){
        return "Straight angle";
    }else{
        return "Invalid angle"
    }
}

console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));



//Exercise5
function array_max_sum(arr, k){
    if(arr.length < k){
        return null; //Edge case: if the array has fewer elements than k
    }


    //Find the initial sum of the first k elements
    let maxSum = 0;
    for(let i =0; i < k; i++){
        maxSum += arr[i];
    }

    let currentSum = maxSum;

    //Now slide the window over the rest of the array
    for(let i = k; i < arr.length; i++){
        currentSum += arr[i] - arr[i - k];  //Add next elements, substract the first element of the previous window
        maxSum = Math.max(maxSum, currentSum);  //Update the max sum if the current sym is greater
    }

    return maxSum;
}

console.log(array_max_sum([1,2,3,14,5], 2)); //Output: 19
console.log(array_max_sum([2,3,5,1,6], 3)); //Output: 12
console.log(array_max_sum([9,3,5,1,7], 2)); //Output: 12




