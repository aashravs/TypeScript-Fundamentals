//5th case study
let answers: { [key: string]: any } = {};

function recordAnswer(questionId: string, answer: any): void {
    answers[questionId] = answer;
}
recordAnswer("Q1", "Yes");
recordAnswer("Q2", 5);
recordAnswer("Q3", ["Option A", "Option B"]);
console.log("All recorded answers:");
console.log(answers);