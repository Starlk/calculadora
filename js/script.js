const screen = document.getElementById("numerosTEXT");
const keyboard = document.getElementById("teclado");

const OperCache = []
const numCache = []

const addNumCache = (num) =>{
    numCache.push(num)
    screen.value =""
}
const addOperCache =(commad) =>{
    OperCache.push(commad)
    return OperCache;
}

const deleteNumber = (nums) => {
    let arrayNum = Array.from(nums)
    arrayNum.pop()
    return arrayNum
}

const retunNumber =()=> numCache.pop()

const CalOperaciones = () =>{
    let command = OperCache.pop()
    switch (command) {
        case "+":
            let num = parseFloat(screen.value) + parseFloat(retunNumber());
            return  num;
        case "-":
            return retunNumber() - screen.value
        case "x":
            return retunNumber() * screen.value
        case "/":
            return retunNumber() / screen.value
    }

}



function comandos(name){
    switch (name) {
        case "+":
        case "x":
        case "-":
        case "/":                
            addNumCache(screen.value)
            addOperCache(name)
            break;
        case "del":
             screen.value = deleteNumber(screen.value).join("")
            break;
        case "reset":
            screen.value =""
            break;
        case "=":
   
            screen.value = CalOperaciones()
            break;
        default:
            screen.value += name
            break;
    }

}
keyboard.addEventListener("click",(e)=>{
    if(e.target.tagName==="BUTTON"){
        comandos(e.target.value)
    }

})


const ChangeThem = (thema) =>{
    switch(thema){
        case "1":
            document.body.classList.remove("thema-2","thema-3")
            document.body.classList.add("thema-1")
            break;
        case "2":
            document.body.classList.remove("thema-1","thema-3")
            document.body.classList.add("thema-2")
            break;
        case "3":
            document.body.classList.remove("thema-1","thema-2")
            document.body.classList.add("thema-3")
            break;
    }
}
const themas = document.getElementById("themes")

themas.addEventListener("click",(e)=>{
    if(e.target.tagName=="LABEL"){
        ChangeThem(e.target.textContent)
    }
})