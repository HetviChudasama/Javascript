// Arrow function and this keyword

const user = {
    usrename:"hitesh",
    price: 999,

    welcomemessage:function(){
        console.log(`${this.usrename},welcome to website`);
        console.log(this); // output : current context of the object which all is included in the object
        // this keyword is used for the show the current context
    }
}

user.welcomemessage()
user.usrename="sam"
user.welcomemessage()
console.log(this); //empty {}

function chai(){
    let username = "Sonakshi" 
    console.log(this.username); //window object
    // undefined 
}
chai()

// Arrow Function 

// Immedetaily Invoked Function Expression (IIFE)
function chai(){
    console.log(`DB CONNECTED`);
}

console.log(chai())

// Immedetaily Invoked Function Expression (IIFE)
(function() {
    console.log('Immediately Invoked Function Expression (IIFE)');
    let username = "Sonakshi";
    console.log(username);
})();

// output : Immediately Invoked Function Expression (IIFE)

