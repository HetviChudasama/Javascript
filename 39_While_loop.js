// The while loop :

// The while loop loops through a bloack of code as long as a specified condition is true.

// syntax

while(condition){
    // code bloack to be executed
}

// Example :

// In the following example , the code in the loop will run , over and over again , as long as variable (i) is less than 10:

while(i < 10){
    text += "The number is "+ 1;
    i++;
}

// The Do while Loop :

// Note : The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.


do{
    // code bloack to be executed
}
while (condition);

// Example :

do{
    text += "the number is " + i;
    i++;
}
while(i < 10);