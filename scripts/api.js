const tokenStorage = localStorage.getItem('token')
if (tokenStorage) {
    // Depois adicionar um verificador com a API para ver se a AUTH é valida.
    axios.defaults.headers.common['Authorization'] = `Bearer ${tokenStorage}`;
}

const criarConta = async (conta) => {
    return await axios.post('http://localhost:3005/conta/criar', conta);
}

const loginConta = async (conta) => {
    const {data} = await axios.post('http://localhost:3005/conta/login', conta);
    localStorage.setItem('Bearer', data.token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
}

document.getElementById("container").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    
    const conta = { email, senha };
    loginConta(conta);
});