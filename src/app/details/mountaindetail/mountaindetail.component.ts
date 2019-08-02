import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService, Card } from 'src/app/services/card.service';

@Component({
  selector: 'app-mountaindetail',
  templateUrl: './mountaindetail.component.html'
})
export class MountaindetailComponent implements OnInit {
  
 @Input() card : Card;  // usamos el decorador input para que la variable card se rellene desde el html(que estos datos vienen del ts del padre)


  constructor() {
  
   }

  ngOnInit() {
  }

 IamMountain()  // creamos una funcion unica para esta tarjeta para que cree un alert cada vez que pulsamos el boton
 {
   alert("Soy Montaña");
 }

}

