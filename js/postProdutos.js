const listarProdutos = async () => {
    const conectar = await fetch("http://localhost:3000/produtos");
    const dados = await conectar.json()
    return dados    
}

const postProduto = async (id, titulo, preco, descricao, img) => {
    console.log(id, titulo, preco, descricao, img)
    const conectar = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            id: id,
            titulo: titulo,
            preco: `R$${preco}`,
            descricao: descricao,
            img: img
        })
    })

    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo")
    }
    
    const dados = await conectar.json()
    return dados
}

const gerarID = async () => {
    const produtos = await listarProdutos()

    return produtos.length + 1
}

const form = document.querySelector("[data-form]")

const postProdutos = async (evento) => {
    evento.preventDefault()

    const id = await gerarID()
    const titulo = document.querySelector("[data-titulo]").value
    const preco = document.querySelector("[data-preco]").value
    const descricao = document.querySelector("[data-descricao]").value
    const img = document.querySelector("[data-img]").value

    try {
        if (!titulo || !preco || !descricao || !img) {
            alert('Todos os dados devem ser preenchidos!')
        }

        await postProduto(id, titulo, preco, descricao, img)
        window.location.href = "../../index.html"
    } catch (error) {
        console.error(error)
    }    
}

form.addEventListener("submit", evento => postProdutos(evento))