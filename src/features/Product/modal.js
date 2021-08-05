import './modal.module.css'
let calc;
let modal;
let Ok;
let Cancel;

const body = document.querySelector("html");

const createCalc = () => {

calc = document.createElement("div");
calc.classList.add("bg-dark")



}

const CreateModal = (question) => {

modal = document.createElement("div");

modal.innerText = `${question}`

 Cancel = document.createElement("button")
Cancel.innerText = "Cancel";

 Ok = document.createElement("button");
Ok.innerText="OK"

modal.append(Cancel,Ok)

}


export function display(question) {
    console.log(body);
CreateModal(question)
createCalc();

calc.append(modal)
body.append(calc)

return new Promise ((resolve,reject)=>{

    calc.addEventListener("click", ()=>{

        resolve(false)
        calc.remove()
    
    })
    

    Cancel.addEventListener("click",e=> {

resolve(false)
calc.remove()

    })

    Ok.addEventListener("click",e=>{

        console.log("ok");
        resolve(true)
        calc.remove()
    })

})

}