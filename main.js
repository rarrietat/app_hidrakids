const q1_o1 = document.querySelector("#q1_option1")
const q1_o2 = document.querySelector("#q1_option2")
const q1_o3 = document.querySelector("#q1_option3")
const q2_o1 = document.querySelector("#q2_option1")
const q2_o2 = document.querySelector("#q2_option2")
const q2_o3 = document.querySelector("#q2_option3")
const q3_o1 = document.querySelector("#q3_option1")
const q3_o2 = document.querySelector("#q3_option2")
const q3_o3 = document.querySelector("#q3_option3")
const q4_o1 = document.querySelector("#q4_option1")
const q4_o2 = document.querySelector("#q4_option2")
const q4_o3 = document.querySelector("#q4_option3")
const btnCalcular = document.querySelector("#btnCalcular")
const answer = document.querySelector("#answer")
let modal = ""

function answerNro1() {

    answer.classList.add("text-success")
    answer.classList.remove("text-warning")
    answer.classList.remove("text-danger")
    answer.innerText = "No presenta deshidratación 😀"
    modal.show()

}

function answerNro2() {

    answer.classList.remove("text-success")
    answer.classList.add("text-warning")
    answer.classList.remove("text-danger")
    answer.innerText = "Presenta algo de deshidratación 😯"
    modal.show()

}

function answerNro3() {

    answer.classList.remove("text-success")
    answer.classList.remove("text-warning")
    answer.classList.add("text-danger")
    answer.innerText = "Presenta deshidratación severa 😓"
    modal.show()

}

btnCalcular.addEventListener("click", async (e) => {

    const myModalEl = document.querySelector("#modal")
    modal = new mdb.Modal(myModalEl)

    if (q1_o1.checked && q2_o1.checked && q3_o1.checked && q4_o1.checked) answerNro1()
    else if (q1_o2.checked && q2_o2.checked && q3_o2.checked && q4_o2.checked) answerNro2()
    else if (q1_o3.checked && q2_o3.checked && q3_o3.checked && q4_o3.checked) answerNro3()
    else if ((q1_o1.checked || q2_o1.checked || q3_o1.checked || q4_o1.checked) && (q1_o2.checked || q2_o2.checked || q3_o2.checked || q4_o2.checked)) answerNro2()
    else if ((q1_o1.checked || q2_o1.checked || q3_o1.checked || q4_o1.checked) && (q1_o3.checked || q2_o3.checked || q3_o3.checked || q4_o3.checked)) answerNro3()
    else if ((q1_o2.checked || q2_o2.checked || q3_o2.checked || q4_o2.checked) && (q1_o3.checked || q2_o3.checked || q3_o3.checked || q4_o3.checked)) answerNro3()
    else if ((q1_o1.checked || q2_o1.checked || q3_o1.checked || q4_o1.checked) && (q1_o2.checked || q2_o2.checked || q3_o2.checked || q4_o2.checked) && (q1_o3.checked || q2_o3.checked || q3_o3.checked || q4_o3.checked)) answerNro3()
    else {
        answer.innerText = "Falta seleccionar algún sintoma"
        modal.show()
    }
    
})