import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService, Card } from 'src/app/services/card.service';



@Component({
  selector: 'app-vista-detalle',
  templateUrl: './details.component.html'
})
export class VistaDetalleComponent  {
  card: Card = null; //declaramos la variable card le decimos que es de tipo Card y la inicializamos en null

  constructor( private activatedRoute: ActivatedRoute, private cardservice: CardService) {
// mediante el observable subscribe y el parametro params con una arrow function le pasamos la id de una card obteniendola desde la url
    this.activatedRoute.params.subscribe( params => {  
      this.card = this.cardservice.getCard(parseInt(params['id']) ); 
     
    });
  }
  
}
