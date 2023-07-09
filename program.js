
var cors = require('cors')
const express = require('express')
const reader = require('xlsx')

const app = express()
const PORT = process.env.PORT || 3030;

// var XLSX = require("xlsx");
// var abc = XLSX.readFile("document.xlsx");
// import { readFileSync } from "fs";
// import { read } from "xlsx/xlsx.mjs";

// const buf = readFileSync("test.xlsx");
// /* buf is a Buffer */
// const workbook = read(buf);
// console.log(abc)
app.use(cors())

// Reading our test file
const file = reader.readFile('./document.xlsx')
let data = []
  
const sheets = file.SheetNames
const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[0]])
temp.forEach((res) => {
   data.push(res)
})
  

//  console.log(data)
// Printing data
//putting it on express

app.get('/', function (req, res) {
  res.send(data)
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});


//var express = require('express')
//var app = express()
 
 
// app.get('/', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
//   res.send(data)
// })
 
// app.listen(4848, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })