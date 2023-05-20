//키 feet를 cm로 변환

const heightButton = document.querySelector('#feetcm');
heightButton.addEventListener('click', () =>{
    const formatMessage = 'Input Your Height! Format: 5.7(5 feet 7 inch)'
    const feet = prompt(formatMessage, '5.7')
    if(feet == '' || feet == null){
        alert("You didn't input value. Try it again!")
    } else{
        const floatFeet = parseFloat(feet, 10)
        const feetcm =  (floatFeet * 30.48).toFixed(1);
        alert(`Your height is ${feetcm}cm !`)
    }
})

//몸무게 lb를 kg로 변환
const weightButton = document.querySelector('#lbkg');
weightButton.addEventListener('click', () =>{
    const formatMessage2 = 'Input Your Weight! Format: 186.5(186.5 pounds)'
    const lb = prompt(formatMessage2, '186.5')
    if(lb == '' || lb == null){
        alert("You didn't input value. Try it again!")
    } else{
        const floatLb = parseFloat(lb, 10)
        const kilogram =  (floatLb * 0.453).toFixed(1);
        alert(`Your weight is ${kilogram}kg !`)
    }
})
// 인치 inch를 cm로 변환
const inchButton = document.querySelector('#inchcm');
inchButton.addEventListener('click', () =>{
    const formatMessage3 = 'Input Your waist or hip circumference! Format: 30.4(30.4 inch)'
    const inch = prompt(formatMessage3, '30.4')
    if(inch == '' || inch == null){
        alert("You didn't input value. Try it again!")
    } else{
        const floatInch = parseFloat(inch, 10)
        const centimeter =  (floatInch * 2.54).toFixed(1);
        alert(`It is ${centimeter}cm !`)
    }
})


//BMI 계산
// const btn1Bmi = document.querySelector('#bmibtn');
// btn1Bmi.addEventListener('click', 
function bmiFunction() {
    var resultDiv = document.getElementById('result1');
    const height1 = document.querySelector('#height').value;
    const floatHeight1 = parseFloat(height1,10);
    const floatHeightDividedby100 = floatHeight1/100
    const weight1 = document.querySelector('#weight').value;
    const floatWeight1 = parseFloat(weight1,10);

    const bmiButton = document.getElementById("bmibtn");
    
    const bmiResult = (floatWeight1/Math.pow(floatHeightDividedby100,2)).toFixed(2);
    var resultText = 'My BMI: ' + bmiResult
    if(bmiResult < 18.5){
        resultText +=  ' Underweight.';}
    else if (bmiResult >= 18.5 && bmiResult < 25.0){
        resultText +=  ' Moderate.';}
    else if(bmiResult >= 25.0 && bmiResult < 30.0){
        resultText +=  ' Overweight.';} 
    else if(bmiResult >= 30) {
        resultText +=  ' Obese.';}
    else {
        resultDiv.textContent = '';
    }
    resultDiv.textContent = resultText;
    bmiButton.innerHTML = 'Reset';
    bmiButton.classList.add("resetBtn");
    bmiButton.onclick = resetInputs;        
}
function resetInputs(){
    var height1 = document.querySelector('#height');
    var weight1 = document.querySelector('#weight');
    var resultDiv = document.getElementById('result1');
    var bmiButton = document.getElementById("bmibtn");

    height1.value = "";
    weight1.value = "";
    resultDiv.textContent = "";

    bmiButton.innerHTML = "Check My BMI";
    bmiButton.classList.remove("resetbtn");
    bmiButton.onclick = bmiFunction;
}


