// Methods of the Number in js 

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 1123.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));  //set the value acccording the indian number 

const num = 123.456;
console.log(num.toString()); 
console.log(num.toLocaleString()); 
console.log(num.toExponential()); 
console.log(num.toExponential(2)); 
console.log(num.toFixed(4)); 
console.log(num.toFixed(2)); 
console.log(num.toPrecision()); 
console.log(num.toPrecision(2)); 
console.log(num.valueOf());


// Maths 

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); //Ouput : 4
console.log(Math.round(4.5523)); //Ouput : 5 using for the round off
console.log(Math.ceil(4.2));
console.log(Math.floor(4.5));
console.log(Math.min(4,5,6,78));
console.log(Math.max(56,79,32435,23));
console.log(Math.random());
console.log((Math.random() * 10) + 1);console.log(Math.abs(-4)); //Ouput : 4
console.log(Math.acos(0.5)); //Ouput : 1.0471975511965976
console.log(Math.acosh(2)); //Ouput : 1.3169578969248166
console.log(Math.asin(0.5)); //Ouput : 0.5235987755982988
console.log(Math.asinh(1)); //Ouput : 0.881373587019543
console.log(Math.atan(1)); //Ouput : 0.7853981633974483
console.log(Math.atan2(1, 2)); //Ouput : 0.4636476090008061
console.log(Math.atanh(0.5)); //Ouput : 0.5493061443340549
console.log(Math.cbrt(27)); //Ouput : 3
console.log(Math.ceil(4.2)); //Ouput : 5
console.log(Math.clz32(18)); //Ouput : 29
console.log(Math.cos(0)); //Ouput : 1
console.log(Math.cosh(0)); //Ouput : 1
console.log(Math.exp(1)); //Ouput : 2.718281828459045
console.log(Math.expm1(1)); //Ouput : 1.718281828459045
console.log(Math.floor(4.5)); //Ouput : 4
console.log(Math.fround(1.337)); //Ouput : 1.337
console.log(Math.hypot(3, 4)); //Ouput : 5
console.log(Math.imul(2, 3)); //Ouput : 6
console.log(Math.log(10)); //Ouput : 2.302585092994046
console.log(Math.log1p(1)); //Ouput : 0.6931471805599453
console.log(Math.log10(100)); //Ouput : 2
console.log(Math.log2(8)); //Ouput : 3
console.log(Math.max(1, 2, 3)); //Ouput : 3
console.log(Math.min(1, 2, 3)); //Ouput : 1
console.log(Math.pow(2, 3)); //Ouput : 8
console.log(Math.random()); //Ouput : random number
console.log(Math.round(4.5)); //Ouput : 5
console.log(Math.sign(-1)); //Ouput : -1
console.log(Math.sin(0)); //Ouput : 0
console.log(Math.sinh(0)); //Ouput : 0
console.log(Math.sqrt(16)); //Ouput : 4
console.log(Math.tan(0)); //Ouput : 0
console.log(Math.tanh(0)); //Ouput : 0
console.log(Math.trunc(4.5)); //Ouput : 4
console.log((Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.random() * (max - min +1 ));
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


