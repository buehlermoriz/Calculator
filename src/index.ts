 const button1 = document.getElementById("button-1")! as HTMLInputElement
 const button2 = document.getElementById("button-2")! as HTMLInputElement
 const button3 = document.getElementById("button-3")! as HTMLInputElement

let Array_input :number [] = [];
button1.addEventListener("click", addInput);

//Input wird zu Array hinzugefügt
function addInput (){
Array_input.push(1)
for(let i = 0; i<Array_input.length; i++){
  console.log(Array_input[i])
};
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
  }