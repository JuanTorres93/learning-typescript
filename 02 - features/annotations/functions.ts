// DOC: function annotation
// parameters and return type
const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// DOC: void annotation when there is no return value
const logger = (message: string): void => {
  console.log(message);
};

// DOC: never annotation for functions that never return
// The function will never reach its end point only use whe we trully NEVER want to return
const throwError = (message: string): never => {
  throw new Error(message);
};

// DOC: destructuring with annotation
const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
