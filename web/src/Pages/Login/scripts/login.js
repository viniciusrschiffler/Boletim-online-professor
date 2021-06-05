
const inputLogin = document.querySelector('#login')
const inputPassword = document.querySelector('#password')
const inputSubmit = document.querySelector('#submit')

function handleEmptyInput(input) {
    if (input.value === '') {
        input.style.borderColor = '#e74c3c'

        input.addEventListener('click', e => {
            input.style.borderColor = ''
        })

        return false
    }
}


function handleKeyUp(event) {
    let input = document.querySelector(`#${event.path[0].id}`)

    if (event.target.value !== '') {
        input.style.borderColor = "#2ecc71"
    } else {
        input.style.borderColor = ""
    }
}


inputLogin.addEventListener('keyup', handleKeyUp)
inputPassword.addEventListener('keyup', handleKeyUp)



inputSubmit.addEventListener('click', async e => {
    e.preventDefault()

    let inputLoginIsFull = handleEmptyInput(inputLogin)
    let inputPasswordIsFull = handleEmptyInput(inputPassword)

    if (inputLoginIsFull === false || inputPasswordIsFull === false) {
        console.log('Preencha os campos');

    } else {

        const response = await axios.post('http://localhost:2301/login', {
            "login": `${inputLogin.value}`,
            "senha": `${inputPassword.value}`
        })

        const data = Object.entries(response.data).length
        
        if (data > 0) {
            window.location.replace('./src/Pages/HomePage');

            sessionStorage.setItem('token', `${response.data.token}`)
        } else {
            inputLogin.style.borderColor = '#e74c3c'
            inputPassword.style.borderColor = '#e74c3c'
        }

    }
})





