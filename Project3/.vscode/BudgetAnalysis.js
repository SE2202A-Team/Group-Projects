//hidden array of budget items with methods :
//Method 1 --> Add budgetItem objects 1 by 1 
//Method 2 --> return budget items for given month
//Method 3 --> return budget items for given year
//Method 4 --> return the revenue (income of expenses) for given month
//Method 5 --> return revenue of given year

const BudjetItem = require('./BudgetItem');
const Income = require('./Income');
const Expense = require('./Expense');
const BudgetItem = require('./BudgetItem');
class BudgetAnalysis{

    constructor(newArray){
     let __items__ ;
     this.setBudgetItems = function(items){
       __items__ = items; 
     };
     this.getBudgetItems = function(){
       return __items__;
     };
     this.setBudgetItems(newArray);

  }
    addItem(data){
        let x = [];
        let i;
        for(let d of data){
        if(d.type == "Other"){
          i= new BudgetItem(d.amount,d.month,d.year);
        }else if(d.type == "Expense"){
          i = new Expense(d.amount,d.month,d.year,"","");
        }else{
          i = new Income(d.amount,d.month,d.year,"");
        }
        x.push(i);
      }
        this.setBudgetItems(x);
        return x;
    }
    monthBudget(month,data){
      let monthBudgetItems = [];
      for(let d of data){
        if(d.getMonth() == month){
          monthBudgetItems.push(d);
        }
      }
      return monthBudgetItems;
    }
    yearBudget(y,data){
      let yearBudgetItems = [];
      for(let d of data){
        if(d.getYear() == y){
          yearBudgetItems.push(d);
        }
      }
      return yearBudgetItems;
    }
    monthRevenue(month,monthBudgets){
      let monthly = this.monthBudget(month,monthBudgets);
      let totalExpenses = 0;
      let totalIncome = 0;
      for(let d of monthly){
        if(d.getType() == "Expense"){
          totalExpenses += d.getAmount();
        }
        if(d.getType() == "Income"){
          totalIncome += d.getAmount();
        }
      }
      let totalRevenue = totalIncome - totalExpenses;
      return totalRevenue;
    }
}
module.exports = BudgetAnalysis;
