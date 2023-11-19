let Introduceyourself = document.getElementById("Introduceyourself")
let Careergoals = document.getElementById("Careergoals")
let Personalproject = document.getElementById("Personalproject")
let Workexperience = document.getElementById("Workexperience")
let InYou = document.querySelector(".InYou")
let CaGo = document.querySelector(".CaGo")
let PePro = document.querySelector(".PePro")
let WoEx = document.querySelector(".WoEx")
const checkIntroduceyourself = () => {
    Object.assign(Introduceyourself.style, {
        display: "block"
    });
    Object.assign(Careergoals.style, {
        display: "none"
    });
    Object.assign(Personalproject.style, {
        display: "none"
    });
    Object.assign(Workexperience.style, {
        display: "none"
    });
    InYou.classList.remove("active")
    CaGo.classList.add("active")
    PePro.classList.add("active")
    WoEx.classList.add("active")
}
const checkCareergoals = () => {
    Object.assign(Introduceyourself.style, {
        display: "none"
    });
    Object.assign(Careergoals.style, {
        display: "block"
    });
    Object.assign(Personalproject.style, {
        display: "none"
    });
    Object.assign(Workexperience.style, {
        display: "none"
    });
    InYou.classList.add("active")
    CaGo.classList.remove("active")
    PePro.classList.add("active")
    WoEx.classList.add("active")
}
const checkPersonalproject = () => {
    Object.assign(Introduceyourself.style, {
        display: "none"
    });
    Object.assign(Careergoals.style, {
        display: "none"
    });
    Object.assign(Personalproject.style, {
        display: "block"
    });
    Object.assign(Workexperience.style, {
        display: "none"
    });
    InYou.classList.add("active")
    CaGo.classList.add("active")
    PePro.classList.remove("active")
    WoEx.classList.add("active")
}
const checkWorkexperience = () => {
    Object.assign(Introduceyourself.style, {
        display: "none"
    });
    Object.assign(Careergoals.style, {
        display: "none"
    });
    Object.assign(Personalproject.style, {
        display: "none"
    });
    Object.assign(Workexperience.style, {
        display: "block"
    });
    InYou.classList.add("active")
    CaGo.classList.add("active")
    PePro.classList.add("active")
    WoEx.classList.remove("active")
}
