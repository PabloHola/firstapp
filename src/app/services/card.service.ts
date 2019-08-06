import { Injectable } from '@angular/core';
import { log } from 'util';
import { Logs } from 'selenium-webdriver';


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

  constructor( ) { 
    console.log("constructor");
  }

  getCards(): Card[] {
      return this.cards;
  }

  updatecard(id: number, bio: string)
  {
    let card: Card = this.getCard(id);
    card.bio = bio;
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

  }

  upadateCardById(updatedCard: Card) {  //función que viene del ts del hijo para modificar el texto
  // cuando creo una variable y le digo que es de tipo array, luego puedo asignarle un nuevo valor ya que las arrays em la pila memoria no copian los datos
  // si no que las dos apuntan a la misma y por lo tanto puedo asignar nuevos valores
    
    let arr: Card[]; // le digo que es de tipo array
    arr = this.cards; // le asigno un valor

    for (let card of arr) {  //recorro esa array para sacar card
      if (card.id === updatedCard.id) {  //mediante la id que le pase como parametro a la función entro en la carta en concreto en la que estoy
        card = updatedCard;    // y le asigno un nuevo valor 
        
        // console.log(valor);
        // console.log(card);
      }
    }
    // console.log(this.cards);
    
  }

}

export interface Card { // creamos una interface para definir una serie de parametros a cumplir.
  id: number;
  img: string;
  nombre: string;
  bio: string;
  categoria: number;

}
