// Seleção de elementos da página
const likeButtons = document.querySelectorAll(".rating button:first-child");
const dislikeButtons = document.querySelectorAll(".rating button:last-child");
const createTopicForm = document.querySelector("#create-topic form");
const topicsSection = document.querySelector("#topics");
const toggleThemeButton = document.createElement("button");

// Adiciona o botão de troca de tema no cabeçalho
toggleThemeButton.textContent = "Modo Escuro";
toggleThemeButton.classList.add("btn");
document.querySelector("header").appendChild(toggleThemeButton);

// Função para alternar entre temas claro e escuro
toggleThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    toggleThemeButton.textContent =
        document.body.classList.contains("dark-theme") ? "Modo Claro" : "Modo Escuro";
});

// Funções para curtir e descurtir comentários
likeButtons.forEach((btn) =>
    btn.addEventListener("click", () => {
        const currentLikes = parseInt(btn.textContent.split(" ")[1]) || 0;
        btn.textContent = `👍 ${currentLikes + 1}`;
    })
);

dislikeButtons.forEach((btn) =>
    btn.addEventListener("click", () => {
        const currentDislikes = parseInt(btn.textContent.split(" ")[1]) || 0;
        btn.textContent = `👎 ${currentDislikes + 1}`;
    })
);

// Função para criar novos tópicos dinamicamente
createTopicForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtém dados do formulário
    const title = document.querySelector("#title").value.trim();
    const content = document.querySelector("#content").value.trim();

    if (title && content) {
        // Cria o elemento do tópico
        const newTopic = document.createElement("div");
        newTopic.classList.add("topic");
        newTopic.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
            <button class="btn">Ver Discussão</button>
        `;

        // Adiciona o novo tópico ao início da seção
        topicsSection.insertBefore(newTopic, topicsSection.firstChild);

        // Limpa o formulário
        createTopicForm.reset();
        alert("Tópico criado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

// Estilo do modo escuro (adicionado dinamicamente)
const darkThemeStyles = document.createElement("style");
darkThemeStyles.textContent = `
    .dark-theme {
        background-color: #121212;
        color: #e0e0e0;
    }
    .dark-theme header,
    .dark-theme nav {
        background-color: #333;
    }
    .dark-theme a {
        color: #f4a261;
    }
    .dark-theme .container {
        background-color: #1e1e1e;
        border: 1px solid #444;
    }
    .dark-theme .btn {
        background-color: #f4a261;
        color: #000;
    }
`;
document.head.appendChild(darkThemeStyles);
