/*Create a personAccount out function. 
It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. 
Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/


function createPersonAccount(firstName = "", lastName = "", incomes = {}, expenses = {}) {
    function totalIncome() {
      const netIncome = Object.values(incomes).reduce((acc, curr) => acc + curr, 0);
      return netIncome;
    }
  
    function totalExpense() {
      const netExpense = Object.values(expenses).reduce((acc, curr) => acc + curr, 0);
      return netExpense;
    }
  
    function accountInfo() {
      const info = {
        "Name": firstName + " " + lastName,
        "Income": totalIncome(),
        "Expenses": totalExpense(),
        "Account Balance": accountBalance()
      };
      return info;
    }
  
    function addIncome(description, income) {
      incomes[description] = income;
    }
  
    function addExpense(description, expense) {
      expenses[description] = expense;
    }
  
    function accountBalance() {
      return totalIncome() - totalExpense();
    }
  
    return {
      accountInfo,
      addIncome,
      addExpense,
      totalExpense,
      totalIncome
    };
  }
  
  const account1 = createPersonAccount("Cid", "Kagenou", {
    "Pocket money from father": 2000,
    "Pocket money from mother": 1500,
    "Tip from Alexia": 800
  }, {
    "Spent on friends": 200,
    "Spent on confectionery": 600
  });
  
  console.group("Cid");
  console.log(account1.accountInfo());
  account1.addIncome("Pocket Money from sister", 2500);
  console.groupEnd();
  
  const account2 = createPersonAccount("Shadow", "Sama", {
    "Inheritance from eminence": 90000
  }, {
    "Damage to surroundings": 42000
  });
  
  account2.addIncome("Merged the rival bank account", 69000);
  account2.addExpense("More damage to surrounding", 30000);
  account2.addIncome("Stole from vampire queen", 100);
  
  console.group("Shadow");
  console.log(account2.accountInfo());
  console.log(account2.totalIncome());
  console.log(account2.totalExpense());
  console.groupEnd();
  

