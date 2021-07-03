const date = new Date()
let day = date.getDay()
const hour = date.getHours()

const DivContainer = document.querySelector('#menssage-container')

switch (day) {
    case 0:
        day = 'Domingo'
        break;

    case 1:
        day = 'Segunda'
        break;

    case 2:
        day = 'Terça'
        break;

    case 3:
        day = 'Quarta'
        break;

    case 4:
        day = 'Quinta'
        break;

    case 5:
        day = 'Sexta'
        break;

    case 6:
        day = 'Sábado'
        break;
}

let menssageDay
if(day === 'Sábado' || day === 'Domingo'){
    menssageDay = `Um Otimo ${day}`
}else{
    menssageDay = `Uma Otima ${day}`
}


let menssageHour
if (hour >= 5 && hour < 12) {
     //BOM DIA
    menssageHour = `Bom dia`
}else if (hour >= 12 && hour < 18) {
    //BOA TARDE
    menssageHour = `Boa Tarde`
}else if (hour >= 18 && hour < 23){
    //BOA NOITE
    menssageHour = `Boa Noite`
}else if (hour >= 0 && hour < 5){
    //BOA MADRUGADA
    menssageHour = `Ainda acordado?! Boa Noite`
    DivContainer.style.width = '50rem'
}


axios.get('http://localhost:2301/teacher', {
    headers: { 'Authorization': `Bearer ${token}` }
})
.then((response) => {
    DivContainer.innerHTML = `
        <h1>${menssageHour} Professor<span>(a)</span> ${response.data.name}</h1>
        <h2>${menssageDay}</h2>
    `
})