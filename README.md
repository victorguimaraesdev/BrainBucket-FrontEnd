# Brain Bucket

Brain Bucket é um aplicativo simples e eficiente para gerenciamento de tarefas (*to-do list*), projetado para ajudar você a organizar seu dia a dia. Com ele, você pode adicionar, editar, marcar como concluído e excluir tarefas facilmente.

## 🔥 Funcionalidades

- 📋 Adicionar tarefas.
- ✏️ Editar tarefas existentes.
- ✅ Marcar tarefas como concluídas.
- ❌ Excluir tarefas.
- 🌐 Interface amigável e responsiva (em desenvolvimento).

## 🛠️ Tecnologias Utilizadas

- **Back-end**: Node.js com Express.
- **Banco de Dados**: MongoDB.
- **Front-end**: React (planejado).
- **Outros**: HTML, CSS, JavaScript.

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- Git

### Passo a passo

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/brain-bucket.git
   cd brain-bucket
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure o arquivo `.env`**:
   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/brain_bucket
   ```

4. **Inicie o servidor**:
   ```bash
   npm start
   ```

5. **Acesse o aplicativo**:
   Abra o navegador e vá para [http://localhost:3000](http://localhost:3000).

## 📂 Estrutura do Projeto

```
brain-bucket/
├── public/          # Arquivos públicos
├── src/             # Código-fonte principal
│   ├── controllers/ # Lógica do back-end
│   ├── models/      # Modelos de banco de dados
│   ├── routes/      # Rotas da aplicação
│   └── views/       # Páginas do front-end (temporário)
├── .env.example     # Exemplo de configuração do ambiente
├── package.json     # Configuração do Node.js
└── README.md        # Documentação do projeto
```

## ✨ Melhorias Planejadas

- Implementar o front-end com React.
- Adicionar autenticação de usuários.
- Criar notificações para lembretes de tarefas.
- Permitir a organização de tarefas por categorias ou tags.

## 🧑‍💻 Contribuindo

Contribuições são bem-vindas! Siga os passos abaixo para colaborar:

1. Faça um fork do projeto.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça suas alterações e *commit*:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie as mudanças para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request no GitHub.

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

**Brain Bucket** - Organize suas ideias com simplicidade! 💡
