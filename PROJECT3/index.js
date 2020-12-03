// SE2202A 001 // Project 3
//Group 16 (Gabriella Gerges , Rohan Kamra Lyons , Seval Kenar , Suat Kenar , Ethan Machej)
//Due: Dec 7, 2020

BudgetAnalysis = require('./BudgetAnalysis.js');
BudgetItem = require('./BudgetItem.js');
Expense = require('./Expense.js');
Income = require('./Income.js');
data= require('./input.json');

let fs = require("fs");
let months= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let years=[2018, 2019];
let output_data=[];

myBudgetAnalysis= new BudgetAnalysis(data);

for (let month of months)
{
    let revenue_m=myBudgetAnalysis.revenue_month(month,data);
    let JS_obj_m= {type :month, Revenue:revenue_m};
    output_data.push(JS_obj_m);
}


for (let year of years)
{
    let revenue_yr=myBudgetAnalysis.revenue_year(year,data);
    let JS_obj_yr= {type :year, Revenue:revenue_yr};
    output_data.push(JS_obj_yr);
}

fs.writeFile('./output.json', JSON.stringify(output_data),() => {console.log("Writing Completed.")}) 