export async function carregarProjetosGitHub() {
    const container = document.getElementById("lista-projetos");

    if (!container) return;

    const projetosConfigurados = [
        {
            repo: "Starbucks---Site",
            titulo: "Starbucks",
            imagem: "img/imgProjetos/starbuckss.jpeg",
            descricaoFallback: "Projeto de landing page com foco em responsividade, estruturação visual e apresentação de produto."
        },
        {
            repo: "Cine-Renan",
            titulo: "Cinema",
            imagem: "img/imgProjetos/cinema.jpg",
            descricaoFallback: "Interface de site voltada para exibição de filmes, com design limpo e navegação simples."
        },
        {
            repo: "Conversor-de-Moedas",
            titulo: "Conversor de Moedas",
            imagem: "img/imgProjetos/ConversorMoedas.png",
            descricaoFallback: "Aplicação interativa para conversão de valores entre moedas, com foco em lógica e usabilidade."
        },
        {
            repo: "ToDoList",
            titulo: "To Do List",
            imagem: "img/imgProjetos/toDoList.png",
            descricaoFallback: "Lista de tarefas com gerenciamento de itens e organização prática para o dia a dia."
        },
        {
            repo: "jogoDaMemoria",
            titulo: "Jogo da Memória",
            imagem: "img/imgProjetos/jogoMemoria.png",
            descricaoFallback: "Projeto com foco em interação, manipulação do DOM e experiência do usuário."
        },
        {
            repo: "Projeto-Academia",
            titulo: "Jogo da Memória",
            imagem: "img/imgProjetos/cinema.jpg",
            descricaoFallback: "Projeto com foco em interação, manipulação do DOM e experiência do usuário."
        },
        {
            repo: "AcademiaDart",
            titulo: "Jogo da Memória",
            imagem: "img/imgProjetos/toDoList.png",
            descricaoFallback: "Projeto com foco em interação, manipulação do DOM e experiência do usuário."
        }

    ];

    container.innerHTML = "";

    for (const projeto of projetosConfigurados) {
        try {
            const resposta = await fetch(`https://api.github.com/repos/renangondo/${projeto.repo}`);

            if (!resposta.ok) {
                throw new Error(`Erro ao buscar ${projeto.repo}`);
            }

            const repo = await resposta.json();

            const link = document.createElement("a");
            link.href = repo.html_url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            link.innerHTML = `
                <div class="card-projetos">
                    <img src="${projeto.imagem}" alt="Projeto ${projeto.titulo}">
                    <h3>${projeto.titulo}</h3>
                    <p>${repo.description || projeto.descricaoFallback}</p>
                </div>
            `;

            container.appendChild(link);

        } catch (erro) {
            const link = document.createElement("a");
            link.href = `https://github.com/renangondo/${projeto.repo}`;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            link.innerHTML = `
                <div class="card-projetos">
                    <img src="${projeto.imagem}" alt="Projeto ${projeto.titulo}">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricaoFallback}</p>
                </div>
            `;
            container.appendChild(link);
        }
    }
}