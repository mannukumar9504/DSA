const complexComputation = () => {
    let result = 0;
    for(let i=0; i< 1e9; i++) {
        result+=i;
    }
    return result;
}
process.on("message", (message)=>{
    if(message === 'start') {
        const sum = complexComputation();
        process.send(sum);
    }
})