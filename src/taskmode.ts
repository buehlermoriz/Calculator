import { c, numberOne } from "./calcmode";
import {
  buttonEquals,
  maxValues,
  scoreboard1,
  scoreboard2,
  selectAdd,
  selectDiv,
  selectMult,
  selectSub,
  task,
} from "./dom-utils";

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//VARIABLES
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let RndNumberOne: number;
let RndNumberTwo: number;
let resultTask: number;
export var activeOperator: Array<string> = [];
var operator: string;
let scoreRight: number = 0;
let scoreWrong: number = 0;

export function Taskmanager() {
  generateVariables();
  generateTask();
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//GENERATE TASK
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function generateVariables() {
  operator = activeOperator[Math.floor(Math.random() * activeOperator.length)];

  RndNumberOne = Math.floor(Math.random() * maxValues.valueAsNumber);
  RndNumberTwo = Math.floor(Math.random() * maxValues.valueAsNumber);
}

function generateTask() {
  switch (operator) {
    case "add":
      resultTask = RndNumberOne + RndNumberTwo;
      displayTask(RndNumberOne.toString() + "+" + RndNumberTwo.toString());
      break;
    case "sub":
      resultTask = RndNumberOne - RndNumberTwo;
      if (resultTask < 0) {
        Taskmanager();
      } else {
        displayTask(RndNumberOne.toString() + "-" + RndNumberTwo.toString());
      }
      break;
    case "mult":
      resultTask = RndNumberOne * RndNumberTwo;
      displayTask(RndNumberOne.toString() + "*" + RndNumberTwo.toString());
      break;
    case "dev":
      resultTask = RndNumberOne / RndNumberTwo;

      displayTask(RndNumberOne.toString() + "/" + RndNumberTwo.toString());
      break;
    default:
      break;
  }
}
export function checkResult() {
  if (resultTask === numberOne) {
    scoreRight = scoreRight + 1;
    displayScore();
    Taskmanager();
    c();
    buttonColor("green");
  } else {
    scoreWrong = scoreWrong + 1;
    displayScore();
    c();
    buttonColor("red");
  }
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//CHOOSE CALCTYPE
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//add
selectAdd.addEventListener("change", () => {
  if (selectAdd.checked) {
    activeOperator.push("add");
    Taskmanager();
  }
  if (selectAdd.checked) {
    activeOperator.splice(activeOperator.indexOf("add"));
    Taskmanager();
  }
});
//sub
selectSub.addEventListener("change", () => {
  if (selectSub.checked == true) {
    activeOperator.push("sub");
    Taskmanager();
  }
  if (selectSub.checked == false) {
    activeOperator.splice(activeOperator.indexOf("sub"));
    Taskmanager();
  }
});
//mult
selectMult.addEventListener("change", () => {
  if (selectMult.checked == true) {
    activeOperator.push("mult");
    Taskmanager();
  }
  if (selectMult.checked == false) {
    activeOperator.splice(activeOperator.indexOf("mult"));
    Taskmanager();
  }
});
//dev
selectDiv.addEventListener("change", () => {
  if (selectDiv.checked == true) {
    activeOperator.push("dev");
    Taskmanager();
  }
  if (selectDiv.checked == false) {
    activeOperator.splice(activeOperator.indexOf("dev"));
    Taskmanager();
  }
});
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//OTHER FUNCTIONS
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function displayTask(input: string) {
  task.innerHTML = input.toString();
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //REMOVE BEVOR USE
  console.log("Result: " + resultTask);
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
function displayScore() {
  scoreboard1.innerHTML = "richtige Antworten: " + scoreRight;
  scoreboard2.innerHTML = "falsche Antworten: " + scoreWrong;
}

function buttonColor(color: string) {
  buttonEquals.style.backgroundColor = color;
  setTimeout(function () {
    buttonEquals.style.backgroundColor = "rgba(80,80,80,0.1)";
  }, 700);
}

/*function showArray (){
            console.error("array:");
            
            for(var i = 0; i < activeOpperator.length ; i++){
              console.log(activeOpperator[i])
          }};
          */
