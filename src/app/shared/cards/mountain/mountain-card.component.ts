
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Card, CardService } from 'src/app/services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mountain',
  templateUrl: './mountain-card.component.html'
})
export class MountainComponent implements OnInit {

  @Input() card: Card;  // con el input permito(no obligatorio) que se le añada la informacón desde el html

  @Output() propagar: EventEmitter<number> = new EventEmitter<number>();  //con el output aviso de que se ha realizado el evento,y le pasa la id <number> desde el hijo al padre

  constructor(private cardservice: CardService,
              private router: Router) {
    
  }

  ngOnInit() {
  }

  // con esta funcion lo que conseguimos es evitar muchas lineas de codigo simplificandola solo en una, ya que tenemos beach-card y mountain-card, la idea es enviar el parametro 
//idx desde las dos funciones al padre  y que la pinte desde el html que a su vez viene del ts del padre.

  vistaDetalle(idx: number) {

    // return this.router.navigate(['/vistadetalle', idx]) //esta era la funcion que tenia antes de tener el output(mal)
    this.propagar.emit(idx);

  }

  soymontaña(categ:number){
    this.propagar.emit(categ);
  }



}
