import { numberOne } from "./calcmode";
import { scoreboard, task } from "./dom-utils";

let RndNumberOne: number; 
let RndNumberTwo: number;
let result: number;
var opperator: number;
let userResult: number;
let scoreRight: number = 0;
let scoreWrong: number = 0;

export function Taskmanager(){
    generateVariables();
    generateTask();
    checkResult();
}

function generateVariables (){
opperator =  Math.floor(Math.random()*3);
RndNumberOne = Math.floor(Math.random()*100);
RndNumberTwo = Math.floor(Math.random()*100);
}

function generateTask (){
switch (opperator){
    case  0:
       result = RndNumberOne + RndNumberTwo
       displayTask(RndNumberOne.toString() + "+" + RndNumberTwo.toString());
    break;
    case 1:
       result = RndNumberOne - RndNumberTwo
       displayTask(RndNumberOne.toString() + "-" + RndNumberTwo.toString());
    break;
    case 2:
       result = RndNumberOne * RndNumberTwo
       displayTask(RndNumberOne.toString() + "*" + RndNumberTwo.toString());
    break;
    case 3:
       result = RndNumberOne / RndNumberTwo
       displayTask(RndNumberOne.toString() + "/" + RndNumberTwo.toString());
    break;
    default:
        console.error("There is no Opperator available");
    break;
        
        
}
}
export function checkResult (){
if(result === numberOne){
scoreRight = scoreRight + 1;
displayScore();
Taskmanager();


}
else{
scoreWrong = scoreWrong + 1;
displayScore();
}
}
function displayTask (input: string){
    task.innerHTML = input.toString();
    console.log("Result: "+result);
    
}
function displayScore (){
    scoreboard.innerHTML = "richtige Antworten: " + scoreRight + " falsche Antworten: " + scoreWrong;
}
