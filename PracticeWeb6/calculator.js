const express= require("express");
const bodyPasser= require("body-parser");

const app= express();
app.use(bodyPasser.urlencoded({extended: true}));

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", (req, res)=>{
    var num1= Number(req.body.height);
    var num2= Number(req.body.weight);

    res.send("Your BMI is "+ (num2/num1));
});

app.listen(3000, () => 
console.log("server is runnig on localhost 3000")
);

