//Extends Budget Item and adds Source(source of income)
const BudjetItem = require('./BudgetItem');
class Income extends BudjetItem{
    constructor(amount,month,year,source){
        super(amount,month,year);
        var __source__;

        this.setSource = function(x){
            __source__ = x;
        }
        this.getSource = function(){
            return __source__;
        }
        this.getType = function(){
            return "Income";
        }

    }

}
module.exports=Income;