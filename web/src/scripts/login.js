const divError = document.querySelector('.error')
const divAlert = document.querySelector('.alert')

document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault();


    const inputLogin = document.querySelector('#login')
    const inputSenha = document.querySelector('#passwordInput')

    if (inputLogin.value === '' || inputSenha.value === '') {
        
        divError.style.display = 'none'
        divAlert.style.display = 'none'
        setTimeout(() => {
            divAlert.style.display = 'block'
        }, 50)


    } else {
        const login = event.target[0].value
        const senha = event.target[1].value

        axios.post('http://localhost:2301/login', {
            "login": `${login}`,
            "senha": `${senha}`
        })
            .then((response) => {
                const data = Object.entries(response.data).length

                if (data > 0) {
                    window.location.replace('./src/Pages/HomePage');

                    sessionStorage.setItem('token', `${response.data.token}`)
                } else {
                    
                    divAlert.style.display = 'none'
                    divError.style.display = 'none'
                    setTimeout(() => {
                        divError.style.display = 'block'
                    }, 50)
                }
            })
    }

})

