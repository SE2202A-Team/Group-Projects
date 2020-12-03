// SE2202A 001 // Project 3
//Group 16 (Gabriella Gerges , Rohan Kamra Lyons , Seval Kenar , Suat Kenar , Ethan Machej)
//Due: Dec 7, 2020

BudgetItem = require('./BudgetItem.js');

class Expense extends BudgetItem
{
    constructor(amount,month,year,newDestination="",newSpender="")
    {
        super(amount,month,year);

        var __Destination__;
        var __Spender__;

        this.setDestination = function (Destination)
        {
            __Destination__ = Destination
        };
        this.setSpender = function (Spender)
        {
            __Spender__ = Spender
        };

        this.getDestination = function()
        {
            return __Destination__ ;
        };
        this.getSpender = function()
        {
            return __Spender__ ;
        };

        this.setDestination(newDestination);
        this.setSpender(newSpender)
    };
    
};

module.exports = Expense;