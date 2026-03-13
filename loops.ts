//11th case study
type Transaction = {
  id: number;
  type: "checkout" | "return" | "cancelled" | "priority";
};
const transactions: Transaction[] = [
  { id: 1, type: "checkout" },
  { id: 2, type: "cancelled" },
  { id: 3, type: "return" },
  { id: 4, type: "priority" },
  { id: 5, type: "checkout" }
];
const inventory: { [title: string]: number } = {
  "The Hobbit": 3,
  "1984": 5,
  "TypeScript Guide": 2
};
const visitors: string[] = ["Alice", "Bob", "Carol"];
let transactionCounts = {
  checkout: 0,
  return: 0,
  priority: 0,
  cancelled: 0
};

for (let i = 0; i < transactions.length; i++) {
  const tx = transactions[i];
  transactionCounts[tx.type]++;
}
console.log("Transaction counts:", transactionCounts);
let indexWhile = 0;

while (true) {
  const tx = transactions[indexWhile];

  console.log(`Checking transaction ${tx.id}`);

  if (tx.type === "priority") {
    console.log("Priority transaction encountered. Stopping.");
    break;
  }

  indexWhile++;
}
let pendingReturns = 0;
let idx = 0;
do {
  const tx = transactions[idx];
  if (tx.type === "return") {
    console.log(`Handling return transaction ${tx.id}`);
    pendingReturns++;
  }
  idx++;
} while (idx < transactions.length);
console.log(`Pending returns: ${pendingReturns}`);
for (let book in inventory) {
  inventory[book] = 0;
}
console.log("Inventory after reset:", inventory);
console.log("Visitors in reverse order:");
for (let i = visitors.length - 1; i >= 0; i--) {
  console.log(visitors[i]);
}