const express = require("express");
const schedule = require("node-schedule");
const app  = express();
const port = 8080;
// app.get('/mannu',() => {
    
// })
const scheduleFunction = () => {
    console.log("this is that having this thing");
    return ;
}
schedule.scheduleJob("*/1 * * * *", scheduleFunction);
app.listen(port, () => {
    console.log("yaha aa raha hai");
});
