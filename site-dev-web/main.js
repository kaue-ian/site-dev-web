window.onload = function() { //Função que executa quando a tela termina de carregar
    let dados = JSON.parse(localStorage.usuarios); //Pega os informações salvas na storage
    if(dados.length <= 0) { //Verifica se o tamanho é menor ou igual a zero
        localStorage.usuarios = [{nome: 'admin', senha: 'admin'}]; //Cria a localstorage com um valor de array vazio
    }
    const main = document.getElementById('main'); //pega o valor do element HTML de id 'main'
    dados.forEach(element => { //faz uma repetição do array 
        main.innerHTML += "<p>Nome: " + element.nome + "</p>  "; //injeta um HTML na tela para mostrar os usuarios cadastrados
    });
    modal.style.display = "none";
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

function submit (tela) {
    if(tela == 'login')//Verifica de qual tela está vindo ao submit     
        login(document.getElementById("nome").value, document.getElementById("senha").value);
    else        
        cadastro(document.getElementById("nome").value, document.getElementById("senha").value, document.getElementById("confirmSenha").value);
}

function login(nome, senha) {
    let dados = JSON.parse(localStorage.usuarios); //Pega os informações salvas na storage

    dados.forEach(element => { //faz uma repetição do array 
        if(element.nome == nome && element.senha == senha) { //Verifica se o nome e senha existem dentro do array
            console.log("Logado com Sucesso!");
        }
    });
}

function cadastro(nome, senha, confirmSenha) {
    let dados = JSON.parse(localStorage.usuarios); //Pega os informações salvas na storage

    if(senha == confirmSenha) { //Verifica se as 2 senhas inseridas são iguais
        dados.push({nome: nome, senha: senha}); //insere um novo obejeto no array com as informções inseridas
        localStorage.usuarios = JSON.stringify(dados); //Atualiza a localstorage com o novo array
        console.log("Cadastrado com Sucesso!");
        document.location.href = "principal.html";
    } else {
        modal.style.display = "block";
        console.log("Senhas não são iguais!");
    }
}

function apagar() {
    localStorage.removeItem(localStorage.usuarios);
}