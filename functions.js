personagem = (imagem, caption) => {
    let numeroAleatorio = gerarNumero();
    
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: "GET",
        Headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        }
    })
    .then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        caption.innerHTML = data.name;
    });
}

gerarNumero = () => {
    return Math.floor(Math.random() * 671)
}

const imagem1 = document.querySelector(".image1")
const caption1 = document.querySelector(".caption1")
const imagem2 = document.querySelector(".image2")
const caption2 = document.querySelector(".caption2")
const imagem3 = document.querySelector(".image3")
const caption3 = document.querySelector(".caption3")
const imagem4 = document.querySelector(".image4")
const caption4 = document.querySelector(".caption4")

const listaImagens = [imagem1, imagem2, imagem3, imagem4]
const listaCaptions = [caption1, caption2, caption3, caption4]

for (let i = 0; i < 4; i++) {
    personagem(listaImagens[i], listaCaptions[i])
}