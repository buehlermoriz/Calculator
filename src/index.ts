import { add, mult, dev, sub, addInput, c, ce, solve } from "./calcmode";
import { buttonList, buttonAdd, buttonC, buttonCE, buttonDev, buttonEquals, buttonMult, buttonSub, display } from "./dom-utils";

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