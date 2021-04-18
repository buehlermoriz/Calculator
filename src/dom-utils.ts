//DOM utils numPad
export const buttonList:Array<HTMLInputElement>=[
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
]
export const buttonComma= document.getElementById("button,")! as HTMLInputElement;

//DOM utils calc
export const buttonAdd= document.getElementById("button+")! as HTMLInputElement;
export const buttonSub= document.getElementById("button-")! as HTMLInputElement;
export const buttonMult= document.getElementById("buttonX")! as HTMLInputElement;
export const buttonDev= document.getElementById("button/")! as HTMLInputElement;

export const buttonC= document.getElementById("buttonC")! as HTMLInputElement;
export const buttonCE= document.getElementById("buttonCE")! as HTMLInputElement;

export const buttonEquals= document.getElementById("button=")! as HTMLInputElement;

//DOM utils Tasks
export const task= document.getElementById("task")! as HTMLInputElement;
export const scoreboard= document.getElementById("scoreboard")! as HTMLInputElement;

//DOM utils Display
export const display= document.getElementById("display") ! as HTMLInputElement;


//Taskmode

export const changeMode = document.getElementById("modeToggle")as HTMLInputElement;