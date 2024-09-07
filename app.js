function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let termo = ""; 
    let definicao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        termo = dado.termo.toLowerCase()
        definicao = dado.definicao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se termo includes campoPesquisa
        if (termo.includes(campoPesquisa) || definicao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
            <h2>
            <a class="nome-termo" target="_blank">${dado.termo}</a>
            </h2>
            <h5>${dado.tipo}</h5>
                <p class="definicao-meta">${dado.definicao}</p>
                <a class="link-alura" href=${dado.link} target="_blank">Saiba Mais</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
