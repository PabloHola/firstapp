import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService, Card } from 'src/app/services/card.service';



@Component({
  selector: 'app-vista-detalle',
  templateUrl: './details.component.html'
})
export class VistaDetalleComponent  {

  card: Card = null;
  constructor( private activatedRoute: ActivatedRoute, private cardservice: CardService) {

    this.activatedRoute.params.subscribe( params => {
      this.card = this.cardservice.getCard(parseInt(params['id']) );
     
    });
  }

  // quien_soy_beach(){
  // }

  // quien_soy_mountain(){
  // }




}
