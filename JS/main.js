import {Calculator} from './Operations.js'

const Calculator1 = new Calculator();

var buttons = document.querySelectorAll('.numberButton')
var zerobutton = document.getElementById('numberButton')
var OperationButtons = document.querySelectorAll('.Org')
let Op_Number = document.getElementById('Op_DNum')
let Result = document.getElementById('end-result')
let EqualButton = document.getElementById('do-operation')
let ClearCalculator = document.getElementById('Clear-all')
var dotbutton = document.getElementById('DotButton');
var deleteButton = document.getElementById('delete')
Op_Number.textContent = 0;



zerobutton.addEventListener("click", () => {
  console.log('hello moghdad')
  
        Calculator1.fillNums(zerobutton.textContent)
        Calculator1.CreateTemOp()
        Op_Number.textContent = Calculator1.resultNum;
});
buttons.forEach(button => {
  button.addEventListener("click", () => {
        Calculator1.fillNums(button.textContent)
        Calculator1.CreateTemOp()
        Op_Number.textContent = Calculator1.resultNum;
  });
});

OperationButtons.forEach(opB => {
  opB.addEventListener("click", () => {
        Calculator1.sitOperationType(opB.textContent)
        Calculator1.CreateTemOp()
        Op_Number.textContent = Calculator1.resultNum;

  });
});

EqualButton.addEventListener("click", () => {
  Result.textContent = Calculator1.GetResult();
});

ClearCalculator.addEventListener("click", () => {
  Calculator1.Clear();
  Op_Number.textContent = "0";
  Result.textContent = Calculator1.GetResult();
  
});

dotbutton.addEventListener("click",() => {
  
  Calculator1.checkAddedDot();
  
  Calculator1.CreateTemOp();
   
  Op_Number.textContent = Calculator1.resultNum;

})

deleteButton.addEventListener("click",() => {
  Calculator1.delete();
  Calculator1.CreateTemOp();
 
  Op_Number.textContent = Calculator1.resultNum;
})