const imagem1 = document.querySelector(".image1")
const caption1 = document.querySelector(".caption1")
const imagem2 = document.querySelector(".image2")
const caption2 = document.querySelector(".caption2")
const imagem3 = document.querySelector(".image3")
const caption3 = document.querySelector(".caption3")
const imagem4 = document.querySelector(".image4")
const caption4 = document.querySelector(".caption4")

gerarNumero = () => {
    return Math.floor(Math.random() * 671)
}

personagem1 = () => {
    let numeroAleatorio = gerarNumero();
    
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: "GET",
        Headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        }
    })
        .then((response) => response.json()).then((data) => {
            imagem1.src = data.image;
            imagem1.alt = data.name;
            caption1.innerHTML = data.name;
        });
}

personagem2 = () => {
    let numeroAleatorio = gerarNumero();
    
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: "GET",
        Headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        }
    })
        .then((response) => response.json()).then((data) => {
            imagem2.src = data.image;
            imagem2.alt = data.name;
            caption2.innerHTML = data.name;
        });
}

personagem3 = () => {
    let numeroAleatorio = gerarNumero();
    
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: "GET",
        Headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        }
    })
        .then((response) => response.json()).then((data) => {
            imagem3.src = data.image;
            imagem3.alt = data.name;
            caption3.innerHTML = data.name;
        });
}

personagem4 = () => {
    let numeroAleatorio = gerarNumero();
    
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: "GET",
        Headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        }
    })
        .then((response) => response.json()).then((data) => {
            imagem4.src = data.image;
            imagem4.alt = data.name;
            caption4.innerHTML = data.name;
        });
}

personagem1()
personagem2()
personagem3()
personagem4()