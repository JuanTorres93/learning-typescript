// DOC: Variable type annotations
const apples: number = 5;
const speed: string = 'fast';
const hasName: boolean = true;

const nothingMuch: null = null;
const nothing: undefined = undefined;

// built in objects
const now: Date = new Date();

// Array
// DOC: Array type annotations
const colors: string[] = ['red', 'green', 'blue'];
const myNumbers: number[] = [1, 2, 3];
const truths: boolean[] = [true, false, true];

// Classes
// DOC: Class type annotations
class Car {}

const car: Car = new Car();

// Object literal
// DOC: Object literal type annotations
const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// DOC: Function type annotations
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// DOC: Inference vs annotation
// We'll rely on inference as much as possible
// We'll use type annotations mainly:

// 1) When we declare a variable on one line, then initialize it on another.

// 2) When a function returns the 'any' type and we need to clarify the value.
const json = '{ "x": 10, "y": 20 }';
// any type
const coordinates = JSON.parse(json);
const typedCoordinates: { x: number; y: number } = JSON.parse(json);

// DOC IMPORTANT: Try to avoid variables with the "any" type at all costs

// 3) When we want a variable to have a type that can't be inferred.
// In the example it cannot be inferred because we initialize it with a boolean value and then assign it a number. The example is a bad code practice but it illustrates the point.

let numbers = [-10, -1, 12];
// DOC: Multiple types
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
