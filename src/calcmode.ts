import { buttonGrey } from "./colors";
import { buttonAdd, display } from "./dom-utils";

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//VARIABLES
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let slotOne: string = "";
let slotTwo: string = "";
export let numberOne: number;
let numberTwo: number;
let result: number;
let changeActiveSlot: boolean = true;
let activeCalcType: string;

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//HANDLE INPUT
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function changeStringToInt() {
  if (changeActiveSlot === true) {
    numberOne = parseInt(slotOne);
  } else {
    numberTwo = parseInt(slotTwo);
  }
}
function changeSlot() {
  if (changeActiveSlot === true) {
    changeActiveSlot = false;
  } else {
    changeActiveSlot = true;
  }
}
export function addInput(input: string) {
  if (changeActiveSlot === true) {
    slotOne = slotOne + input;
    changeStringToInt();
    changeDisplay(numberOne);
  } else {
    slotTwo = slotTwo + input;
    changeStringToInt();
    changeDisplay(numberTwo);
  }
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//HERE HAPPENS THE MAGIC ~ AKA MATH
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export function add() {
  //Test ob beide Faelder eine Zahl besitzen
  if (slotOne === "") {
    changeActiveSlot = true;
    activeCalcType = "+";
  } else if (slotTwo === "") {
    changeActiveSlot = false;
    activeCalcType = "+";
  } else {
    result = numberOne + numberTwo;
    changeActiveSlot = true;
    slotOne = String(result);
    changeStringToInt();
    changeActiveSlot = false;
    c();
    changeDisplay(result);
  }
}
export function sub() {
  //Test ob beide Faelder eine Zahl besitzen
  if (slotOne === "") {
    changeActiveSlot = true;
    activeCalcType = "-";
  } else if (slotTwo === "") {
    changeActiveSlot = false;
    activeCalcType = "-";
  } else {
    result = numberOne - numberTwo;
    changeActiveSlot = true;
    slotOne = String(result);
    changeStringToInt();
    changeActiveSlot = false;
    c();
    changeDisplay(result);
  }
}
export function mult() {
  //Test ob beide Faelder eine Zahl besitzen
  if (slotOne === "") {
    changeActiveSlot = true;
    activeCalcType = "*";
  } else if (slotTwo === "") {
    changeActiveSlot = false;
    activeCalcType = "*";
  } else {
    result = numberOne * numberTwo;
    changeActiveSlot = true;
    slotTwo = String(result);
    changeStringToInt();
    changeActiveSlot = false;
    c();
    changeDisplay(result);
  }
}
export function dev() {
  //Test ob beide Faelder eine Zahl besitzen
  if (slotOne === "") {
    changeActiveSlot = true;
    activeCalcType = "/";
  } else if (slotTwo === "") {
    changeActiveSlot = false;
    activeCalcType = "/";
  } else {
    result = numberOne / numberTwo;
    changeActiveSlot = true;
    slotOne = String(result);
    changeStringToInt();
    changeActiveSlot = false;
    c();
    changeDisplay(result);
  }
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//OUTPUT
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Anzeige
function changeDisplay(input: number) {
  display.textContent = input.toString();
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//OTHER FUNCTIONS
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Gleich
export function solve() {
  switch (activeCalcType) {
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
export function c() {
  if (changeActiveSlot == true) {
    slotOne = "";
    changeStringToInt();
    changeDisplay(0);
  } else {
    slotTwo = "";
    changeStringToInt();
    changeDisplay(0);
  }
}
export function ce() {
  slotOne = "";
  slotTwo = "";
  changeActiveSlot = true;
  changeStringToInt();
  changeSlot();
  changeStringToInt();
  changeSlot();
  changeDisplay(0);
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//DEBUGGING FUNCTION
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*export function showSlots() {
  console.log("Slot1: " + slotOne);
  console.log("Number1: " + numberOne);
  console.log("Slot2: " + slotTwo);
  console.log("Number2: " + numberTwo);
  console.log("result: " + result);
}
*/
