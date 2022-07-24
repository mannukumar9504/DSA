const express = require("express");
const { fork } = require("child_process");
const app = express();
const port = 3000;

app.get("/one", (req,res) => {
const sum = complexComputation();
res.send({"sum": sum});
});
app.get("/two", async(req,res) => {
    const sum = await asyncComplexComputation();
    res.send({sum: sum});
});
app.get("/three", (req,res) => {
    const childProcess = fork('./longtask.js');
    childProcess.send('start');
    childProcess.on('message', (sum)=>{
        res.send({sum});
    })
    
});
app.listen(port, ()=>console.log("server listening on port..."+port));

const complexComputation = () => {
    let result = 0
    for(let i=0; i< 1e9; i++) {
        result+=i;
    }
    return result;
}

const asyncComplexComputation = () =>{
    return new Promise((resolve, reject) => {
        let result = 0
        for(let i=0; i< 1e9; i++) {
            result+=i;
        }
        resolve(result);
    })
}