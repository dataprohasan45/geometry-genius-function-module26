// jog korar por eitar calculate result khotaw ekta jaigai show korbe seita korar jonno ei function
// ex:
// kono ekta threeboj er bomi and ucchota dewa ache er area bahir korte hobe seita calculate korbo and khotaw ekta jaigai show korte hobe result ta


// details of the function 
// 1. input theke basa mane bomi er maan pawar jonno input field e ekta id nilam
// 2. tarpor ekta value or input dilam
// 3. function er moddy sei id ta k pawar jonno getElementbyid use korchi jeno tar input data gulo k accec korte pari
// 4.and input er data gulo pawar jonno value use korchi 
// 5.tarpor input  data gulo string hisabe thakar jonno string theke number e convert korchi perseFloat use kore jeheto eit ekta calcultor hisabe kaj korbe
function calculateTriangle(){
   const dataCollect = document.getElementById('input-data');
   const calcul = dataCollect.value;
//    console.log(calcul)
//    jeheto input theke data nicche sei jonno eita jekono type er data hote pare seijonno function ei tak string hisabe dore nive
// seijonno data gula k number e convert korte hobe dosmik wala number o input thakte pare jeheto calcultor eita
// seijonno perseFloat er moddy convert korte hobe input data gulo k 
const baseData = parseFloat(calcul);

console.log(baseData)
   

//  same vave second input er data gulo k pawar jonno same kaj ei korte pari

const triangleHeight = document.getElementById('input-height');
const inputValue = triangleHeight.value;
const heightData = parseFloat(inputValue);
console.log(heightData)

//  ekon sei input gulo k die triangel er result bahir korar formola use korbo
const area = 0.5 * baseData * heightData;
console.log('area of the triangle :' , area);

// ekon sei result ta show jeikane korabo seita function korbo

const resultShowPlace = document.getElementById('result-show');
// upor theke area ta use  mane holo aree er calculate result ta eikane show korabo
resultShowPlace.innerText = area;
}

// uporer moto same vave ayotokar er area bahir korbo

function rectangleCalcul(){
const rectangleBase = document.getElementById('rectangle-length');
const baseValue = rectangleBase.value;
const baseCal = parseFloat(baseValue);
console.log(baseCal);


const rectangleHeight = document.getElementById('rectangle-height');
const rectangleValue = rectangleHeight.value;
const heightCal = parseFloat(rectangleValue);
console.log(heightCal);

const areaCal = baseCal * heightCal;
console.log(areaCal);

const resultPlace = document.getElementById('result-here');
resultPlace.innerText = areaCal;
}