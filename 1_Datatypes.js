// Number
let num: number = 10;

// String
let str: string = 'Hello, World!';

// Boolean
let bool: boolean = true;

// Array
let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

// Null and Undefined
let n: null = null;
let u: undefined = undefined;

// Object
let obj: object = { name: 'John', age: 30 };

// Tuple
let tup: [number, string] = [1, 'a'];

// Enum
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

// Any
let any: any = 'Hello';

// Void
function voidFunc(): void {
  console.log('This function returns nothing');
}

// Never
function neverFunc(): never {
  throw new Error('This function never returns');
}

// Symbol
let sym: symbol = Symbol('symbol');