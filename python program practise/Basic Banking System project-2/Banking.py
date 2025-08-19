class BankAccount:
    def __init__(self, balance: float = 0.0):
        self.balance = balance

    def deposit(self, amount: float):
        if amount > 0:
            self.balance += amount
            print(f"Deposited ${amount:.2f}. current balance: ${self.balance:.2f}")
        else:
            print("Deposite amount must be positive")

    def withdraw(self, amount: float):
        if amount > 0:
            if self.balance >= amount:
                self.balance -= amount
                print(f"Withdraw ${amount:.2f}. current balance: ${self.balance:.2f}")
            else:
                print(f"Insufficient funds. current balance: ${self.balance:.2f}")
        else:
            print("Withdrawn amount must be positive")

    def Check_balance(self):
        print(f"current balance: ${self.balance:.2f}")

def main():

    account = BankAccount(1000.0)

    while True:
        print("\n--- Banking system ---")
        print("1. Deposit")
        print("2. Withdrawn")
        print("3. Check Balance")
        print("4. Exit")

        choice = input("choose an option: ")

        if choice == "1":
            try:
                amount= float(input("Enter the amount to deposit: $"))
                account.deposit(amount)
            except ValueError:
                print("Invalid input! pease enter the valid number of the deposit.")
        
        elif choice == "2":
            try:
                amount = float(input("Enter the amount to withdrawn: $"))
                account.withdraw(amount)
            except ValueError:
                print("Invalid input! please enter the valid number of the withdrawn.")

        elif choice == "3":
            account.Check_balance()

        elif choice == "4":
            print("Exiting the banking system. Goodbye!")
            break

        else:
            print("Invalid option. please try again.")

if __name__ == '__main__':
    main()