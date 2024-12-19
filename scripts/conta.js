const tokenStorage = localStorage.getItem('token')
if (tokenStorage) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${tokenStorage}`;
}

const criarConta = async (conta) => {

    if (conta.senha !== conta.senha2) {
        document.getElementById("registrar").style.backgroundColor = "red";
        document.getElementById("registrar").innerHTML = "Senhas não coincidem";
        setTimeout(() => {
            document.getElementById("registrar").style.backgroundColor = "rgb(92, 91, 91)";
            document.getElementById("registrar").innerHTML = "Registrar-se";
        }, 1000);
    }

    return await axios.post('http://localhost:3005/conta/criar', conta);
}

document.getElementById("containerRegistro").addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("registroUsuario").value;
    const email = document.getElementById("registroEmail").value;
    const senha = document.getElementById("registroSenha").value;
    const senha2 = document.getElementById("registroSenha2").value;

    const conta = { nome, email, senha, senha2 };
    criarConta(conta);
});

const loginConta = async (conta) => {
    const { data } = await axios.post('http://localhost:3005/conta/login', conta);

    console.log(data);

    if (!data.token) {
        document.getElementById("logar").style.backgroundColor = "red";
        document.getElementById("logar").innerHTML = "Conta não encontrada";
        setTimeout(() => {
            document.getElementById("logar").style.backgroundColor = "rgb(92, 91, 91)";
        document.getElementById("logar").innerHTML = "Entrar";

        }, 1000);
    }

    if (data.token) {
        document.getElementById("logar").style.backgroundColor = "green";
        document.getElementById("flipMaster").setAttribute("class", "flipMaster_sucesso");
        setTimeout(() => {
            document.getElementById("flipMaster").style.display = "none";
        }, 1000);
    }

    localStorage.setItem('Bearer', data.token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
}

document.getElementById("containerLogin").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const conta = { email, senha };

    loginConta(conta);
});