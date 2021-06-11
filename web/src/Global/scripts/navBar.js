const ulElement = document.querySelector('#classes')

const classes = []

document.querySelector('#exit').addEventListener('click', () => {
    localStorage.clear()
    sessionStorage.clear()
})

const token = sessionStorage.getItem('token')

axios.get('http://localhost:2301/teacher', {
    headers: { 'Authorization': `Bearer ${token}` }
})
    .then((response) => {
        const id_func = response.data.user
        getClasses(id_func)
    })


const getClasses = (id) => {

    axios.get(`http://localhost:2301/selectClass/${id}`)
        .then(response => {
            const data = response.data

            for (let i = 0; i < data.length; i++) {

                classes.push({
                    id: data[i].id_turma,
                    name: data[i].nomeclatura,
                    subject: {
                        id: data[i].id,
                        acronym: data[i].sigla,
                        name: data[i].nome
                    }
                })
                verifyClasses(i)
            }

            const aElement = document.getElementsByClassName('sweet')
            for (let i = 0; i < aElement.length; i++) {
                aElement[i].addEventListener("click", () => {
                    
                    sessionStorage.removeItem('class_id')
                    sessionStorage.setItem('class_id', `${aElement[i].getAttribute('value-class')}`)

                    sessionStorage.removeItem('subject_id')
                    sessionStorage.setItem('subject_id', `${aElement[i].getAttribute('value-subject')}`)

                    window.location.assign('../Notes/')
                }) 
            }            
        })
}


const verifyClasses = (i) => {

    if (i > 0) {
        if (classes[i].name === classes[i - 1].name) {
            createSubjects(i)
        }else{
            createClasses(i)
        }
    }else{
        createClasses(i)
    }
}

function createSubjects(i) {
    let ul = document.getElementById(`${classes[i].name}`)

    ul.innerHTML += `
    <li>
        <a href="#" class="sweet" value-class="${classes[i].id}" value-subject="${classes[i].subject.id}">${classes[i].subject.acronym}</a>    
    </li>`
}

function createClasses(i) {
    ulElement.innerHTML += `
        <li>
            <a href="#">${classes[i].name}</a>
            <ul id="${classes[i].name}">   
            </ul>
        </li>`
    
        createSubjects(i)
}


