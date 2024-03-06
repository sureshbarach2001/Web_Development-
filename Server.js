const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.static('views'));
app.set("view engine", "ejs");

app.get(["/", "/index.html"], (req, res) => {
    res.render("index", {bmiEJS: "", bmiTypeEJS: ""});
});


// BMI Functionality
app.get("/bmi", (req, res) => {
 
    const weightKG = Number(req.query.Weight);
    const heightM = Number(req.query.Height);
    const bmi = (weightKG / (heightM * heightM));
    let bmiType;

    if (bmi < 18.5) {
        bmiType = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiType = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiType = "Overweight";
    } else {
        bmiType = "Obese";
    }

    res.render("index", { bmiEJS: bmi, bmiTypeEJS: bmiType });
    // res.send(
    //     `Total Weight ==> ${weightKG}` + `<br/>`+ 
    //     `Total Height ==>   ${heightM}` + `<br/> <hr>`+ 
    //     `BMI Type ==>   ${bmiType}` + `<br/>`+ 
    //     `Total BMI ===>     ${bmi}`);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});