import { c, numberOne } from "./calcmode";
import { buttonEquals, maxFigures, scoreboard1, scoreboard2, selectAdd, selectDiv, selectMult, selectSub, task } from "./dom-utils";

let RndNumberOne: number; 
let RndNumberTwo: number;
let result: number;
export var activeOpperator:Array<string>=[];
var opperator: string;
let scoreRight: number = 0;
let scoreWrong: number = 0;
//Problem: geht nicht als ersatz für die 100 bei rndNumberOne/Two
let maxFigure: number = parseInt(maxFigures.value)


export function Taskmanager(){
    generateVariables();
   generateTask();
}

function generateVariables (){
opperator = activeOpperator[Math.floor(Math.random() * activeOpperator.length)];

RndNumberOne = Math.floor(Math.random()*100);
RndNumberTwo = Math.floor(Math.random()*100);
}


function generateTask (){
switch (opperator){
    case "add" :
       result = RndNumberOne + RndNumberTwo
       displayTask(RndNumberOne.toString() + "+" + RndNumberTwo.toString());
    break;
    case "sub":
       result = RndNumberOne - RndNumberTwo
       displayTask(RndNumberOne.toString() + "-" + RndNumberTwo.toString());
    break;
    case "mult":
       result = RndNumberOne * RndNumberTwo
       displayTask(RndNumberOne.toString() + "*" + RndNumberTwo.toString());
    break;
    case "dev":
       result = RndNumberOne / RndNumberTwo
       displayTask(RndNumberOne.toString() + "/" + RndNumberTwo.toString());
    break;
    default:
    break;
        
        
}
}
export function checkResult (){
if(result === numberOne){
scoreRight = scoreRight + 1;
displayScore();
Taskmanager();
c();
changeEnterColor("green");


}
else{
scoreWrong = scoreWrong + 1;
displayScore();
c();
changeEnterColor("red");
}
}
function displayTask (input: string){
    task.innerHTML = input.toString();
    console.log("Result: "+result);
    
}
function displayScore (){
    scoreboard1.innerHTML = "richtige Antworten: " + scoreRight;
    scoreboard2.innerHTML ="falsche Antworten: " + scoreWrong;
}

function changeEnterColor(color:string){
buttonEquals.style.backgroundColor=color;
setTimeout(function(){buttonEquals.style.backgroundColor="rgba(80,80,80,0.1)";}, 700)
}

//add
selectAdd.addEventListener('change', () =>{ 
    if (selectAdd.checked == true){
      activeOpperator.push("add")
      Taskmanager();
    }
    if (selectAdd.checked == false){
      activeOpperator.splice(activeOpperator.indexOf("add"))
      Taskmanager();
    }
    });
    //sub
    selectSub.addEventListener('change', () =>{ 
      if (selectSub.checked == true){
        activeOpperator.push("sub")
        Taskmanager();
      }
      if (selectSub.checked == false){
        activeOpperator.splice(activeOpperator.indexOf("sub"))
        Taskmanager();
      }
      });
    //mult
      selectMult.addEventListener('change', () =>{ 
        if (selectMult.checked == true){
          activeOpperator.push("mult")
          Taskmanager();
        }
        if (selectMult.checked == false){
          activeOpperator.splice(activeOpperator.indexOf("mult"))
          Taskmanager();
        }
        });
    //dev
        selectDiv.addEventListener('change', () =>{ 
          if (selectDiv.checked == true){
            activeOpperator.push("dev")
            Taskmanager();
          }
          if (selectDiv.checked == false){
            activeOpperator.splice(activeOpperator.indexOf("dev"))
            Taskmanager();
          }
          });
    
          /*function showArray (){
            console.error("array:");
            
            for(var i = 0; i < activeOpperator.length ; i++){
              console.log(activeOpperator[i])
          }};
          */