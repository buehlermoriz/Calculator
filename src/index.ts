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
buttonMult.addEventListener("click", function(){mult});
buttonDev.addEventListener("click", function(){dev});
buttonSub.addEventListener("click", function(){sub});


let slotOne :string ="";
let slotTow: string ="";
let numberOne: number;
let numberTwo: number;
let result: number;
let calc: any 
let changeActiveSlot: boolean = true;
//Zusammenfassung Eventlistener 0-9 PROBLEM 01
/*for(let i = 0; i<10; i++){
button[i].addEventListener("click", function(){addInput(i)})
}*/



function addInput(input: string){
if(changeActiveSlot===true){
    slotOne = slotOne + input;
    numberOne = parseInt(slotOne);
  }
  else{
    slotTow = slotTow + input;
    numberTwo = parseInt(slotTow);
  }
}
function add (){
  console.log("function add")
  console.log(numberOne)
  console.log(numberTwo)
 result = numberOne + numberTwo;
 console.log(result)
 if(changeActiveSlot === true){
   changeActiveSlot = false
 }
 else{
   changeActiveSlot = true
 }
}
function sub (){
  result = numberOne - numberTwo;
 }
 function mult (){
  result = numberOne * numberTwo;
 }
 function dev (){
  result = numberOne / numberTwo;
 }
//Input wird zu Array hinzugefügt
//function addInput (){
//Array_input.push(1)
//for(let i = 0; i<Array_input.length; i++){
//  console.log(Array_input[i])
//};
/*
button2.addEventListener("click", function () {
  Array_input.push(2)
  for(let i = 0; i<Array_input.length; i++){
    console.log(Array_input[i])
  }
  });
  
  button3.addEventListener("click", function () {
    Array_input.push(3)
    for(let i = 0; i<Array_input.length; i++){
      console.log(Array_input[i])
    }
    });
*/
  //}