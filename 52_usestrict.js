// “use strict”
// The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way.


console.log("some code");
// "use strict below is ignored-- it must be at the top."
"use strict";
// strict mode is not activated.

'use strict';
var x = 5;
var b = 9;
console.log(x + b);
// let b = 5;
console.log(x + b);

// Example :

function Withusestrict(){
    'use strict';
    x = 10; // no error
    console.log(x);

}Withusestrict()