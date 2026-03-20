interface Observer {
  update(msg: string): void;
}
class Customer implements Observer {
  update(msg: string): void {
    console.log("Customer:", msg);
  }
}
class Inventory implements Observer {
  update(msg: string): void {
    console.log("Inventory:", msg);
  }
}
class PromotionSystem implements Observer {
  update(msg: string): void {
    console.log("Promotion:", `Special offer! ${msg}`);
  }
}
class DrinkOrder {
  private observers: Observer[] = [];

  addObserver(obs: Observer): void {
    this.observers.push(obs);
  }
  notifyAll(msg: string): void {
    this.observers.forEach(obs => obs.update(msg));
  }
  completeOrder(): void {
    this.notifyAll("Order complete");
  }
}
const order = new DrinkOrder();
order.addObserver(new Customer());
order.addObserver(new Inventory());
order.addObserver(new PromotionSystem());
order.completeOrder();