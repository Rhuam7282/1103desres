const cardapio = {
    entradas: [
        { imagem: "imagens/ralado.jpg", nome: "Coco ralado", descricao: "Nossa entrada de coco ralado tem coco que é ralado", preco: "R$1banana" },
        { imagem: "imagens/po.jpg", nome: "Coco em pó", descricao: "Nossa entrada de coco em pó tem coco que é em pó", preco: "R$0,75banana" }
    ],
    pratos: [
        { imagem: "imagens/carne.jpg", nome: "Coco aberto", descricao: "Nosso prato principal de coco aberto tem coco que é aberto", preco: "R$3bananas" },
        { imagem: "imagens/coquinho.jpg", nome: "Coquinhos", descricao: "Nosso prato principal de coquinhos tem cocos que são inhos", preco: "R$2bananas" },
        { imagem: "imagens/queimado.jpg", nome: "Coco queimado", descricao: "Nosso prato principal de coco queimado tem coco que é queimado", preco: "R$2bananas" }
    ],
    sobremesas: [
        { imagem: "imagens/agua.jpg", nome: "Água de coco", descricao: "Nossa sobremesa de água de coco tem água de coco", preco: "R$2bananas" },
        { imagem: "imagens/cocada.jpg", nome: "Cocada sem açúcar", descricao: "Nossa sobremesa de cocada sem açúcar é uma cocada sem açúcar", preco: "R$1,5bananas" },
        { imagem: "imagens/bala.jpg", nome: "Bala de coco", descricao: "Nossa sobremesa de bala de coco é uma porção de balas de coco", preco: "R$1banana" }
    ]
};

function criarCardapio(itens, containerId) {
    const container = document.getElementById(containerId);
    itens.forEach(item => {
        const section = document.createElement("section");
        section.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}">
            <h3>${item.nome}</h3>
            <p>${item.descricao}</p>
            <p>${item.preco}</p>
        `;
        container.appendChild(section);
    });
}

criarCardapio(cardapio.entradas, "entradas-container");
criarCardapio(cardapio.pratos, "pratos-container");
criarCardapio(cardapio.sobremesas, "sobremesas-container");