//PIBW 계산
function pibwFunction(){
    var sex = document.querySelector('input[name="flexRadioDefault4"]:checked');
    var resultDiv2 = document.getElementById('result2');
    var resultDiv22 = document.getElementById('result22')
    const height3 = document.querySelector('#height3').value;
    const floatHeight3 = parseFloat(height3,10);
    const floatHeight3Dividedby100 = floatHeight3/100
    const weight3 = document.querySelector('#weight3').value;
    const floatWeight3 = parseFloat(weight3,10);

    const pibwButton = document.getElementById("pibwbtn");

    var resultidwText = 'My ideal standard body weight is ';
    var resultpibwText = 'My PIBW is ';

    if(sex.value == 'male'){ 
        const standardMenWeight = (Math.pow(floatHeight3Dividedby100,2)*22).toFixed(1)
        const standardMenWeightPounds = (standardMenWeight * 2.2).toFixed(1);
        resultDiv2.textContent = resultidwText + standardMenWeightPounds + ' lbs (' + standardMenWeight + 'kg)';
        const pibwMen = ((floatWeight3/standardMenWeight) * 100).toFixed(1);
        if (pibwMen < 90.0){
            resultpibwText += `${pibwMen} & Underweight`;
        } else if(pibwMen >= 90.0 && pibwMen <110.0){
            resultpibwText += `${pibwMen} & Moderate`;
        } else if(pibwMen >= 110.0 && pibwMen < 120.0){
            resultpibwText += `${pibwMen} & Overweight`;
        } else if(pibwMen >= 120.0 && pibwMen < 130.0){
            resultpibwText += `${pibwMen} & Obese level 1`;
        } else if(pibwMen >= 130.0 && pibwMen <160.0){
            resultpibwText += `${pibwMen} & Obese level 2`;
        } else{
            resultpibwText += `${pibwMen} & Obese level 3`;
        }
        resultDiv22.textContent = resultpibwText;
    } else if(sex.value == 'female'){
        const standardWomenWeight = (Math.pow(floatHeight3Dividedby100,2)*21).toFixed(1)
        const standardMenWeightPounds = (standardWomenWeight * 2.2).toFixed(1);
        resultDiv2.textContent = resultidwText + standardWomenWeight + ' lbs (' + standardWomenWeight + 'kg)';
        const pibwWomen = ((floatWeight3/standardWomenWeight) * 100).toFixed(1);
        if (pibwWomen < 90.0){
            resultpibwText += `${pibwWomen} & Underweight`;
        } else if(pibwWomen >= 90.0 && pibwWomen <110.0){
            resultpibwText += `${pibwWomen} & Moderate`;
        } else if(pibwWomen >= 110.0 && pibwWomen < 120.0){
            resultpibwText += `${pibwWomen} & Overweight`;
        } else if(pibwWomen >= 120.0 && pibwWomen < 130.0){
            resultpibwText += `${pibwWomen} & Obese level 1`;
        } else if(pibwWomen >= 130.0 && pibwWomen <160.0){
            resultpibwText += `${pibwWomen} & Obese level 2`;
        } else{
            resultpibwText += `${pibwWomen} & Obese level 3`;
        }
        
        resultDiv22.textContent = resultpibwText;
    } else{
        resultDiv22.textContent = '';
    }
    pibwButton.innerHTML = 'Reset';
    pibwButton.classList.add("resetBtn2");
    pibwButton.onclick = resetInputs2;
}
function resetInputs2(){
    var height3 = document.querySelector('#height3');
    var weight3 = document.querySelector('#weight3');
    var resultDiv2 = document.getElementById('result2');
    var resultDiv22 = document.getElementById('result22')
    var pibwButton = document.getElementById("pibwbtn");
    var maleRadio = document.getElementById("male");
    var femaleRadio = document.getElementById("female");

    height3.value = "";
    weight3.value = "";
    resultDiv2.textContent = "";
    resultDiv22.textContent = "";
    maleRadio.checked = false;
    femaleRadio.checked = false;

    pibwButton.innerHTML = "Check My PIBW";
    pibwButton.classList.remove("resetbtn2");
    pibwButton.onclick = pibwFunction;
}


