import { addInput, ce, add, sub, mult, dev } from "./calcmode";
import { equalButtonPressed } from "./index";

//DOM utils numPad
export const buttonList: Array<HTMLInputElement> = [
  document.getElementById("button-0")! as HTMLInputElement,
  document.getElementById("button-1")! as HTMLInputElement,
  document.getElementById("button-2")! as HTMLInputElement,
  document.getElementById("button-3")! as HTMLInputElement,
  document.getElementById("button-4")! as HTMLInputElement,
  document.getElementById("button-5")! as HTMLInputElement,
  document.getElementById("button-6")! as HTMLInputElement,
  document.getElementById("button-7")! as HTMLInputElement,
  document.getElementById("button-8")! as HTMLInputElement,
  document.getElementById("button-9")! as HTMLInputElement,
];
export const buttonComma = document.getElementById(
  "button,"
)! as HTMLInputElement;

//DOM utils calc
export const buttonAdd = document.getElementById(
  "button+"
)! as HTMLInputElement;
export const buttonSub = document.getElementById(
  "button-"
)! as HTMLInputElement;
export const buttonMult = document.getElementById(
  "buttonX"
)! as HTMLInputElement;
export const buttonDev = document.getElementById(
  "button/"
)! as HTMLInputElement;

export const buttonC = document.getElementById("buttonC")! as HTMLInputElement;
export const buttonCE = document.getElementById(
  "buttonCE"
)! as HTMLInputElement;

export const buttonEquals = document.getElementById(
  "button="
)! as HTMLInputElement;

//DOM utils Tasks
export const task = document.getElementById("task")! as HTMLInputElement;
export const scoreboard1 = document.getElementById(
  "scoreboard1"
)! as HTMLInputElement;
export const scoreboard2 = document.getElementById(
  "scoreboard2"
)! as HTMLInputElement;
export const selectOpperators = document.getElementById(
  "selectOpperators"
)! as HTMLInputElement;
export const maxValues = document.getElementById(
  "maxValues"
)! as HTMLInputElement;
export const maxFigures = document.getElementById(
  "maxFigures"
)! as HTMLInputElement;

//DOM utils Display
export const display = document.getElementById("display")! as HTMLInputElement;

//Taskmode

export const changeMode = document.getElementById(
  "modeToggle"
) as HTMLInputElement;

//accepted Opperators
export const selectAdd = document.getElementById(
  "selectAdd"
) as HTMLInputElement;
export const selectSub = document.getElementById(
  "selectSub"
) as HTMLInputElement;
export const selectMult = document.getElementById(
  "selectMult"
) as HTMLInputElement;
export const selectDiv = document.getElementById(
  "selectDiv"
) as HTMLInputElement;

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    //Num Pad -------------------------------
    case "Digit0":
      addInput("0");
      break;
    case "Digit1":
      addInput("1");
      break;
    case "Digit2":
      addInput("2");
      break;
    case "Digit3":
      addInput("3");
      break;
    case "Digit4":
      addInput("4");
      break;
    case "Digit5":
      addInput("5");
      break;
    case "Digit6":
      addInput("6");
      break;
    case "Digit7":
      addInput("7");
      break;
    case "Digit8":
      addInput("8");
      break;
    case "Digit9":
      addInput("9");
      break;

    //others -------------------------------
    //enter
    case "Enter":
      equalButtonPressed();
      break;
    //ce
    case "KeyC":
      ce();
      break;
    //calc --------------------------------
    //add
    case "KeyQ":
      add();
      break;
    //sub
    case "KeyW":
      sub();
      break;
    //mult
    case "KeyE":
      mult();
      break;
    //dev
    case "KeyR":
      dev();
      break;
    default:
      console.error("Fehler bei Tasteneingabe");
      break;
  }
});
