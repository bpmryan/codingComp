const input = 8;
const fibArray = [];
const num1 = 0;
const num2 = 1;

function fibs(input) {
    switch(input) {
        case 1:
            fibArray = [0];
            return console.log(fibArray);
        case 2:
            fibArray = [0, 1];
            return console.log(fibArray);
        default:
            for (let i = 0; i <= input; i++) {
                i = num1 + num2;
                num1 = num2;
                num2 = i;
                fibArray.push(i);
            }
            return console.log(fibArray);
    }
}