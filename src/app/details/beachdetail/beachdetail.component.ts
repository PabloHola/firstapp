import { Component, OnInit, Input } from '@angular/core';
import { Card , CardService } from 'src/app/services/card.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-beachdetail',
  templateUrl: './beachdetail.component.html'
})
export class BeachdetailComponent implements OnInit {

  text: boolean;       //la variable text pertenece al textarea
  name:boolean;
  savestatus: boolean; //esta es para que aparezca el boton guardar y cancelar
  editstatus: boolean; // esta para que aparezca el boton editar
  // originBio: string;   // esta para asignarle el valor del card.bio
  // originName :string
  originInfo:Card;
  @Input()card: Card;  // usamos el decorador input para que la variable card se rellene desde el html(que estos datos vienen del ts del padre)


  constructor(private _cardservice: CardService, 
              private router: Router) { }

  ngOnInit() {
    this.text = true;       //con el text en true iniciamos la app con el texto en disabled
    this.name = true;
    this.savestatus = true; // boton guardar y cancelar ocultos
    this.editstatus = true; // boton editar visible
    // this.originBio = this.card.bio;  // asignamos a originBio el valor de la card.bio para usarlo en el cancelar
    // this.originName = this.card.nombre;
    this.originInfo = Object.assign({},this.card);
  }
  IamBeach(){       // creamos una funcion unica para esta tarjeta para que cree un alert cada vez que pulsamos el boton
    alert("Soy Playa");
  }

  edit(){  // funcion edit creada por el boton editar
    this.text = false;        //pone el texto en false para que sea editable
    this.name = false;
    this.savestatus = false;  //pone los botones guardar y cancelar visibles
    this.editstatus = false;  //oculta el boton editar
  }

  savetext() {  // funcion guardar

    this._cardservice.upadateCardById(this.card);  // instancia al servicio, crea una funcion para usarla en el cardservice y le pasa como parametros la id y newbio
    // console.log(newbio);
    this.text = true;  // para volver a poner el texto en disabled
    this.router.navigate(['/home']); // redirección a la home
  }
  cancel() {        //funcion cancelar
        // this.card.bio = this.originBio;  //le asigno al originBio el valor de card.bio para que vuelva a aparecer el texto inicial
        // this.card.nombre = this.originName;

        // con el object assign lo que hago es que creo un nuevo objeto en la memoria, y le digo que vale el valor de la variable que tengo
        //despues de la coma es decir en este caso el nuevo objeto vale this,originInfo, luego le digo que this.card tiene el valor del nuevo
        //objeto y recupera el valor inicial (si lo hiciera con una simple asignación, le digo que ahora las dos apuntan a la misma memoria,
        //por lo cual las dos tienen el mismo valor, entonces si modifico algo siempre van a tener las dos el mismo valor y nunca recuperara 
        //la informacion original del principio)
        this.card = Object.assign({}, this.originInfo); 
        // console.log(this.card.bio);
  }

}
