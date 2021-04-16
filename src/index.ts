//Import aus Dom-utils PROBLEM 02
//DOM utils numPad
const button1 = document.getElementById("button-1")! as HTMLInputElement
const button2 = document.getElementById("button-2")! as HTMLInputElement
const button3 = document.getElementById("button-3")! as HTMLInputElement
const button4 = document.getElementById("button-4")! as HTMLInputElement
const button5 = document.getElementById("button-5")! as HTMLInputElement
const button6 = document.getElementById("button-6")! as HTMLInputElement
const button7 = document.getElementById("button-7")! as HTMLInputElement
const button8 = document.getElementById("button-8")! as HTMLInputElement
const button9= document.getElementById("button-9")! as HTMLInputElement
const button0= document.getElementById("button-0")! as HTMLInputElement
const buttonComma= document.getElementById("button,")! as HTMLInputElement

//DOM utils calc
const buttonAdd= document.getElementById("button+")! as HTMLInputElement
const buttonSub= document.getElementById("button-")! as HTMLInputElement
const buttonMult= document.getElementById("buttonX")! as HTMLInputElement
const buttonDev= document.getElementById("button/")! as HTMLInputElement

const buttonC= document.getElementById("buttonC")! as HTMLInputElement
const buttonCE= document.getElementById("buttonCE")! as HTMLInputElement

const buttonEquals= document.getElementById("button=")! as HTMLInputElement

//DOM utils Tasks
const task= document.getElementById("task")! as HTMLInputElement
const scoreboard= document.getElementById("scoreboard")! as HTMLInputElement

//DOM utils Display
const display= document.getElementById("display") ! as HTMLInputElement

//Eventlistener
//numPad
button1.addEventListener("click", function(){addInput("1")});
button2.addEventListener("click", function(){addInput("2")});
button3.addEventListener("click", function(){addInput("3")});
button4.addEventListener("click", function(){addInput("4")});
button5.addEventListener("click", function(){addInput("5")});
button6.addEventListener("click", function(){addInput("6")});
button7.addEventListener("click", function(){addInput("7")});
button8.addEventListener("click", function(){addInput("8")});
button9.addEventListener("click", function(){addInput("9")});
button0.addEventListener("click", function(){addInput("0")});
//buttonComma.addEventListener("click", function(){addInput(",")});

//calc
buttonAdd.addEventListener("click", function(){add()});
buttonMult.addEventListener("click", function(){mult()});
buttonDev.addEventListener("click", function(){dev()});
buttonSub.addEventListener("click", function(){sub()});
buttonEquals.addEventListener("click", function(){solve()});

//loeschen
buttonC.addEventListener("click", function(){c()});
buttonCE.addEventListener("click", function(){ce()});

//Variablen
let slotOne :string ="";
let slotTow: string ="";
let numberOne: number; 
let numberTwo: number;
let result: number;
let changeActiveSlot: boolean = true;
let activeCalcType: string; 
//Zusammenfassung Eventlistener 0-9 PROBLEM 01
/*for(let i = 0; i<10; i++){
button[i].addEventListener("click", function(){addInput(i)})
}*/

function changeStringToInt (){
  if(changeActiveSlot===true){
    numberOne = parseInt(slotOne);
  }
  else{
    numberTwo = parseInt(slotTow);
  }
}
function changeSlot (){
  if(changeActiveSlot === true){
    changeActiveSlot = false
  }
  else{
    changeActiveSlot = true
  }
}
function addInput(input: string){
if(changeActiveSlot===true){
    slotOne = slotOne + input;
    changeStringToInt();
    changeDisplay(numberOne);
  //  console.log("add Slot 1")
  }
  else{
    slotTow = slotTow + input;
   changeStringToInt();
    changeDisplay(numberTwo);
   // console.log("add Slot 2")
  }
}
//Rechenarten
function add (){
  //Test ob beide Faelder eine Zahl besitzen
    if( slotOne===""|| slotTow===""){
      console.log("input fehlt")
      changeSlot();
      activeCalcType="+";
    }
    else{
      result = numberOne + numberTwo;
      numberTwo = result;
      changeActiveSlot = true;
      c();
      changeDisplay(result);
    }
  }
function sub (){
//Test ob beide Faelder eine Zahl besitzen
  if( slotOne===""|| slotTow===""){
    console.log("input fehlt")
    changeSlot();
    activeCalcType="-";
  }
  else{
    result = numberOne - numberTwo;
    numberTwo = result;
    changeActiveSlot = true;
    c();
    changeDisplay(result);
  }
}
function mult (){
//Test ob beide Faelder eine Zahl besitzen
  if( slotOne===""|| slotTow===""){
    console.log("input fehlt")
    changeSlot();
    activeCalcType="*";
  }
  else{
    result = numberOne * numberTwo;
    numberTwo = result;
    changeActiveSlot = true;
    c();
    changeDisplay(result);
  }
}
  function dev (){
//Test ob beide Faelder eine Zahl besitzen
  if( slotOne===""|| slotTow===""){
    console.log("input fehlt")
    changeSlot();
    activeCalcType="/";
  }
  else{
    result = numberOne / numberTwo;
    numberTwo = result;
    changeActiveSlot = true;
    c();
    changeDisplay(result);
  }
}
    
//Anzeige
 function changeDisplay (input: number){
   display.innerHTML = input.toString();
 }
// Gleich
function solve(){
switch(activeCalcType){
  case "+":
    add();
    break;
  case "-":
    sub();
    break;
  case "*":
    mult();
    break;
  case "/":
    dev();
    break;
  default:
    console.error("keine Rechenart gefunden");
}

}
//Loeschen
function c (){
  if (changeActiveSlot==true){
    slotOne="0";
    changeStringToInt();
    changeDisplay(numberOne);

  }
  else{
    slotTow="0";
    changeStringToInt();
    changeDisplay(numberTwo);
  }
}
function ce(){
  slotOne="0";
  slotTow="0";
  changeStringToInt();
  changeSlot();
  changeStringToInt();
  changeSlot();
  changeDisplay(numberOne);
   
}