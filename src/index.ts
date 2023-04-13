
console.log("puerto",process.env.PORT)


const express = require('express')
const app = express()
const port = 8080

app.get('/healtz', (req, res) => {
    res.send("ok")
    console.log(`healtz ok`);
});

app.get('/', (req, res) => {
    res.send("ok")
    console.log(`/`);
});

app.listen(port, () => {
    console.log(`Example app listening on ports ${port}`)
    //console.log(req.header('x-forwarded-for'))
  })
