// non-recursive function
function fib(input) {
  if (input <= 0) return [];
  if (input === 1) return [0];

  let fibArray = [0, 1];
  let num1 = 0;
  let num2 = 1;

  for (let i = 2; i < input; i++) {
    let nextNum = num1 + num2;
    fibArray.push(nextNum);
    num1 = num2;
    num2 = nextNum;
  }
  console.log("Non-recursive fib: " + fibArray);
}
fib(8);

// recursive function
const recfib = (input, fibArray = [0, 1]) => {
  // base case, slice extra indexes
  if (fibArray.length >= input) {
    return fibArray.slice(0, input);
  }
  // calculate next number in fib sequence
  const nextNum = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
  fibArray.push(nextNum);

  return recfib(input, fibArray);
};

console.log("Recursive fib: " + recfib(8));
