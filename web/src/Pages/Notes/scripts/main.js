async function start() {

	// Criando variavel para o objeto "table" do html
	const tableElement = document.querySelector('tbody#list')
	//Pegando id da turma
	const class_id = sessionStorage.getItem('class_id')
	const subject_id = sessionStorage.getItem('subject_id')


	//Rota para pegar nome do materia
	const subjectNameResponse = await axios.get(`http://localhost:2301/getSubjectName`, {
		headers: { 'subjectId': `${subject_id}` }
	})
	const NameOfSubjectPage = subjectNameResponse.data[0].nome

	//Criando variavel para os alunos
	const students = JSON.parse(localStorage.getItem(`${NameOfSubjectPage}`)) || []


	function removeSpaceOfName(name) {

		return name.replace(/ /g, "_")
	}

	function addStudent(data) {
		students.push({
			id: data.id_aluno,
			name: data.nome,
			grade1: data.nota_av1,
			freq1: data.freq1,
			grade2: data.nota_av2,
			freq2: data.freq2
		})
	}

	function createTable(data) {

		let nameWhithoutSpace = removeSpaceOfName(data.name)
		tableElement.innerHTML += `
			<tr>
				<th scope="row">${data.name}</th>
				<td><input id="${nameWhithoutSpace}Grade1" class="typeable" maxlength="2"  type="number" step="0.1" min="-1" max="10" value="${data.grade1}"  placeholder="Digite a Nota"        ></td>
				<td><input id="${nameWhithoutSpace}Freq1" class="typeable"  maxlength="3"  type="number" step="0.1" min="-1" max="100" value="${data.freq1}" placeholder="Digite a Frequência"  ></td>                
				<td><input id="${nameWhithoutSpace}Grade2" class="typeable" maxlength="2"  type="number" step="0.1" min="-1" max="10" value="${data.grade2}" placeholder="Digite a Nota"        ></td>
				<td><input id="${nameWhithoutSpace}Freq2" class="typeable"  maxlength="3"  type="number" step="0.1" min="-1" max="100" value="${data.freq2}" placeholder="Digite a Frequência"  ></td>
			</tr>`
	}





	document.querySelector('header').innerHTML += `<h1>${NameOfSubjectPage}</h1>`


	// Acessando a rota get para listar os alunos
	const studentsResponde = await axios.get(`http://localhost:2301/students/${class_id}/${subject_id}`)

	const studentsData = studentsResponde.data

	// Cirando linha na tabela para cada aluno

	// Se tiver notas no local storage nao utiliza a do banco de dados
	if (!localStorage.getItem(`${NameOfSubjectPage}`)) {
		studentsData.forEach(student => {
			addStudent(student)
		})
	}

	students.forEach(student => {
		createTable(student)
	})


	/****************** AUTO SAVE (Rascunho) ******************/

	let time = null

	function handleKeyUp(event) {

		clearInterval(time)
		localStorage.removeItem(`${NameOfSubjectPage}`)

		time = setTimeout(() => {
			updateStudentNotesInVariable(Number(students.length))

			localStorage.setItem(`${NameOfSubjectPage}`, JSON.stringify(students))
		}, 1000)
	}


	// console.log(document.querySelectorAll(".typeable"));
	document.querySelectorAll(".typeable").forEach(item => {
		item.addEventListener("keyup", handleKeyUp)
	})


	/****************************************** UPDATE NAS NOTAS **********************************/

	function updateStudentNotesInVariable(repeatTimes) {

		let inputs = document.querySelectorAll(".typeable")

		//Criando index para posição do array de alunos
		let studentsPosition = 0
		//Criando a posição para cada elemento retornado do formulario
		let grade1Position = 0
		let freq1Position = 1
		let grade2Position = 2
		let freq2Position = 3


		//Função para armazenar novos dados dos alunos em um objeto
		function updateStudentNotes() {

			students[studentsPosition].grade1 = Number(inputs[grade1Position].value)
			students[studentsPosition].freq1 = Number(inputs[freq1Position].value)
			students[studentsPosition].grade2 = Number(inputs[grade2Position].value)
			students[studentsPosition].freq2 = Number(inputs[freq2Position].value)

			studentsPosition++
			grade1Position += 4
			freq1Position += 4
			grade2Position += 4
			freq2Position += 4
		}

		for (let i = 0; i < repeatTimes; i++) {
			updateStudentNotes()
		}

	}


	//Adicionando um ouvidor de eventos no formulario
	document.querySelector('#form').addEventListener('submit', (event) => {
		//Usando a função "preventDefault()" para nao passar os dados pela URL 
		event.preventDefault();


		updateStudentNotesInVariable(Number(students.length))

		//Adicionado dados novos dos alunos no db

		students.forEach(student => {
			axios.put('http://localhost:2301/update', {
				"grade1": `${student.grade1}`,
				"freq1": `${student.freq1}`,
				"grade2": `${student.grade2}`,
				"freq2": `${student.freq2}`,
				"id": `${student.id}`,
				"subjectid": `${subject_id}`
			})
		})

		localStorage.removeItem(`${NameOfSubjectPage}`)

	})


}


start()