function outerFunction() {
    let outerVariable = 'I am outer';
  
    function innerFunction1() {
      console.log(`JUST - Inner Function 1`);
    }
  
    function innerFunction2() {
      console.log(`KEEP - Inner Function 2`);
    }
  
    function innerFunction3() {
      console.log(`GOING - Inner Function 3`);
    }
  
    return {
      inner1: innerFunction1(),
      inner2: innerFunction2(),
      inner3: innerFunction3()
    };
  }
  
  const closure = outerFunction();
  closure.inner1; // Output: I am outer - Inner Function 1
  closure.inner2; // Output: I am outer - Inner Function 2
  closure.inner3; // Output: I am outer - Inner Function 3
  