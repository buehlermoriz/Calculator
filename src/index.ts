import { buttonList, buttonAdd, buttonC, buttonCE, buttonDev, buttonEquals, buttonMult, buttonSub, display } from "./dom-utils";

function debug(){
  console.log("slot 1: " + slotOne);
  console.log("nummer 1: " + numberOne);
  console.log("slot 2: " + slotTow);
  console.log("nummer 2: " + numberTwo);
  console.log("ergebnis: " + result);
}
//Import aus Dom-utils PROBLEM 02
//Eventlistener
//numPad
for(let button of buttonList){
  let i:string = buttonList.indexOf(button).toString();
  button.addEventListener("click", function(){addInput(i)});
}
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
  }
  else{
    slotTow = slotTow + input;
   changeStringToInt();
    changeDisplay(numberTwo);
  }
}
//Rechenarten
function add (){
  //Test ob beide Faelder eine Zahl besitzen
if( slotOne===""){
  changeActiveSlot=true;
  activeCalcType="+";
}
else if(slotTow===""){
  changeActiveSlot=false;
  activeCalcType="+";
}
else{
  result = numberOne + numberTwo;
  changeActiveSlot= false;
  slotTow=String(result);
  changeStringToInt();
  changeActiveSlot = true;
  c();
  changeDisplay(result);
}
  }
function sub (){
    //Test ob beide Faelder eine Zahl besitzen
  if( slotOne===""){
    changeActiveSlot=true;
    activeCalcType="-";
  }
  else if(slotTow===""){
    changeActiveSlot=false;
    activeCalcType="-";
  }
  else{
    result = numberOne - numberTwo;
    changeActiveSlot= true;
    slotOne=String(result);
    changeStringToInt();
    changeActiveSlot = false;
    c();
    changeDisplay(result);
  }
}
function mult (){
  //Test ob beide Faelder eine Zahl besitzen
  if( slotOne===""){
    changeActiveSlot=true;
    activeCalcType="*";
  }
  else if(slotTow===""){
    changeActiveSlot=false;
    activeCalcType="*";
  }
  else{
    result = numberOne * numberTwo;
  changeActiveSlot= false;
  slotTow=String(result);
  changeStringToInt();
  changeActiveSlot = true;
  c();
  changeDisplay(result);
  }
}
function dev (){
  //Test ob beide Faelder eine Zahl besitzen
  if( slotOne===""){
    changeActiveSlot=true;
    activeCalcType="/";
  }
  else if(slotTow===""){
    changeActiveSlot=false;
    activeCalcType="/";
  }
  else{
  result = numberOne / numberTwo;
  changeActiveSlot= true;
  slotOne=String(result);
  changeStringToInt();
  changeActiveSlot = false;
  c();
  changeDisplay(result);
  }
}
//Anzeige
 function changeDisplay (input: number){
   display.innerHTML = input.toString();
 }
 function changeBtnColor (){
  
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
    slotOne="";
    changeStringToInt();
    changeDisplay(0);
  }
  else{
    slotTow="";
    changeStringToInt();
    changeDisplay(0);
  }
}
function ce(){
  slotOne="";
  slotTow="";
  changeStringToInt();
  changeSlot();
  changeStringToInt();
  changeSlot();
  changeDisplay(0);
   
}