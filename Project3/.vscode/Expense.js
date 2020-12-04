//ExtendsBudget Item --> Adds Destination (what money was spent on) and Spender(Name of person who spent money)

const BudgetItem= require('./BudgetItem');
class Expense extends BudgetItem{
    constructor(amount,month,year,destination,spender){
        super(amount,month,year);
        var __destination__;
        var __spender__;
        this.setSpender= function(x){
            __spender__ = x;
        };
        this.getSpender = function(){
            return __spender__;
        };
        this.setDestination= function(x){
            __destination__ = x;
        };
        this.getDestination = function(){
            return __destination__;
        };
        this.setSpender(spender);
        this.setDestination(destination);


    }

}
module.exports = Expense;