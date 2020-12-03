//Reads sample data, perform analysis on data and write output analysis in json file
//output file has list of json objects with two properties: time interval, revenue

const BudjetItem = require('./BudgetItem');
const Income = require('./Income');
const Expense = require('./Expense');
const BudgetAnalysis = require('./BudgetAnalysis');
let SampleData = require('./SampleData.json');
