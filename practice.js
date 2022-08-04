                              //  ----------------
                              // Practice Task 01 
                              // -----------------
// Write a function called foo() which prints “foo” and a function called bar() which prints 
// “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call 
// the foo() to see the output.

  //  ----------------
  //       Answer 
  // -----------------

  function foo(){
    console.log("foo");
    bar();
 }
 
 function bar(){
    console.log("bar");
 }
 
 foo();
 
 
                               //  ----------------
                               // Practice Task 02 
                               // -----------------
 // Write a function called make_avg() which will take an three integers and return the 
 // average of those values.
 
                               //  ----------------
                               //       Answer 
                               // -----------------
 
 let sum, avg;
 function make_avg(num1, num2, num3){
    sum = num1 + num2 + num3;
    avg = sum / 3;
    avg = avg.toFixed(2);
    return avg;
 }
 let getResult = make_avg(5, 9, 3);
 console.log(getResult);
 
                               //  ----------------
                               // Practice Task 03 
                               // -----------------
 // Write a function called make_avg() which will take an array of integers and 
 // the size of that array and return the average of those values.
                               
 
                               //  ----------------
                               //       Answer 
                               // -----------------
 
 let arr = [5, 2, 9, 7, 1, 8];
 let arrLength, avg;
 let sum = 0;
 function make_avg(arr){
    arrLength = arr.length;
    for(i = 0; i < arr.length; i++){
       sum+= arr[i];
    }
       avg = sum / arrLength;
       avg = avg.toFixed(1);
       let result = [arrLength, avg];
       return result;
 }
 let getResult = make_avg(arr);
 console.log(getResult);
 
                               //  ----------------
                               // Practice Task 04 
                               // -----------------
 // Write a function called odd_even() which takes an integer value and tells whether this 
 // value is even or odd. You need to do it in 4 ways: 
 //                *** Has return + Has parameter
 //                *** No return + Has parameter
                               //  ----------------
                               //       Answer 
                               // -----------------
                            
 let result;
 function odd_even(number){
    if (number % 2 === 0){
       result = number + ':' + " " + "Is an Even Number";
    } else {
       result = number + ':' + " " + "Is an Odd Number";
    }
    return result;
 }
 
 let getResult = odd_even(7);
 console.log(getResult);
 
                               //  ----------------
                               // Practice Task 05 
                               // -----------------
 // You are in a hurry to go to your school on time. But when you are crossing the road, the 
 // traffic signal is red coloured. In this situation, if you try to cross the road, you may be in 
 // danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
 // coloured traffic signal, you should cross the road. So write a JS code, where there is a 
 // variable called signal. Its value can be green, yellow or red & we will get different activities as 
 // output depending on the variable. So, hurry up.
                                            
                               //  ----------------
                               //       Answer 
                               // -----------------
 
 let signal = 'Green';
 switch (signal) {
    case 'Red':
       console.log("You may be in danger");
       break;
    case 'Yellow':
       console.log("you should stop");
       break;
    case 'Green':
       console.log("you should cross the road");
       break;  
    default:
       console.log("Understand Before you do anything");
 }