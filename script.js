let input = document.getElementById("display")
let input2 = document.getElementById("display2")

let string = "";
let string2 = "";
let stringdisplay = "";

let buttons = document.querySelectorAll(".btn")
let arr = Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == '='){
            input2.value = stringdisplay
            string = eval(string)
            stringdisplay = string
            input.value = stringdisplay
        }
        else if(e.target.innerHTML == "AC"){
            string = ""
            string2 = ""
            input.value = string
            stringdisplay = string
            input2.value = stringdisplay
        }
        else if(e.target.innerHTML== `<img src="divide.svg" alt="">`){
            stringdisplay = stringdisplay + "÷"
            string += "/"
            input.value = stringdisplay
        }
        else if(e.target.innerHTML== `<img class="multiply-svg" src="multiply.svg" alt="">`){
            stringdisplay = stringdisplay + "×"
            string += "*"
            input.value = stringdisplay
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1)
            stringdisplay = stringdisplay.substring(0, string.length)
            input.value = stringdisplay
        }
        else {
            string += e.target.innerHTML
            stringdisplay += e.target.innerHTML
            input.value = stringdisplay
        }
    })
})

document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.key=="1" || e.key=="2" || e.key=="3" || e.key=="4" || e.key=="5" || e.key=="6" || e.key=="7" || e.key=="8" || e.key=="9" || e.key=="9" || e.key=="0" || e.key=="-" || e.key=="+" || e.key=="%"){
        string += e.key
        stringdisplay += e.key
        input.value = stringdisplay
    }
    else if(e.key=="*"){
        stringdisplay = stringdisplay + "×"
        string += "*"
        input.value = stringdisplay
    }
    else if(e.key=="/"){
        stringdisplay = stringdisplay + "÷"
        string += "/"
        input.value = stringdisplay
    }
    else if (e.code=="Enter" || e.code=="NumpadEnter"){
        // input2.value = stringdisplay
        // string = eval(string)
        // input.value = string

        input2.value = stringdisplay
        string = eval(string)
        stringdisplay = string
        input.value = stringdisplay

    }
    else if(e.code=="Backspace"){
        string = string.substring(0, string.length-1)
        stringdisplay = stringdisplay.substring(0, stringdisplay.length-1)
        input.value = stringdisplay
    }
    else if(e.code=="Escape"){
        string = ""
        string2 = ""
        input.value = string
        stringdisplay = string
        input2.value = stringdisplay
    }
})

let shadow = document.querySelectorAll(".boxShadow")
let array = Array.from(shadow)
array.forEach(box=>{
    box.addEventListener("click", e=>{
        box.classList.toggle("boxShadow")
        setTimeout(() => {
            box.classList.toggle("boxShadow")
        }, 100);
    })
})

document.querySelector(".divide").innerHTML.hidden = true