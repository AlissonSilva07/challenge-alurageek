const listaProdutos = document.querySelector('[data-produtos]')

const buildCard = (id, titulo, preco, descricao, img) => {
    const produto = document.createElement("div")
    produto.className = "app-main__produto"
    produto.innerHTML = `<img src=${img} alt="nomeproduto" class="app-main__produto__img">
    <div class="app-main__produto__dados">
        <div class="app-main__produto__dados__topo">
            <p>${titulo}</p>
            <p>${preco}</p>
        </div>
        <div class="app-main__produto__dados__fundo">
            <p>${descricao}</p>
            <div class="app-main__produto__dados__fundo__grupo">
                <button class="app-main__produto__dados__fundo__grupo__botao-deletar" onclick="deletar(${id})">DELETAR</button>
            </div>
        </div>
    </div>`

    return produto
}

const listarProdutos = async () => {
    const conectar = await fetch("http://localhost:3000/produtos");
    const dados = await conectar.json()
    return dados    
}

const getProdutos = async () => {
    try {
        const produtos = await listarProdutos()
        if (produtos.length < 0) {
            listaProdutos.innerHTML = `<h2 class="mensagem__vazio">Não existem produtos postados ainda.</h2>`
        } else {
            produtos.forEach(e => listaProdutos.appendChild(buildCard(e.id, e.titulo, e.preco, e.descricao, e.img)));
        }
    } catch (error) {
        console.error(error)
    }
}

getProdutos()