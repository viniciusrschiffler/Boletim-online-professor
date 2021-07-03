const classesElement = document.querySelector('#classes')

// console.log(window.innerWidth);


// const navbar = document.querySelector('nav')
// const showSidebar = document.querySelector('#showSidebar')
// const sidebarDisplay = window.getComputedStyle(navbar)

// showSidebar.addEventListener('click', () => {
//     if (window.innerWidth < 850) {
//         navbar.style.display = sidebarDisplay.display == 'none' ? 'flex' : ''
//         showSidebar.style.display = 'none'
//     }
// })

// document.querySelector('#container').addEventListener('click', () => {
//     if (window.innerWidth < 850) {
//         navbar.style.display = sidebarDisplay.display == 'flex' ? 'none' : ''
//         showSidebar.style.display = 'flex'
//     }
// })



document.querySelector('#exit').addEventListener('click', () => {
    localStorage.clear()
    sessionStorage.clear()
})


const token = sessionStorage.getItem('token')


const startNavbar = async () => {
    const userResponse = await axios.get('http://localhost:2301/teacher', { headers: { 'Authorization': `Bearer ${token}` } })
    const user_id = userResponse.data.user

    const classesResponse = await axios.get('http://localhost:2301/getClassesAndSubjects', { headers: { "teacher_id": user_id } })
    const classes = classesResponse.data

    classes.forEach(clas => {

        classesElement.innerHTML += `
        <li>
            <a href="#" class="class">${clas.nomeclatura}</a>
            <ul id="${clas.nomeclatura}">

            </ul>
        </li>
        `

        let classElement = document.getElementById(`${clas.nomeclatura}`)

        clas.disciplinas.forEach(subj => {
            classElement.innerHTML += `
            <li>
                <a href="#" class="sweet" value-name="${subj.nome}" class-name="${clas.nomeclatura}" value-class="${clas.id_turma}" value-subject="${subj.id_disciplina}">${subj.sigla}</a>
            </li>`
        })
    });


    const aElement = document.getElementsByClassName('sweet')
    for (let i = 0; i < aElement.length; i++) {

        // console.log(aElement[i].innerHTML);
        aElement[i].addEventListener("click", () => {

            let value_class = aElement[i].getAttribute('value-class')
            let value_subject = aElement[i].getAttribute('value-subject')

            let value_name = aElement[i].getAttribute('value-name')
            let class_name = aElement[i].getAttribute('class-name')

            sessionStorage.removeItem('class_id')
            sessionStorage.setItem('class_id', `${value_class}`)

            sessionStorage.removeItem('subject_id')
            sessionStorage.setItem('subject_id', `${value_subject}`)

            sessionStorage.removeItem(`Subject_Name`)
            sessionStorage.setItem(`Subject_Name`, value_name)

            sessionStorage.removeItem(`Class_Name`)
            sessionStorage.setItem(`Class_Name`, class_name)



            window.location.assign('../Notes/')
        })
    }

}



startNavbar()