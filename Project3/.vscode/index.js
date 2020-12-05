//Reads sample data, perform analysis on data and write output analysis in json file
//output file has list of json objects with two properties: time interval, revenue

const BudjetItem = require('./BudgetItem');
const Income = require('./Income');
const Expense = require('./Expense');
const BudgetAnalysis = require('./BudgetAnalysis');
let SampleData = require('./SampleData.json');
let fs = require('fs');

let time = [];
let revenue = [];
let budgetItems = new BudgetAnalysis();
let items = budgetItems.addItem(SampleData);

var data ={};
data.table = [];
for(let i of items){
    time[i] = i.getMonth();
    revenue[i] = budgetItems.monthRevenue(i.getMonth(),items);
    let x ={
        time: time[i],
        revenue: revenue[i]
    }
    data.table.push(x);
}
fs.writeFile('output.json',JSON.stringify(data),()=>{console.log("Budget Analysis formed at output.json.")});



