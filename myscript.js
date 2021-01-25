//store information 
class Calculator {
  constructor(display) {
    this.display = display;
    this.clear()
  }

  clear() {
    this.display = ''
  }
  appendNumber(number) {

  }

  chooseOperation(operation) {

  }

  compute() {

  }

  updateDisplay() {
    this.display.innertext = this.currentOperand
  }
}


const numberButtons = document.querySelectorAll('.numbers');
const operationButtons = document.querySelectorAll('.operators');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('#clear');
const display = document.querySelector('#input');



const calculator = new Calculator(display)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})