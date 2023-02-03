class Calculator{
    constructor(previousOperand, currentOperand){
        this.previousOperand = previousOperand
        this.currentOperand = currentOperand
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    del(){

    }

    appendNumber(number){
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.currentOperand.innerText = this.currentOperand
    }
}


const numberButton = document.querySelectorAll('[data-number]');
const operation = document.querySelectorAll('[data-operation]');
const equals = document.querySelector('[data-equals]');
const del = document.querySelector('[data-delete]');
const clear = document.querySelector('[data-all-clear]');
const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');
const percentage = document.querySelector('[data-percentage]');

const calculator = new Calculator(previousOperand, currentOperand);

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
});