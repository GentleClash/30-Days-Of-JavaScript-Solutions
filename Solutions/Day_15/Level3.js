/*
Create a class called PersonAccount. 
It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/



class PersonAccount{
    constructor(firstName = "", lastName = "", incomes = {}, expenses = {}){
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = incomes
        this.expenses = expenses
    }
    totalIncome(){
        const netIncome = Object.values(this.incomes).reduce((acc, curr)=>acc+curr, 0)
        return netIncome
    }
    totalExpense(){
        const netExpense = Object.values(this.expenses).reduce((acc, curr)=>acc+curr, 0)
        return netExpense
    }
    accountInfo(){
        const info = {"Name":this.firstName + " " +this.lastName,
                      "Income":this.totalIncome(),
                      "Expenses":this.totalExpense(),
                      "Account Balance": this.accountBalance() }
        return info
    }
    addIncome(description, income){
        this.incomes[description] = income
    }
    addExpense(description, expense){
        this.expenses[description] = expense
    }
    accountBalance(){
        return this.totalIncome() - this.totalExpense()
    }

}

const account1 = new PersonAccount("Cid", "Kagenou", {"Pocket money from father": 2000,
                                                      "Pocket money from mother": 1500,
                                                      "Tip from Alexia": 800},
                                                      {"Spent on friends": 200,
                                                       "Spent on confectionery": 600})
//console.log(account1)
console.group("Cid")
console.log(account1.accountInfo())
account1.addIncome("Pocket Money from sister", 2500)
console.log(account1.incomes)
console.groupEnd()

const account2 = new PersonAccount("Shadow", "Sama", {"Inheritance from eminence" : 90000},
                                                     {"Damage to surroundings": 42000})
account2.addIncome("Merged the rival bank account", 69000)
account2.addExpense("More damage to surrounding", 30000)
account2.addIncome("Stole from vampire queen", 100)

console.group("Shadow")
console.log(account2.accountInfo())
console.log(account2.incomes)
console.log(account2.totalIncome())

console.log(account2.expenses)
console.log(account2.totalExpense())
console.groupEnd()

