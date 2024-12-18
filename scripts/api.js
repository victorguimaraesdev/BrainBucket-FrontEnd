const tokenStorage = localStorage.getItem('token')
if (tokenStorage) {
    // Depois adicionar um verificador com a API para ver se a AUTH é valida.
    axios.defaults.headers.common['Authorization'] = `Bearer ${tokenStorage}`;
}

const criarConta = async (conta) => {
    return await axios.post('http://localhost:3005/conta/criar', conta);
}

document.getElementById("containerRegistro").addEventListener("input", (event) => {
    event.preventDefault();

    const nome = document.getElementById("registroUsuario").value;
    const email = document.getElementById("registroEmail").value;
    const senha = document.getElementById("registroSenha").value;
    const senha2 = document.getElementById("registroSenha2").value;

    if (senha !== senha2) {
        return alert('As senhas não coincidem!');
    }

    const conta = { nome, email, senha };
    console.log(conta);
    const res = criarConta(conta);
    console.log(res);
});

const loginConta = async (conta) => {
    const { data } = await axios.post('http://localhost:3005/conta/login', conta);

    if (!data.token) {
        document.getElementById("logar").style.backgroundColor = "red";
        setTimeout(() => {
            document.getElementById("logar").style.backgroundColor = "rgb(92, 91, 91)";
        }, 200);
    }

    if (data.token) {
        document.getElementById("logar").style.backgroundColor = "green";
        setTimeout(() => {
            document.getElementById("flipMaster").style.display = "none";
        }, 200);
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