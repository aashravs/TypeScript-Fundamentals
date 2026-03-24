interface paymentGateway{
    processPayment(amount : number) : Promise<boolean>;
}
class bankTransferGateway implements paymentGateway{
    async processPayment(amount : number): Promise<boolean> {
        console.log(`Payment of ${amount} is being processed`);
        return true;
    }
}
class PaymentProcessor {
    constructor(private gateway : paymentGateway){}
    async pay(amount : number):Promise<void>{
        const success = await this.gateway.processPayment(amount);
    if (success) {
      console.log("Payment successful!");
    } else {
      console.log("Payment failed.");
    }
    }
}
const bankGateway = new bankTransferGateway();
const processor = new PaymentProcessor(bankGateway);
processor.pay(500);
class FailMockGateway implements paymentGateway {
    async processPayment(amount: number): Promise<boolean> {
            console.log(`Mock failed payment of ${amount}`);
            return false;
    }
}
const failGateway = new FailMockGateway();
const testProcessor = new PaymentProcessor(failGateway);

testProcessor.pay(100);
