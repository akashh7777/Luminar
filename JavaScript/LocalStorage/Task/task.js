let displayData = localStorage.getItem("bmi")
document.querySelector("#result").innerText = displayData

const inputData =()=>{
    let height = document.querySelector('#height').value
    let weight = document.querySelector('#weight').value
    let heightInMeter = height/100
    let bmi = weight/(heightInMeter*heightInMeter)
    bmi = bmi.toFixed(2)
    console.log(bmi)
    let result = document.getElementById('result')
        if(bmi<18.5){
            result.innerHTML='Your BMI is ' + bmi + ' Underweight'
        }
        else if(bmi<25){
            result.innerHTML='Your BMI is ' + bmi + ' Normal Weight'
        }
        else if(bmi<30){
            result.innerHTML='Your BMI is ' + bmi + ' Overweight'
        }
        else if(bmi>30){
            result.innerHTML='Your BMI is ' + bmi + ' Obese'
        }
        else{
            result.innerHTML='Invalid Input'
        }
    
    localStorage.setItem("bmi",result.innerHTML)
}