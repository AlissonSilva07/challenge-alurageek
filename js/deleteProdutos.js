const deletarProdutos = async (id) => {
    const conectar = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });
    const dados = await conectar.json()
    return dados    
}

const deletar = async (id) => {
    try {
        await deletarProdutos(id)
    } catch (error) {
        console.error(error)
    }
}