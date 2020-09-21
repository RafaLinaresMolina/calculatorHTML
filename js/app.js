const auxResElement = document.getElementById("auxResult");
const newResultElement = document.getElementById("finalResult");
const operator = document.getElementById("operator");

newResultElement.innerHTML = "";
auxResElement.innerHTML = "";
operator.innerHTML = "";
let isANewCalc = false;

const validOperations = ["+", "-", "*", "/"];

const pushedButton = (value) => {
  if (validOperations.includes(value)) {
    if(value === "-" && newResultElement.innerHTML === ""){
      addNumber(value);
    } else {
      makeOperation();
      operator.innerHTML = value;
      if (auxResElement.innerHTML.length !== 0) {
        makeOperation();
      } else {
        auxResElement.innerHTML = newResultElement.innerHTML;
        newResultElement.innerHTML = "";
      }
    }
    
  } else {
    addNumber(value);
  }
};

const clearScreen = () => {
  newResultElement.innerHTML = "";
  auxResElement.innerHTML = "";
  operator.innerHTML = "";
};

const addNumber = (number) => {
  if (newResultElement.innerHTML.length < 11) {
    if (newResultElement.innerHTML.length === 0) {
      newResultElement.innerHTML = number;
    } else {
      if (isANewCalc) {
        isANewCalc = false;
        newResultElement.innerHTML = "";
        newResultElement.innerHTML += number;
      } else {
        newResultElement.innerHTML += number;
      }
    }
  }
};

const isAuxEmpty = () => {
  return auxResElement.innerHTML.length === 0;
};

const isNumberEmpty = () => {
  return newResultElement.innerHTML.length === 0;
};

const makeSum = () => {
  if (isAuxEmpty()) {
    auxResElement.innerHTML = newResultElement.innerHTML;
    newResultElement.innerHTML = "";
  } else if (!isNumberEmpty()) {
    let result = parseFloat(auxResElement.innerHTML) +
    parseFloat(newResultElement.innerHTML);
    if(result.toString().length > 11){
      auxResElement.innerHTML = "-E: to long-";
      newResultElement.innerHTML = "";
    } else {
      auxResElement.innerHTML = result;
      newResultElement.innerHTML = "";
    }    
  }
};

const makeRes = () => {
  if (isAuxEmpty()) {
    auxResElement.innerHTML = newResultElement.innerHTML;
    newResultElement.innerHTML = "";
  } else if (!isNumberEmpty()) {
    let result = parseFloat(auxResElement.innerHTML) -
    parseFloat(newResultElement.innerHTML);
    if(result.toString().length > 11){
      auxResElement.innerHTML = "-E: to long-";
      newResultElement.innerHTML = "";
    } else {
      auxResElement.innerHTML = result;
      newResultElement.innerHTML = "";
    }    
  }
};

const makeMul = () => {
  if (isAuxEmpty()) {
    auxResElement.innerHTML = newResultElement.innerHTML;
    newResultElement.innerHTML = "";
  } else if (!isNumberEmpty()) {
    let result = parseFloat(auxResElement.innerHTML) *
    parseFloat(newResultElement.innerHTML);
    if(result.toString().length > 11){
      auxResElement.innerHTML = "-E: to long-";
      newResultElement.innerHTML = "";
    } else {
      auxResElement.innerHTML = result;
      newResultElement.innerHTML = "";
    }    
  }
};
const makeDiv = () => {
  if (isAuxEmpty()) {
    auxResElement.innerHTML = newResultElement.innerHTML;
    newResultElement.innerHTML = "";
  } else if (!isNumberEmpty()) {
    let result = parseFloat(auxResElement.innerHTML) /
    parseFloat(newResultElement.innerHTML);
    if(result.toString().length > 11){
      auxResElement.innerHTML = "-E: to long-";
      newResultElement.innerHTML = "";
    } else {
      auxResElement.innerHTML = result;
      newResultElement.innerHTML = "";
    }    
  }
};

const obtainResult = () => {
  if (!isAuxEmpty() && !isNumberEmpty()) {
    makeOperation();
    newResultElement.innerHTML = auxResElement.innerHTML;
    auxResElement.innerHTML = "";
    operator.innerHTML = "";
    isANewCalc = true;
  }
};

const makeOperation = () => {
  switch (operator.innerHTML) {
    case "+":
      makeSum();
      break;
    case "-":
      makeRes();
      break;
    case "*":
      makeMul();
      break;
    case "/":
      makeDiv();
      break;
    case "c":
      newResultElement.innerHTML = "";
      auxResElement.innerHTML = "";
      break;
  }
};
