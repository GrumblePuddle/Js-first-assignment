// BANK ACCOUNT

// REQUIREMENTS
// Create an object called account that has the following properties:
// - accountName, should be the data type string
// this property should contain the name of the account holder

// - balance, should be the data type number
// this property should contain the total amount of the account

// - getBalance, should be a function
// this function should display the total amount of the account to the user

// - deposit, also a function
// this function should be able to deposit money onto the balance of the account

// - withdrawal, also a function
// this function should be able do withdrawal money from the balance of the account

// - getAccountName, function as well
// this function should dispaly the account holders name to the user

// - accountError, same as above function!
// this one is a bit tricky... it's up to you to figure out how or what you should use this for.
// HINT: it's more a thinking poblem than a technical problem :)

// EXTRA: exitAccount, should be a function
// this function should exit the account
// HINT: there are a few different ways to do this, it's up to you which way you choose.

// EXTRA = OPTIONAL NOT MANDATORY

// Remember that a function is just a value. And if a function is just a
// value then we can both pass it as a parameter to a function and
// pass it as a property of an object.

// The object should handle all of the functionality (logic)

// The atm() function should be responsible for showing the user interface
// and based on the user input show the right meny choice

// HINT:
// these operators could probably be useful in this assignment:
// && operator
// || operator

// In this assignment you do not have to create any HTML you will only output
// to the console. But you will use prompt instead of just regular console.

// to handle one of the potential errors you can use this built in method isNaN(), this is how you use it:
const variableName = 10;
isNaN(variableName);



// this is the function atm(), I've created some start code for you
function atm() {
  const message = parseFloat(prompt("Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"));//To make sure the thing we type in the prompt is a number
  switch (message) {
    case 1:
      console.log(account.getBalance());
      atm();
      break;
      case 2:
        const deposit = parseFloat(prompt("How much whould you like to deposit?"));
          console.log(account.deposit(deposit));
          atm();
        break;
        case 3:
          const amount = parseFloat(prompt("How much would you like to withdraw?"));
          console.log(account.withdrawal(amount));
          atm();
          break;
          case 4:
            console.log("Name of account " + account.getAccountName());
            atm();
            break;
            case 5:
              const exit = prompt("Are you sure you want to exit? yes or no");
              console.log(account.exitAccount(exit));
              break;
              default:
                console.log(account.accountError());
                break;
  }
  // you need to answer the question why we are using parseFloat() method here?
  // you can answer as a comment in your code, and yes you need to do some research of your own

  // to show the right output based on the user input you can
  // either use a if/else statement or a switch.
  // Write a comment and motivate your choice
}


const account = {
  accountName: "Gustav",
  balance: 200,
  getBalance: function() {
    return this.balance;
  },
  deposit: function(deposit) {
      if (isNaN(deposit) || deposit <= 0) {
          console.log("Please enter a valid number");
          return;
      } else {
        this.balance = this.balance + deposit;
    return this.balance;
      }
    
  },
  withdrawal: function(amount) {
    if (isNaN(amount) || amount <= 0) {
      console.log("Please enter a valid number");
      return;
    } else {
      if (amount <= this.balance) {
        this.balance = this.balance - amount;
        return this.balance;    
      } else {
        const diff = amount - this.balance;
        console.log(`Not enough money, missing: ${diff}`);
      }
    }
    
  },
  getAccountName: function() {
    return this.accountName;
  },
  accountError: function() {
    return "error";
  },
  exitAccount: function(exit) {
    switch (exit) {
      case "yes":
        const exitMessage = `${this.accountName} exited`;
        return exitMessage;
        break;
        case "no":
          atm();
          break;
          default:
            return "Bruh";
            break;

    }
  },
}


atm();