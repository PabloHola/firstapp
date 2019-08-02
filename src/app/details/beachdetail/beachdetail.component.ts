import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/services/card.service';

@Component({
  selector: 'app-beachdetail',
  templateUrl: './beachdetail.component.html'
})
export class BeachdetailComponent implements OnInit {

@Input() card :Card;

  constructor() { }

  ngOnInit() {
  }
  IamBeach(){
    alert("Soy Playa");
  }

}
