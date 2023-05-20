/*
 * ASSIGNMENT 1
 * Find GPA and Grade with respect to Marks in any subject
 */


let name = prompt('Name:');
let mark = Number( prompt('Your Mark:'));


console.log('Hi ' + name);
console.log('Your mark is ' + mark);


// If else Condition for result

if(mark<33 && mark>=0){
    console.log('Your Grade is F and GPA is 0.0.');
}

else if(mark<40 && mark>=33){
    console.log('Your Grade is D and GPA is 1.00');
}

else if(mark<50 && mark>=40){
    console.log('Your Grade is C and GPA is 2.00');
}

else if(mark<60 && mark>=50){
    console.log('Your Grade is B and GPA is 3.00');
}

else if(mark<70 && mark>=60){
    console.log('Your Grade is A- and GPA is 3.50');
}

else if(mark<80 && mark>=70){
    console.log('Your Grade is A and GPA is 4.00');
}

else if(mark<=100 && mark>=80){
    console.log('Your Grade is A+ and GPA is 5.00');
}

else{
    console.log('Your mark cannot be less than 0 and more than 100.');
}






/*
 * ASSIGNMENT 2
 * Create a loop that will rotate from 1000 to 300
 */


for( let i = 1000; i>=300; i--){
    console.log(`Loop No ${i}`);
}







/*
 * ASSIGNMENT 3
 * Find the even and odd numbers from 1 and 1000 through for loop
 */


for (let i = 1; i <= 1000; i++) {

  // Even Number
  if (i % 2 === 0) {
    console.log(`This is Even Number ${i}`);
  }

  // Odd Number

    if(i % 2 !==0){
        console.log(`This is Odd Number ${i}`);

    } 

}






/*
 * ASSIGNMENT 4
 * Find the number divisible by 7 between 1 and 1000
 */


for(let i = 1; i <= 1000; i++){

    if(i % 7 == 0){
        console.log(`The number divisible by 7 is ${i}`);
    }

}






/*
 * ASSIGNMENT 5
 * Create a loop using “for” that will increment by 3 per step and break the loop when it finds a number divisible by 11
 */


for(let i = 1; i<=1000; i = i + 3){

    console.log(`The number is ${i}`);

    if(i % 11 == 0){
        break;
    }

}





/*
 * ASSIGNMENT 6
 * Create a loop that rotates 500 times using the for loop where you just pull out the numbers divisible by 3 and 4
 */


for(let i = 1; i <= 500; i++){

    if(i % 3 == 0 && i % 4 == 0){
        console.log(`The number Divisible by 3 and 4 is ${i}`);
    }

    // Or
    // Divisible by 3
    // if(i % 3 == 0){
    //     console.log(`The number Divisible by 3 is ${i}`);
    // }

    // Divisible by 4
    // if(i % 4 == 0){
    //     console.log(`The number Divisible by 4 is ${i}`);
    // }

}





/*
 * ASSIGNMENT 7
 * Create a loop where the initial value is 10,000. You need to rotate the loop 50 times by using the increment and decrement operators twice.
 */

// Rotate the loop 50 times by using the INCREMENT
for(let i = 10000; i < 10050; i++){
    console.log(`The number is ${i}`);
}


// Rotate the loop 50 times by using the DECREMENT
for(let i = 10000; i > 9950; i--){
    console.log(`The number is ${i}`);
}





