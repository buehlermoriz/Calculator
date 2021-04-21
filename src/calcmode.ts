import { display } from "./dom-utils";
import { activeOpperator } from "./taskmode";



let slotOne :string ="";
let slotTow: string ="";
export let numberOne: number; 
export let numberTwo: number;
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
export function addInput(input: string){
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
export function add (){
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
  changeActiveSlot= true;
  slotOne=String(result);
  changeStringToInt();
  changeActiveSlot = false;
  c();
  changeDisplay(result);
}
  }
export function sub (){
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
export function mult (){
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
  changeActiveSlot= true;
  slotTow=String(result);
  changeStringToInt();
  changeActiveSlot = false;
  c();
  changeDisplay(result);
  }
}
export function dev (){
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
// Gleich
export function solve(){
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
  break;
}
}
//Loeschen
export function c (){
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
export function ce(){
  slotOne="";
  slotTow="";
  changeActiveSlot=true;
  changeStringToInt();
  changeSlot();
  changeStringToInt();
  changeSlot();
  changeDisplay(0);
}
/*
export function showSlots(){
  console.log("Slot1: "+ slotOne);
  console.log("Number1: "+ numberOne);
  console.log("Slot2: "+ slotTow);
  console.log("Number2: "+ numberTwo);
  console.log("result: "+ result);
}
*/