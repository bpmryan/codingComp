function fibs(input) {
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
  console.log(fibArray);
}
fibs(8);
