import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cards , CardService } from 'src/app/services/card.service';



@Component({
  selector: 'app-vista-detalle',
  templateUrl: './vista-detalle.component.html',
  styleUrls: ['./vista-detalle.component.css']
})
export class VistaDetalleComponent  {

  card:any = {};
  constructor( private activatedRoute:ActivatedRoute,
    private cardservice:CardService ) {

    this.activatedRoute.params.subscribe( params => {
      this.card = this.cardservice.getCard( params['id'] );
      // console.log(params['id']);
    } )
  }



}
