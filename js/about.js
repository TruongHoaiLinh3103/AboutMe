let Introduceyourself = document.getElementById("Introduceyourself")
let Careergoals = document.getElementById("Careergoals")
let Personalproject = document.getElementById("Personalproject")
let Workexperience = document.getElementById("Workexperience")
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
}