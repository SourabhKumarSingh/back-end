const express = require('express');
const app = express();
const port = 3000;
const emplyees = []

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.set('Access-Control-Allow-Headers', "*");
  res.set('Access-Control-Allow-Methods', "*");
  next();
});

app.use(express.json());
app.get('/', (req, res) => {
  res.status(200).json(emplyees)
});

app.post('/', (req, res) => {
  console.log("body", req.body);

  emplyees.push(req.body)
  res.status(200).json(req.body)
});

app.put('/', (req, res) => {

  const index = emplyees.findIndex(e => e.id === req.body.id);
  if (index !== -1) {
    emplyees.splice(index, 1, );
    emplyees.push(req.body);
    res.status(200).json({ msg: "updated success" });
  }
  else {
    res.status(400).json({ msg: "NO Employee found with given id.!" });
  }

})

app.delete('/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  const index = emplyees.findIndex(e => +e.id === +id);
  console.log('index', index)
  if (index !== -1) {
    emplyees.splice(index, 1);
  }
  res.status(200).json({ msg: "deleted success" });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});