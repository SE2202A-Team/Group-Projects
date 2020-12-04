//3 hidden fields --> Amount of Item, month associated with amount, year associated

class BudgetItem{
    constructor(amount,month,year){
        var __amount__;
        var __month__;
        var __year__;
        this.setAmount = function(newAmount){
            __amount__=(newAmount>=0)?newAmount:0;
        };
        this.getAmount = function(){
            return __amount__;
        };
        this.setMonth = function(newMonth){
            __month__ = (newMonth>=0)?newMonth:0;
        };
        this.getMonth = function(){
            return __month__;
        }
        this.setYear = function(newYear){
            __year__ = (newYear>=0)?newYear:0;
        };
        this.getYear = function(){
            return __year__;
        };
        this.setAmount(amount);
        this.setYear(year);
        this.setMonth(month);

    }
    

}
module.exports= BudgetItem;