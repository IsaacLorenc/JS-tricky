function createAccount(pin, initialDeposit) {
    let balance = initialDeposit;
    let currentPin = pin;
  
    return {
      checkBalance(enteredPin) {
        if (enteredPin !== currentPin) return "Invalid PIN.";
        return `$${balance}`;
      },
      deposit(enteredPin, amount) {
        if (enteredPin !== currentPin) return "Invalid PIN.";
        balance += amount;
        return `Successfully deposited $${amount}. Current balance: $${balance}.`;
      },
      withdraw(enteredPin, amount) {
        if (enteredPin !== currentPin) return "Invalid PIN.";
        if (amount > balance) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        balance -= amount;
        return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
      },
      changePin(oldPin, newPin) {
        if (oldPin !== currentPin) return "Invalid PIN.";
        currentPin = newPin;
        return "PIN successfully changed!";
      }
    };
  }
  
  let account = createAccount("1234", 100);
  
module.exports = { createAccount };
