//------------------------
//     BarraNav
//------------------------

let bodyTag = document.querySelector("body")
let navTag = document.getElementById("nav")
let menu = document.getElementById('hide')


let scroll = () => {
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 100)
}

addEventListener('scroll', () => {
    navTag.style.setProperty("background", scroll() > 10 ? "rgb(97, 163, 175)": "transparent" )
    menu.style.setProperty("background", scroll() > 10 ? "rgb(153, 218, 230)" : "#fff")  
})

//------------------------
//      Menu Hamb
//------------------------

let hamTag = document.getElementById("menu")

addEventListener('scroll', () => {
    hamTag.style.setProperty("background", scroll() > 10 ? "rgb(97, 163, 175)": "transparent" ) 
})


//------------------------
//      ScrollUp
//------------------------

document.getElementById('btn_up').addEventListener('click', scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
       /*  window.mozRequestAnimationFrame(callback); *///Mozilla
        window.webkitRequestAnimationFrame(()=>{scrollUp}); 
        window.scrollTo (0, 0);
    }
}

buttonUp = document.getElementById("btn_up");

window.onscroll = function() {
    let scroll = document.documentElement.scrollTop;
    if(scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }
}

//------------------------
//      Menu resp
//------------------------

let btn = document.getElementById("btn_menu")
btn.addEventListener("click", () => {
    let menu = document.getElementById("hide")
    menu.classList.toggle("show")
})

let linkSkill = document.getElementById('skil')
let linkProject = document.getElementById('proj')
let linkContact = document.getElementById('cont')

let links = [linkSkill,linkProject,linkContact]

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.stopPropagation()
        btn.click()
    })
})

//------------------------
//      DescargaCv
//------------------------

let a = document.createElement("a")

document.querySelector('#btn_cv').addEventListener('click', (e) => {
    e.preventDefault()
    ajax("download/file.pdf")
})

function ajax(url) {
    let xhr = new XMLHttpRequest()
    xhr.responseType = "blob"
    xhr.open("get",url)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200){
            let url = URL.createObjectURL(xhr.response)
            a.href = url
            a.download = "CV RodrigoPérez.pdf"
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
        }
    })
    xhr.send()
}

//------------------------
//      FORMULARIO
//------------------------

/* let input_n = document.getElementById('name')
let input_e = document.getElementById('email')
let warnings = document.getElementById('warnings')

let form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let name = e.target.elements.name.value;
    let email = e.target.elements.email.value;
    let cond_nombre = /^[A-Z][a-z]{2,14}$/;
    let cond_email = /^\w+@(gmail|hotmail)\.\w{2,3}$/;

    if(cond_nombre.test(name) == true){
        console.log('Campo correcto',name)
    }
    else{
        console.log('Campo incorrecto',name)
        input_n.classList.replace('Form__field','Form__fieldx')
        warnings.classList.replace('warnings-off','warnings')
    }
    if(cond_email.test(email) == true){
        console.log('Campo correcto',email)
    }
    else{
        console.log('Campo incorrecto',email)
        input_e.classList.replace('Form__field','Form__fieldx')
        warnings.classList.replace('warnings-off','warnings')
    }
    if(cond_nombre.test(name) == true && cond_email.test(email) == true){
        input_n.classList.replace('Form__fieldx','Form__field')
        input_e.classList.replace('Form__fieldx','Form__field')
        warnings.classList.replace('warnings','warnings-off')
    }
    form.reset()
})
 */