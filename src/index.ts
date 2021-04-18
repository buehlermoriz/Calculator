import { add, mult, dev, sub, addInput, c, ce, solve } from "./calcmode";
import { buttonList, buttonAdd, buttonC, buttonCE, buttonDev, buttonEquals, buttonMult, buttonSub, changeMode, task, selectOpperators, scoreboard1, scoreboard2} from "./dom-utils";
import {checkResult, Taskmanager } from "./taskmode";

for(let button of buttonList){
  let i:string = buttonList.indexOf(button).toString();
  button.addEventListener("click", function(){addInput(i)});
}
//buttonComma.addEventListener("click", function(){addInput(",")});

//CALCMODE

buttonAdd.addEventListener("click", function(){add()});
buttonMult.addEventListener("click", function(){mult()});
buttonDev.addEventListener("click", function(){dev()});
buttonSub.addEventListener("click", function(){sub()});
buttonEquals.addEventListener("click", function(){solve()});

//loeschen
buttonC.addEventListener("click", function(){c()});
buttonCE.addEventListener("click", function(){ce()});



//TASKMODE
changeMode.addEventListener('change', ()=>{

  
  if (changeMode.checked=== true){


  buttonAdd.style.backgroundColor="rgba(218, 223, 225, 0.8)";
  buttonSub.style.backgroundColor="rgba(218, 223, 225, 0.8)";
  buttonMult.style.backgroundColor="rgba(218, 223, 225, 0.8)";
  buttonDev.style.backgroundColor="rgba(218, 223, 225, 0.8)";
  buttonEquals.innerHTML = "&#10003";
  task.style.display = "block";
  scoreboard1.style.display = "block";
  scoreboard2.style.display = "block";
  selectOpperators.style.display = "block";
  buttonEquals.addEventListener("click", function(){checkResult()});
  Taskmanager();

}
else{
  buttonAdd.style.backgroundColor="rgba(80,80,80,0.1)";
  buttonMult.style.backgroundColor="rgba(80,80,80,0.1)";
  buttonDev.style.backgroundColor="rgba(80,80,80,0.1)";
  buttonSub.style.backgroundColor="rgba(80,80,80,0.1)";
  buttonEquals.innerHTML = "=";
  task.style.display = "none";
  scoreboard1.style.display = "none";
  scoreboard2.style.display = "none";
  selectOpperators.style.display = "none";
}
});

//choose Opperators
