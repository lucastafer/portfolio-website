// Organização dos Components
// Para deixar o App mais organizado e enxuto, é uma opção mapearmos todos os nossos components em um único arquivo. 
// Desta forma, apenas um component é renderizado no App.js.

// 1) Para isso, devemos criar uma nova pasta no src chamada utilities. Dentro de utilities, criamos um arquivo commonUtils.js, onde importamos todos nossos components.

import Home from "../PortfolioContainer/Home/Home";

// A primeira const é a que representa o total de components/screens que temos.
// Ela recebe um array de objetos, e dentro de cada objeto tem o screen_name e o component que ela tem dentro.
export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
];

// A segunda const é para pegar as telas disponíveis. Nessa const, a primeira linha checa se a tela existe. 
// Se ela não existe, retorna -1, que significa que não há telas no array.
export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

// Em seguida, utilizamos um laço for para percorrer o array e pegar as telas disponíveis.
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
// “Se o Screen name encontrado na posição i for igual ao screen name disponível, retornar essa posição. Caso não, retorne -1 (vazio).
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};


// 2) Feito isso, devemos criar um novo arquivo PortfolioContainer.js solto na pasta PortfolioContainer, que será o "component central".

// Nele importamos o React e o arquivo que definimos no passo 1.
import React from "react";
import { TOTAL_SCREENS } from "../utilities/commonUtils";

export default function PortfolioContainer() {

  // Criando uma const para mapear com .map todas as nossas telas. Lembrando que o map chama a função para cada elemento do array.
  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((screen) =>
// Se o componente existir, ele vai pegar o screen name  da tela e chamar esse component.
      screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
// Caso não exista, ele pega e coloca esse nome em uma div.
      ) : (
        <div key={screen.screen_name}></div>
      )
    );
  };

// retorna então uma div com classe portfolio-container e dentro dessa div todos os nossos components mapeados.
  return <div className="portfolio-container">{mapAllScreens()}</div>;
}

// Aí lá no App.js no lugar de chamar component por component, chamamos só o PortfolioContainer, que ele por si chama todos em ordem (ordem que colocamos no array).
