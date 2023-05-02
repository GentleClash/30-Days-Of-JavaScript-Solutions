//Calculate the slope, x-intercept and y-intercept of y = 2x -2
const equation = "y = 2x - 2";

let slope1 = 2;
const xIntercept = -1;
const yIntercept = -2;

console.log(`Equation: ${equation}`);
console.log(`Slope1: ${slope1}`);
console.log(`x-intercept: (${xIntercept}, 0)`);
console.log(`y-intercept: (0, ${yIntercept})`);



//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let x1 = 2, y1 = 2, x2 = 6, y2 = 10

let slope2 = (y2-y1)/(x2-x1)

console.log(`Slope2 is ${slope2}`)

//Compare the slope of above two questions.*/

console.log(slope1 === slope2)