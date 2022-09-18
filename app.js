// initialize variables
const menu = document.getElementById('menu')
const hambuger = document.getElementById('hambuger')
const times = document.getElementById('times')


function showMenu() {
    menu.classList.toggle("hidden")
    hambuger.style.display = "none"
    times.style.display = "flex"
} 

function hideMenu() {
    menu.classList.toggle("hidden")
    times.style.display = "none"
    hambuger.style.display = "flex"
} 








// validate form
const username = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const subject = document.getElementById('subject')
const myForm = document.getElementById('my-form')

myForm.addEventListener('submit', (e) => {
    e.preventDefault()

    if (username.value === "" && email.value === "" && message.value === "") {
        (function setError() {
            let newError = "border-2 border-red-500 w-full py-3 pl-2 pr-3 mt-4 rounded-lg"

            username.classList = newError;
            email.classList = newError;
            message.classList = newError;
            subject.classList = newError;
            message.classList = newError;

        })()

        
    } else {
        alert('Mesage sent successfully')

    }

    myForm.reset()
})


//smtp email
// Email.send({
//     Host : "smtp.gmail.com",
//     Username : "Andrew Ochieng",
//     Password : "Martial@_1476",
//     To : 'andrewomosh44@gmail.com',
//     From : email.value,
//     Subject : subject.value,
//     Body : message.value
// }).then(
//   message => alert(message)
// );




// footer section
// update copyright year
const year = document.getElementById('year')

const newYear = new Date()
year.innerHTML = newYear.getFullYear()















