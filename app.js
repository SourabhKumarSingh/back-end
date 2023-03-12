const express = require('express');
const app = express();
const port = 3000;
const emplyees = []
app.use(express.json());
app.get('/', (req, res) => {
  res.status(200).json(emplyees)
 });

 app.post('/', (req, res) =>{
    console.log("body", req.body);
    
    emplyees.push(req.body)
    res.status(200).json(req.body)
 });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});