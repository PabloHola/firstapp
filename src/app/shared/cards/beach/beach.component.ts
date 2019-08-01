
import { Component, OnInit } from '@angular/core';
import { Cards, CardService } from 'src/app/services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beach',
  templateUrl: './beach.component.html',
  styleUrls: ['./beach.component.css']
})
export class BeachComponent implements OnInit {

  cards: Cards[] = [];

  constructor(private cardservice: CardService,
    private router: Router) {
    
  }

  ngOnInit() {
    this.cards = this.cardservice.getCards();
  }

  vistaDetalle(idx: number) {
    // console.log(idx);
    return this.router.navigate(['/vistadetalle', idx])
  }

}


