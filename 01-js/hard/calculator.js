/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) {
      const e = new Error("Division by 0");
      throw e;
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  parseCalc(numArr, operator) {
    let found = true;
    while (found == true) {
      let opIndex = numArr.indexOf(operator);

      if (opIndex != -1) {

        let numResult = 0;
        if (operator === "/") {
          if (parseFloat(numArr[opIndex+1]) == 0) {
            throw new Error("Division by 0");
          }
          numResult = parseFloat(numArr[opIndex-1]) / parseFloat(numArr[opIndex+1]);
        } 
        else if (operator === "*")
        {
          numResult = parseFloat(numArr[opIndex-1]) * parseFloat(numArr[opIndex+1]);
        }
        else if (operator === "+") 
        {
          numResult = parseFloat(numArr[opIndex-1]) + parseFloat(numArr[opIndex+1]);
        }
        else if (operator === "-") 
        {
          numResult = parseFloat(numArr[opIndex-1]) - parseFloat(numArr[opIndex+1]);
        } 

        numArr.splice(opIndex-1, 3, numResult);
      } else
      {
        found = false;
      }
      
    }
    return numArr;
  } 

  
  dmasCalculate(numArr) {
    //let tmp = '10 +  2 *    (   6 - ( 4 + 1 ) / 2 ) + 7';

    //Remove spaces and then check for other characters which are not letters and operators
    // Also check if we have strings like 1++2 or 1-/2 etc., (an operator should always be preceded and followed by numbers)

    //let tmp = '10+2-3+56/2*3'

    //let numsymbolRegex = /[0-9]+|[-+*/()]/g;

    //let numArr = str.match(numsymbolRegex);

    //console.log("Before division");
    //console.log(numArr);

    if (numArr.length == 1) {
      return numArr[0];
    }

    try {
      this.parseCalc(numArr, "/");
    } catch (err) {
      throw err;
    }

    //console.log("After division");
    //console.log(numArr);

    //console.log("Before Multiplication");
    this.parseCalc(numArr, "*");

    //console.log("After Multiplication");
    //console.log(numArr);

    //console.log("Before Addition");
    this.parseCalc(numArr, "+");

    //console.log("After Addition");
    //console.log(numArr);

    //console.log("Before Subtraction");
    this.parseCalc(numArr, "-");

    //console.log("After Subtraction");

    //console.log(numArr);
    return numArr[0];
  }

  calculate(str) {

    // need to make various checks

    // check if the input string has invalid characters
    let invalidRegex = /[a-zA-Z]/;

    if (invalidRegex.test(str) == true)
    {
      throw new Error("Invalid Expression");
    }

    let numsymbolRegex = /[0-9]+\.[0-9]+|[0-9]+|[-+*/()]/g;

    

    let numArr = str.match(numsymbolRegex);

   

    numArr.push(')');
    numArr.unshift('(');

    console.log(numArr);

    const itemCounter = (value, index) => {
      return value.filter((x) => x == index).length;
    };

    let countOpenbr = itemCounter(numArr, '(');

    let countClosedbr = itemCounter(numArr, ')');

    if (countClosedbr != countOpenbr) {
      //console.log(countClosedbr);
      //console.log(countOpenbr);
      //throw new Error("Invalid Parantheses");
      //return 0;
    }

    

    //search for negative numbers in brackets and store them properly
  
  
    let negIndices = [];

    for (let i = 0; i < numArr.length; ++i) {
      if (numArr[i] == '(' && numArr[i+1] == '-') {
        let num = numArr[i+2] * (-1);
        numArr.splice(i+1,2,num);
      }
    }

   
    //  Can start the whie loop, do the loop as long as a bracket is found;
    let countIter = 0;

    while (numArr.length > 1) {


      countIter++;

      //Find the inner most bracket, slice the array pass it to dmasCalculate and replace the inner most bracket with the result

      let firstClosedbrIndex = numArr.indexOf(")");

      let tmpArr = numArr.slice(0, firstClosedbrIndex);


      let lastOpenbrIndex = tmpArr.lastIndexOf('(');

      if (firstClosedbrIndex - lastOpenbrIndex <= 1) {
        throw new Error("Invalid Parantheses");
      }
      

      let tmpResult = 0;

      try {
        tmpResult = this.dmasCalculate(tmpArr.slice(lastOpenbrIndex+1));
      } 
      catch (err) {
        throw err;
      }

      let arrlength = tmpArr.slice(lastOpenbrIndex+1).length;


      numArr.splice(lastOpenbrIndex, arrlength+2, tmpResult);

    }
    this.result = numArr[0];
    return numArr[0];
 
    

    
  }
}


//let myCalculator = new Calculator();


//let finalResult = myCalculator.calculate(")10 + 2(");
//console.log("The final result is: " + finalResult);

module.exports = Calculator;
