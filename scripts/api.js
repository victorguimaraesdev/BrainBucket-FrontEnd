const tokenStorage = localStorage.getItem('token')
if (tokenStorage) {
    // Depois adicionar um verificador com a API para ver se a AUTH é valida.
    axios.defaults.headers.common['Authorization'] = `Bearer ${tokenStorage}`;
}

const criarConta = async (conta) => {
    return await axios.post('http://localhost:3005/conta/criar', conta);
}

document.getElementById("containerRegistro").addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("registroUsuario").value;
    const email = document.getElementById("registroEmail").value;
    const senha = document.getElementById("registroSenha").value;
    const senha2 = document.getElementById("registroSenha2").value;

    if (senha !== senha2) {
        return alert('As senhas não coincidem!');
    }

    const conta = { nome, email, senha };
    criarConta(conta);
});

const loginConta = async (conta) => {
    const { data } = await axios.post('http://localhost:3005/conta/login', conta);
    localStorage.setItem('Bearer', data.token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
}

document.getElementById("containerLogin").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const conta = { email, senha };
    console.log(conta)
    qualquerCoisa(conta)
});


async function qualquerCoisa(conta) {
    const retorno = await axios.post('http://localhost:3005/victor', conta)
    console.log(retorno.data)
}