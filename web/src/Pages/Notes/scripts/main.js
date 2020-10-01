//Criando variavel para os alunos
const students = []
// Criando variavel para o objeto "table" do html
const tableElement = document.querySelector('tbody#list')
//Pegando id da turma
const class_id = sessionStorage.getItem('class_id')
const subject_id = sessionStorage.getItem('subject_id')

function removeSpaceOfName(data, index) {

	data[index].nome.replace(/ /g, "_")
}

function addStudent(data, index) {
	students.push({
		id: data[index].id_aluno,
		grade1: data[index].nota_av1,
		freq1: data[index].freq1,
		grade2: data[index].nota_av2,
		freq2: data[index].freq2
	})
}

function setInputValue(data, index) {

	let nameWhithoutSpace = removeSpaceOfName(data, index)

	document.querySelector(`input#${nameWhithoutSpace}Grade1`).value = `${data[index].nota_av1}`
	document.querySelector(`input#${nameWhithoutSpace}Freq1`).value = `${data[index].freq1}`
	document.querySelector(`input#${nameWhithoutSpace}Grade2`).value = `${data[index].nota_av2}`
	document.querySelector(`input#${nameWhithoutSpace}Freq2`).value = `${data[index].freq2}`
}


function createTable(data, index) {

	let nameWhithoutSpace = removeSpaceOfName(data, index)

	tableElement.innerHTML += `
			<tr>
				<th scope="row">${data[index].nome}</th>
				<td><input id="${nameWhithoutSpace}Grade1" maxlength="2"  type="number" step="0.1" min="0" max="10"  placeholder="Digite a Nota"        ></td>
				<td><input id="${nameWhithoutSpace}Freq1"  maxlength="3"  type="number" step="0.1" min="0" max="100" placeholder="Digite a Frequência"  ></td>                
				<td><input id="${nameWhithoutSpace}Grade2" maxlength="2"  type="number" step="0.1" min="0" max="10"  placeholder="Digite a Nota"        ></td>
				<td><input id="${nameWhithoutSpace}Freq2"  maxlength="3"  type="number" step="0.1" min="0" max="100" placeholder="Digite a Frequência"  ></td>
			</tr>`

	//Colocando os dados do db como valores dos inputs
	setInputValue(data, index)

	//Armazenando os alunos em um objeto "students"
	addStudent(data, index)
}

//Rota para pegar nome do materia
axios.get(`http://localhost:2301/getSubjectName`,{
	headers: {'subjectId': `${subject_id}`}
}).then((response)=>{
	document.querySelector('header').innerHTML += `<h1>${response.data[0].nome}</h1>`
})

// Acessando a rota get para listar os alunos
axios.get(`http://localhost:2301/students/${class_id}/${subject_id}`
)
.then(response => {
	const data = response.data
		
	// Cirando linha na tabela para cada aluno
	for (let i = 0; i < data.length; i++) {
		createTable(data, i)
	}
})



/****************************************** UPDATE NAS NOTAS **********************************/

//Adicionando um ouvidor de eventos no formulario
document.querySelector('#form').addEventListener('submit', (event) => {
	//Usando a função "preventDefault()" para nao passar os dados pela URL 
	event.preventDefault();

	//Criando index para posição do array de alunos
	let studentsPosition = 0
	//Criando a posição para cada elemento retornado do formulario
	let grade1Position = 0
	let freq1Position = 1
	let grade2Position = 2
	let freq2Position = 3

	//Função para armazenar novos dados dos alunos em um objeto
	function updateStudent() {
		students[studentsPosition].grade1 = Number(event.target[grade1Position].value)
		students[studentsPosition].freq1 = Number(event.target[freq1Position].value)
		students[studentsPosition].grade2 = Number(event.target[grade2Position].value)
		students[studentsPosition].freq2 = Number(event.target[freq2Position].value)

		studentsPosition++
		grade1Position += 4
		freq1Position += 4
		grade2Position += 4
		freq2Position += 4
	}

	//Adicionado dados novos dos alunos no db
	for (let i = 0; i < students.length; i++) {
		updateStudent()

		axios.put('http://localhost:2301/update', {
			"grade1": `${students[i].grade1}`,
			"freq1": `${students[i].freq1}`,
			"grade2": `${students[i].grade2}`,
			"freq2": `${students[i].freq2}`,
			"id": `${students[i].id}`,
			"subjectid": `${subject_id}`
		})
	}
})