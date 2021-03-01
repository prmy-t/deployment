const xlsx = require("xlsx");
var wb = xlsx.readFile("gk.xlsx");

const ws = wb.Sheets["Sheet1"];

const data = xlsx.utils.sheet_to_json(ws);
console.log(data);
