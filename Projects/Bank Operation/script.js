class Program {
    constructor(balance, pin) {
        this.balance = balance;
        this.pin = pin;
    }

    deposit(amount) {
        if (amount > 0) {
                this.balance += amount;
                return this.balance;
        } else {
            console.log("error")
            alert("Invalid Input! Try Again")
        }
    }

    withdraw(amount) {
        if (amount >= 50 && amount < this.balance) {
            let pin_userInput = prompt("Enter PIN");
            if (this.pin == pin_userInput) {
                this.balance -= amount;
                console.log(this.balance);
            }
            else{
                alert("Wrong Pin! Try Again")
            }
        } else {
            console.log("error")
            alert("Invalid Input! Try Again... Withdrawal limit is Kshs 50 or more")
        }
    }
}


let App = new Program(5000, 1793);
//console.log(App.deposit(2500));
//App.withdraw(4000);

let amount = document.getElementById("amount");
let bal = document.getElementById('bal');
let depositBtn = document.querySelector(".depositBtn");
let withdrawBtn = document.querySelector('.withdrawBtn');


depositBtn.addEventListener("click", ()=>{
    App.deposit(Number(amount.value))
    bal.innerText= `${App.balance}`;
})

withdrawBtn.addEventListener("click", ()=>{
    App.withdraw(Number(amount.value))
    bal.innerText= `${App.balance}`;
})