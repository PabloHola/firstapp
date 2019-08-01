import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cards:Cards[] = [
    {
      id:1,
      img:"assets/img/1.jpg",
      nombre:"Pablo",
      bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, labore tempore vitae repellat nisi a unde reiciendis praesentium quaerat ea, numquam exercitationem voluptatem modi alias amet veritatis asperiores animi dolores!",
      categoria: 1
    },
    {
      id:0,
      img:"assets/img/2.jpg",
      nombre:"Alba",
      bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, labore tempore vitae repellat nisi a unde reiciendis praesentium quaerat ea, numquam exercitationem voluptatem modi alias amet veritatis asperiores animi dolores!",
      categoria: 2
    },
    {
      id:2,
      img:"assets/img/3.jpg",
      nombre:"Fali",
      bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, labore tempore vitae repellat nisi a unde reiciendis praesentium quaerat ea, numquam exercitationem voluptatem modi alias amet veritatis asperiores animi dolores!",
      categoria:1
    },
    {
      id:3,
      img:"assets/img/4.jpg",
      nombre:"M.Jose",
      bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, labore tempore vitae repellat nisi a unde reiciendis praesentium quaerat ea, numquam exercitationem voluptatem modi alias amet veritatis asperiores animi dolores!",
      categoria:2
    },

  ]

  constructor() { }

  getCards(): Cards[]{
      return this.cards;
  }
  getCard(id:string){
    return this.cards[id];//arreglar esta parte y definirla para que coincida con el array.
  }
}

export interface Cards{
  id:number;
  img:string;
  nombre:string;
  bio:string;
  categoria: number;

}
