import { question } from 'readline-sync';

type Operator = '+' | '-' | '*' | '/';

var firstStr = document.getElementsByClassName('numbers');
var secondStr = document.getElementsByClassName('numbers');
var operator = document.getElementsByClassName('operators');

//this function will not do anything
function main(): void {
  const firstStr: string = question('Enter first number:\n');
  const operator: string = question('Enter Operator: \n');
  const secondStr: string = question('Enter second number\n');



  const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr)


  if (validInput) {

    const firstNum: number = parseInt(firstStr);
    const secondNum: number = parseInt(secondStr);
    const result = calculate(firstNum, operator as Operator, secondNum);
    console.log(result);
  }
  else {
    console.log('\nInvalid Input\n');
    main();//re-run this main function untill we get the valid input
  }
}

function isNumber(str: string): boolean {
  const maybeNum = parseInt(str);
  const isNum: boolean = !isNaN(maybeNum);
  return isNum;
}
function isOperator(operator: string): boolean {
  //return operator === '+' || operator=== '-' || operator==='*' ||operator=== '/';
  switch (operator) {
    case '+':
    case '-':
    case '*':
    case '/':
      return true;
    default: return false;
  }
}

function calculate(firstNum: number, operator: Operator, secondNum: number) {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    case '/':
      return firstNum / secondNum;
  }
};
main();
