// SE2202A 001 // Project 3
//Group 16 (Gabriella Gerges , Rohan Kamra Lyons , Seval Kenar , Suat Kenar , Ethan Machej)
//Due: Dec 7, 2020

class BudgetItem
{
    constructor(newamount, newmonth, newyear)
    {
        let __amount__;
        let __month__;
        let __year__;

        this.setamount = function (amount){
            __amount__ = amount
        };
        this.getamount = function(){
            return __amount__;
        };

        this.setmonth = function (month){
            __month__= month
        };
        this.getmonth = function () {
            return __month__;
        };

        this.setyear = function (year){
            __year__ = year
        };
        this.getyear = function(){
            return __year__;
        };

        this.setamount(newamount);
        this.setmonth(newmonth);
        this.setyear(newyear);
    }
    
};

module.exports = BudgetItem;