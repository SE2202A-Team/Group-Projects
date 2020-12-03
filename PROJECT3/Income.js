// SE2202A 001 // Project 3
//Group 16 (Gabriella Gerges , Rohan Kamra Lyons , Seval Kenar , Suat Kenar , Ethan Machej)
//Due: Dec 7, 2020

BudgetItem = require('./BudgetItem.js');

class Income extends BudgetItem
{
    constructor(amount,month,year,newSource="")
    {
        super(amount,month,year);

        var __Source__;

        this.setSource = function (Source)
        {
            __Source__ = Source
        };
   
        this.getSource = function()
        {
            return __Source__ ;
        };

        this.setSource(newSource);
    };
    
};
module.exports = Income;