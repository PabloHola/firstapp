import { Component, OnInit } from '@angular/core';
import { Card, CardService } from 'src/app/services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {

  cards: Card[] = [];  //declaramos una variable y le asigamos el tipo card[] (interface)

  

  constructor(private cardservice: CardService,
              private router: Router) {}

  ngOnInit() {
     this.cards = this.cardservice.getCards();  //asignamos todas las cartas a cards
  }

  vistaDetalle(idx: number) {
    return this.router.navigate(['/vistadetalle', idx]); // retornamos con el navigate la ruta y el parametro que queremos pasar
  }

}
