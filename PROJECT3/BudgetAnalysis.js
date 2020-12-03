// SE2202A 001 // Project 3
//Group 16 (Gabriella Gerges , Rohan Kamra Lyons , Seval Kenar , Suat Kenar , Ethan Machej)
//Due: Dec 7, 2020

const BudgetItem = require('./BudgetItem.js');
const Expense = require('./Expense.js');
const Income = require('./Income.js');


class BudgetAnalysis
{
    constructor(newbudget_items)
    {
        let __budget_items__=[];
      

        this.setbudget_items = function (newbudget_items)
        {
            __budget_items__.push(newbudget_items)
        };
        this.getbudget_items = function()
        {
            return __budget_items__;
        };

        this.setbudget_items(newbudget_items);
    };

    addBudgetItem = function(data) 
    {
        let budget_items=[]
        let b;
        for (let d of data)
        {
            switch(d.type)
            {
                case "Other":
                    b= new BudgetItem (d.amount,d.month,d.year);
                    break;
                case "Income":
                    b = new Income (d.amount, d.month,d.year, d.resource);
                    break;
                case "Expense":
                    b=new Expense (d.amount, d.month, d.year, d.destination, d.spender);
            };
        budget_items.push(b);
        };
        return budget_items;
    };

    budget_items_month=function(month,data)
    {
        let bymonth=[];
        let my_budget_items=this.addBudgetItem(data)
        for (let item_m of my_budget_items)
        {
            if (item_m.getmonth() == month)
            {   
                bymonth.push(item_m);
                
            }
        };
        return bymonth
    };

    budget_items_year=function(year,data)
    {
        let byyear=[];
        let my_budget_items=this.addBudgetItem(data)
        for (let item_y of my_budget_items)
        {
            if (item_y.getyear() == year)
            {   
                byyear.push(item_y);
                
            }
        };
        return byyear
    };

    revenue_month=function(mnth,data)
    {
        let total_income_mnth=0;
        let total_expenses_mnth = 0;
        let list_mnth = this.budget_items_month(mnth,data);
        for (let member_m of list_mnth)
        {
            if (member_m instanceof Income)
            {
                total_income_mnth +=member_m.getamount()
            }
            if (member_m instanceof Expense)
            {
                total_expenses_mnth +=member_m.getamount()
            }         
        }
        let revenue_mnth= total_income_mnth-total_expenses_mnth;
        return revenue_mnth;
    
    };    

    revenue_year=function(yr,data)
    {
        let total_income_yr=0;
        let total_expenses_yr = 0;
        let list_yr = this.budget_items_year(yr,data);
        for (let member_yr of list_yr)
        {
            if (member_yr instanceof Income)
            {
                total_income_yr +=member_yr.getamount()
            }
            if (member_yr instanceof Expense)
            {
                total_expenses_yr +=member_yr.getamount()
            }         
        }
        let revenue_yr= total_income_yr-total_expenses_yr;
        return revenue_yr;
    };

    //this.revenue_year(yr,data)
    //this.revenue_month(mnth,data)
};

module.exports = BudgetAnalysis;


