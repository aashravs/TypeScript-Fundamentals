type CustomerID = string;

type Customer = {
  id: CustomerID;
  name: string;
  email?: string;
};
type OrderStatus = "pending" | "shipped" | "returned";

type ProcessOrder = (orderId: number, callback: (status: OrderStatus) => void) => void;

type Container<T> = {
  value: T;
  timestamp: Date;
};

const processOrder: ProcessOrder = (orderId, callback) => {
  console.log(`Processing order ${orderId}`);

  let status: OrderStatus = "shipped";

  callback(status);
};

let customer: Customer = {
  id: "CUST-101",
  name: "Alice"
};

let customerContainer: Container<Customer> = {
  value: customer,
  timestamp: new Date()
};

processOrder(5001, (status) => {
  console.log("Order status:", status);
});