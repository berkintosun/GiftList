const express = require('express');
const verifyProof = require('../utils/verifyProof');

const port = 1225;

const app = express();
app.use(express.json());


const MERKLE_ROOT = '62e946077417d115004dc13da967c6d7e64d9954adc337452885d4ce9a8653bf';

app.post('/gift', (req, res) => {
  const body = req.body;
  console.log(body.proof)
  console.log(body.name)
  const isInTheList = verifyProof(body.proof,body.name,MERKLE_ROOT);
  if(isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
