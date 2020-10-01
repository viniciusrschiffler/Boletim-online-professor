function mostrarSenha(){
	var olho = document.querySelector('img#olho')
	var senha = document.getElementById("passwordInput");
	if(senha.type == "password"){
		senha.type = "text";
		olho.setAttribute("src", 'src/imagens/olho.png')
	}else{
		senha.type = "password";
		olho.setAttribute("src", 'src/imagens/cego.png')
	}
}

var boxOlho = document.querySelector('div#box-olho').onclick = mostrarSenha