//WHR 계산
// const btn2Whr = document.querySelector('#whrbtn');
// btn2Whr.addEventListener('click', function() 
function whrFunction() {
    var sex = document.querySelector('input[name="flexRadioDefault2"]:checked');
    var resultDiv3 = document.getElementById('result3');
    const hip1 = document.querySelector('#hip').value;
    const floatHip1 = parseFloat(hip1,10);
    const belly1 = document.querySelector('#belly').value;
    const floatBelly1 = parseFloat(belly1,10);
    const whrResult = (floatBelly1/floatHip1).toFixed(2);

    const whrButton = document.getElementById("whrbtn");
    var resultText = 'My WHR is ' + whrResult;

    if(sex.value == 'male'){ 
        var resultText = 'My WHR is ' + whrResult;
        if(whrResult <= 0.90){
            resultText += " & Low Disease Risk.";
        } else if(whrResult >= 0.91 && whrResult < 1.0){
            resultText += " & Moderate Disease Risk.";
        } else{
            resultText += " & High Disease Risk.";
        }
        resultDiv3.textContent = resultText;
    } else if(sex.value == 'female'){
        var resultText = 'My WHR is ' + whrResult;
        if(whrResult <= 0.80){
            resultText += " & Low Disease Risk.";
        } else if(whrResult >= 0.81 && whrResult <= 0.84){
            resultText += " & Moderate Disease Risk.";
        } else{
            resultText += " & High Disease Risk.";
        }
        resultDiv3.textContent = resultText;
    } else{
        resultDiv3.textContent = '';
    }
    whrButton.innerHTML = 'Reset';
    whrButton.classList.add("resetBtn3");
    whrButton.onclick = resetInputs3;
}
function resetInputs3(){
    var hip1 = document.querySelector('#hip');
    var belly1 = document.querySelector('#belly');
    var resultDiv3 = document.getElementById('result3');
    var whrButton = document.getElementById("whrbtn");
    var maleRadio = document.getElementById("male3");
    var femaleRadio = document.getElementById("female3");

    hip1.value = "";
    belly1.value = "";
    resultDiv3.textContent = "";
    maleRadio.checked = false;
    femaleRadio.checked = false;

    whrButton.innerHTML = "Check My WHR";
    whrButton.classList.remove("resetbtn3");
    whrButton.onclick = whrFunction;
}

//WHtr 계산
function whtrFunction(){
    var sex = document.querySelector('input[name="flexRadioDefault3"]:checked');
    var resultDiv4 = document.getElementById('result4');
    const height2 = document.querySelector('#height2').value;
    const floatHeight2 = parseFloat(height2,10);
    const belly2 = document.querySelector('#belly2').value;
    const floatBelly2 = parseFloat(belly2,10);
    const whtrResult = (floatBelly2/floatHeight2).toFixed(2);

    const whtrButton = document.getElementById("whtrbtn");

    var resultText = 'My WHtR is ' + whtrResult;

    if(sex.value == 'male'){ 
        var resultText = 'My WHtR is ' + whtrResult;
        if(whtrResult <= 0.34){
            resultText += " & Severe underweight.";
        } else if(whtrResult >= 0.35 && whtrResult < 0.43){
            resultText += " & Underweight.";
        } else if(whtrResult >= 0.43 && whtrResult < 0.53){
            resultText += " & Moderate.";
        } else if(whtrResult >= 0.53 && whtrResult < 0.58){
            resultText += " & Overweight.";
        } else if(whtrResult >= 0.58 && whtrResult < 0.63){
            resultText += " & Severe overweight.";
        } else{
            resultText += " & Obese.";
        }
        resultDiv4.textContent = resultText;
    } else if(sex.value == 'female'){
        var resultText = 'My WHtR is ' + whtrResult;
        if(whtrResult <= 0.34){
            resultText += " & Severe underweight.";
        } else if(whtrResult >= 0.35 && whtrResult < 0.42){
            resultText += " & Underweight.";
        } else if(whtrResult >= 0.42 && whtrResult < 0.49){
            resultText += " & Moderate.";
        } else if(whtrResult >= 0.49 && whtrResult < 0.54){
            resultText += " & Overweight.";
        } else if(whtrResult >= 0.54 && whtrResult < 0.58){
            resultText += " & Severe overweight.";
        } else{
            resultText += " & Obese.";
        }
        resultDiv4.textContent = resultText;
    } else{
        resultDiv4.textContent = '';
    }
    whtrButton.innerHTML = 'Reset';
    whtrButton.classList.add("resetBtn4");
    whtrButton.onclick = resetInputs4;
}
function resetInputs4(){
    var height2 = document.querySelector('#height2');
    var belly2 = document.querySelector('#belly2');
    var resultDiv4 = document.getElementById('result4');
    var whtrButton = document.getElementById("whtrbtn");
    var maleRadio = document.getElementById("male4");
    var femaleRadio = document.getElementById("female4");

    height2.value = "";
    belly2.value = "";
    resultDiv4.textContent = "";
    maleRadio.checked = false;
    femaleRadio.checked = false;

    whtrButton.innerHTML = "Check My WHtR";
    whtrButton.classList.remove("resetbtn4");
    whtrButton.onclick = whtrFunction;
}