import { button1, button2, button3 } from "./dom-utils";


let Array_input :number [] = [];
let slotOne :String ="";
let slotTow: String ="";
let changeActiveSlot: boolean = true;

button1.addEventListener("click", function(){addInput("1")});
button2.addEventListener("click", function(){addInput("2")});
button3.addEventListener("click", function(){addInput("3")});

function addInput(input: string){
if(changeActiveSlot===true){
    slotOne = slotOne + input;
    console.log(slotOne)
  }
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