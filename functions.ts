//12th case study
type Member = {
  name: string;
  email?: string;
};
function displayMember(member: Member): void {
  if (member.email) {
    console.log(`${member.name} (${member.email})`);
  } else {
    console.log(`${member.name} (no email provided)`);
  }
}
function calculateFines(...fines: number[]): number {
  return fines.reduce((sum, fine) => sum + fine, 0);
}
function membershipFee(amount: number, discount: number = 0.1): number {
  return amount - amount * discount;
}
function vipGreet(name: string): string {
  return `Welcome VIP ${name}!`;
}
function consoleGreet(name: string): void {
  console.log(`Hello ${name}`);
}
function factorial(n: number): number {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
function generateTextReport(items: { title: string }[]): string {
  return items.map(item => `Title: ${item.title}`).join("\n");
}
function generateJSONReport(items: { title: string }[]): string {
  return JSON.stringify(items, null, 2);
}
displayMember({ name: "Alice", email: "alice@example.com" });
displayMember({ name: "Bob" });
const totalFines = calculateFines(5, 10, 2.5);
console.log("Total fines:", totalFines);
const defaultFee = membershipFee(100);
const customFee = membershipFee(100, 0.2);
console.log("Fee with default discount:", defaultFee);
console.log("Fee with 20% discount:", customFee);
console.log(vipGreet("Alice"));
consoleGreet("Alice");
console.log(vipGreet("Bob"));
consoleGreet("Bob");
console.log("Factorial of 5:", factorial(5));
const books = [
  { title: "1984" },
  { title: "The Hobbit" }
];

const textReport = generateTextReport(books);
const jsonReport = generateJSONReport(books);

console.log("Text Report:\n", textReport);
console.log("JSON Report:\n", jsonReport);