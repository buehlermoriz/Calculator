import { add, mult, dev, sub, addInput, c, ce, solve } from "./calcmode";
import { buttonGrey, buttonNormal } from "./colors";
import {
  buttonList,
  buttonAdd,
  buttonC,
  buttonCE,
  buttonDev,
  buttonEquals,
  buttonMult,
  buttonSub,
  changeMode,
  task,
  selectOpperators,
  scoreboard1,
  scoreboard2,
  maxFigures,
} from "./dom-utils";

import { checkResult, Taskmanager } from "./taskmode";

for (let button of buttonList) {
  let buttonIndex: string = buttonList.indexOf(button).toString();
  button.addEventListener("click", function () {
    addInput(buttonIndex);
  });
}

//CALCMODE

buttonAdd.addEventListener("click", function () {
  add();
});
buttonMult.addEventListener("click", function () {
  mult();
});
buttonDev.addEventListener("click", function () {
  dev();
});
buttonSub.addEventListener("click", function () {
  sub();
});
buttonEquals.addEventListener("click", function () {
  equalButtonPressed();
});

//loeschen
buttonC.addEventListener("click", function () {
  c();
});
buttonCE.addEventListener("click", function () {
  ce();
});

//TASKMODE
changeMode.addEventListener("change", () => {
  if (changeMode.checked) {
    taskstyle();
    ce();
    Taskmanager();
  } else {
    calcstyle();
  }
});
export function equalButtonPressed() {
  if (changeMode.checked) {
    checkResult();
  } else {
    solve();
  }
}
function calcstyle() {
  buttonAdd.style.backgroundColor = buttonGrey;
  buttonMult.style.backgroundColor = buttonGrey;
  buttonDev.style.backgroundColor = buttonGrey;
  buttonSub.style.backgroundColor = buttonGrey;
  buttonEquals.innerHTML = "=";
  task.style.display = "none";
  scoreboard1.style.display = "none";
  scoreboard2.style.display = "none";
  selectOpperators.style.display = "none";
  maxFigures.style.display = "none";
}
function taskstyle() {
  buttonAdd.style.backgroundColor = buttonNormal;
  buttonSub.style.backgroundColor = buttonNormal;
  buttonMult.style.backgroundColor = buttonNormal;
  buttonDev.style.backgroundColor = buttonNormal;
  buttonEquals.innerHTML = "&#10003";
  task.style.display = "block";
  scoreboard1.style.display = "block";
  scoreboard2.style.display = "block";
  selectOpperators.style.display = "block";
  maxFigures.style.display = "block";
}
