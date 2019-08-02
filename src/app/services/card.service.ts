import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  // dentro de la class CardService creamos un array cards de tipo (Card (interface) ) y le pasamos los datos necesarios.
  private cards: Card[] = [
    {
      id: 1,
      img:"assets/img/1.jpg",
      nombre:"Pablo",
      bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, labore tempore vitae repellat nisi a unde reiciendis praesentium quaerat ea, numquam exercitationem voluptatem modi alias amet veritatis asperiores animi dolores!",
      categoria: 1
    },
    {
      id: 0,
      img:"assets/img/2.jpg",
      nombre:"Alba",
      bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, labore tempore vitae repellat nisi a unde reiciendis praesentium quaerat ea, numquam exercitationem voluptatem modi alias amet veritatis asperiores animi dolores!",
      categoria: 2
    },
    {
      id: 2,
      img:"assets/img/3.jpg",
      nombre:"Fali",
      bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, labore tempore vitae repellat nisi a unde reiciendis praesentium quaerat ea, numquam exercitationem voluptatem modi alias amet veritatis asperiores animi dolores!",
      categoria: 1
    },
    {
      id: 3,
      img:"assets/img/4.jpg",
      nombre:" M.Jose ",
      bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, labore tempore vitae repellat nisi a unde reiciendis praesentium quaerat ea, numquam exercitationem voluptatem modi alias amet veritatis asperiores animi dolores!" ,
      categoria: 2
    },

  ]

  constructor( ) { }

  getCards(): Card[] {
      return this.cards;
  }




  // con esta funcion lo que hacemos es pasarle como parametro la id. diciendo que es de tipo Card creamos una variable, recorremos cards y
  // comrpobamos si la id que le mandamos como parametros y la id que viene del servicio son del mismo tipo y si es asi retornamos esa varible con cardret.

  getCard( id: number): Card {
    let cardret: Card;

    for (let card of this.cards) {  // esta función (de linea 55 a linea 63) se puede resumir a una sola linea, pero me lo enseñara German mas adelante.
      if (card.id === id ) {
            cardret = card;
    }
    }
    // console.log(cardret);
    return cardret;


    //return this.cards[id];//arreglar esta parte y definirla para que coincida con el array. //esto estaba antes de crear la funcion de arriba (mal)

  }
}

export interface Card { // creamos una interface para definir una serie de parametros a cumplir.
  id: number;
  img: string;
  nombre: string;
  bio: string;
  categoria: number;

}
