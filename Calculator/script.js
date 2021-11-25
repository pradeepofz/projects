// const para = document.querySelector('.para');
// para.innerHTML='hey'

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }

    delete() {

    }

<<<<<<< HEAD
    appendNumber(number) {
=======
    appendNumber(number){
>>>>>>> fb736c15867763fbf296e30253948b0f475cf03d
        // this.currentOperand = number;
        // if (number === '.' && this.currentOperand.includes('.')) 
        // return this.currentOperand = this.currentOperand.toString() + number.toString()
        if( number === '.'  && this.currentOperand.includes('.')) return
         this.currentOperand = this.currentOperand.toString() + number.toString();
<<<<<<< HEAD
    }

    chooseOperation(operation) {
=======
>>>>>>> fb736c15867763fbf296e30253948b0f475cf03d

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;

    }
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)  //number
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
<<<<<<< HEAD
        calculator.chooseOperation(button.innerText)  
=======
        calculator.chooseOperation(button.innerText)  //number
>>>>>>> fb736c15867763fbf296e30253948b0f475cf03d
        calculator.updateDisplay();
    });
});



