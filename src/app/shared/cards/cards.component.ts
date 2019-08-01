import { Component, OnInit } from '@angular/core';
import { Cards, CardService } from 'src/app/services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: Cards[] = [];

  constructor(private cardservice: CardService,
    private router: Router) {
    
  }

  ngOnInit() {
    // this.cards = this.cardservice.getCards();
  }

  // vistaDetalle(idx: number) {
  //   // console.log(idx);
  //   return this.router.navigate(['/vistadetalle', idx])
  // }

}
