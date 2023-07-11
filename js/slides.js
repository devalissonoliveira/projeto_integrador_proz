const slidesData = [
    {
      imageSrc: "./imagens/canoa_quebrada_slide1.jpg",
      altText: "Imagem fotografada do alto mostrando uma praia de ondas calmas...",
      title: "Canoa Quebrada",
      text: "Descubra a Magia de Canoa Quebrada: Praias Deslumbrantes, Aventuras ao Ar Livre e Sabores Irresistíveis!",
      link: "./html/destinos/canoa_quebrada_ceara.html"
    },
    {
      imageSrc: "./imagens/caruaru_home_slide2.jpg",
      altText: "Imagem representa uma festa junina conhecida como Quadrilha Junina...",
      title: "Caruaru",
      text: "Caruaru é conhecida como a capital do Forró e também é famosa por sua rica tradição culinária...",
      link: "./html/destinos/caruaru_pernambuco.html"
    },
    {
      imageSrc: "./imagens/chapada_diamantina_slide3.jpg",
      altText: "Imagem mostra grandes planaltos coberto com uma vegetação rasteira...",
      title: "Chapada Diamantina",
      text: "Nem só de praias vive o turismo da Bahia! Um dos destinos mais bonitos da região, com certeza...",
      link: "./html/destinos/chapada_diamantina_bahia.html"
    },
    {
      imageSrc: "./imagens/salto_home_slide4.jpg",
      altText: "Imagem faz uma representação de um dinossouro grande...",
      title: "Salto",
      text: "No interior de São Paulo é um destino imperdível para os amantes de natureza...",
      link: "./html/destinos/salto_sao_paulo.html"
    },
    {
      imageSrc: "./imagens/catedral-da-se-sp-slide5.png",
      altText: "Imagem mostra uma escultura no lado esquerdo, ao centro e a direita mostra palmeiras altas...",
      title: "São Paulo",
      text: "A cidade que nunca dorme! Dia ou noite, sempre tem algo acontecendo; as baladas e bares fervem até o sol raiar...",
      link: "./html/destinos/sao_paulo_capital.html"
    }
  ];
  
  const slidesContainer = document.querySelector(".slides");
  const navigationContainer = document.querySelector(".navegation");
  
  // Cria os slides com base nos dados fornecidos
  slidesData.forEach((slide, index) => {
    const slideElement = document.createElement("div");
    slideElement.classList.add("slide");
    slideElement.classList.add("s" + (index + 1));
  
    const imageElement = document.createElement("img");
    imageElement.src = slide.imageSrc;
    imageElement.alt = slide.altText;
  
    const contentElement = document.createElement("div");
    contentElement.classList.add("conteudo-slide");
  
    const titleElement = document.createElement("h1");
    titleElement.classList.add("titulo-slide");
    titleElement.textContent = slide.title;
  
    const textElement = document.createElement("p");
    textElement.classList.add("texto-slide");
    textElement.textContent = slide.text;
  
    const linkElement = document.createElement("a");
    linkElement.href = slide.link;
  
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("btn-img-slide");
    buttonElement.textContent = "Saiba mais";
  
    linkElement.appendChild(buttonElement);
    contentElement.appendChild(titleElement);
    contentElement.appendChild(textElement);
    contentElement.appendChild(linkElement);
    slideElement.appendChild(imageElement);
    slideElement.appendChild(contentElement);
    slidesContainer.appendChild(slideElement);
  

  });
  
  let count = 1;
  document.getElementById("slide1").checked = true;
  
  setInterval(function () {
    nextImage();
  }, 3000);
  
  function nextImage() {
    count++;
    if (count > slidesData.length) {
      count = 1;
    }
  
    document.getElementById("slide" + count).checked = true;
  }
  