
console.log("puerto",process.env.PORT)


const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/healtz', (req, res) => {
    res.send("ok")
    console.log(`healtz ok`);
});

app.get('/', (req, res) => {
    res.send("ok")
    console.log(`/`);
});

app.get('/ip',function(req, res) {
    console.log("buscando IP...");
    const ipAddress = req.header('x-forwarded-for') || req.socket.remoteAddress;
    res.send("ipAddress encontrada:"+ipAddress);
});

app.listen(port, () => {
    console.log(`Example app listening on ports ${port}`)
    //console.log(req.header('x-forwarded-for'))
  })
