// Throw, and try.....Catch...Finally

// JavaScript try and catch
// The try statement allows you to define a block of code to be tested for errors while it is being executed.

// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

try {
    let a = 10;
    let b = a.toUpperCase();
}catch{
    console.log("Error occured :" , error.message);
}finally{
    console.log("Execution Completed");
}

// Summary :
// try : runs the risky code.
// Catch : Executed if an error occurs.
// Finally : Runs always, whether an error occurred or not.