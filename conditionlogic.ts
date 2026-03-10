function checkSign(num: number): void {
  if (num > 0) {
    console.log("Number is positive");
  }
}
function evenOrOdd(num: number): void {
  if (num % 2 === 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
}
function getGrade(score: number): string {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
function provideFeedback(grade: string): void {
  switch (grade) {
    case "A":
      console.log("Excellent!");
      break;
    case "B":
      console.log("Great job!");
      break;
    case "C":
      console.log("Good effort.");
      break;
    case "D":
      console.log("Needs improvement.");
      break;
    case "F":
      console.log("You failed.");
      break;
    default:
      console.log("Invalid grade.");
  }
}

checkSign(5);
evenOrOdd(7);

let grade = getGrade(85);
console.log("Grade:", grade);

provideFeedback(grade);