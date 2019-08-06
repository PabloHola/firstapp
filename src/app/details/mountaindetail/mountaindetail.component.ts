import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService, Card } from 'src/app/services/card.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mountaindetail',
  templateUrl: './mountaindetail.component.html'
})
export class MountaindetailComponent implements OnInit {
  mountainForm:FormGroup; // creamos el formgroup
  edits:boolean;          // esta para que aparezca el boton editar
  save:boolean;           //esta es para que aparezca el boton guardar y cancelar


 @Input() card : Card;  // usamos el decorador input para que la variable card se rellene desde el html(que estos datos vienen del ts del padre)




  constructor( private fb: FormBuilder, //hay que darle nombre al grupo
    private _cardService :CardService,
    private router:Router) {
  
   }

  ngOnInit() {  //aqui inicializamos todo lo que queremos que empieze en el momento que se inicie la app
    this.mountainForm = this.fb.group({       //creamos los controles, en este caso solo usaremos bio, y le pasamos un valor y lo ponemos en disabled
      bio:[{value : this.card.bio,
              disabled : true}],
      name:[{value : this.card.nombre,
              disabled : true}]
    });
    
    this.edits = true;  //pone el texto en false para que sea editable
    this.save = false;  // boton guardar y cancelar ocultos

  }

 IamMountain()  // creamos una funcion unica para esta tarjeta para que cree un alert cada vez que pulsamos el boton
 {
   alert("Soy Montaña");
 }

 edit(){  //función editar
   console.log(this.mountainForm);
   this.mountainForm.controls.bio.enable();  //instanciamos el mountainform, y mas en concreto atacamos a los controles y a la bio le pasamos un metodo ya definido para poner el texto editable
   this.mountainForm.controls.name.enable();
   this.edits = false; // aqui en este caso solo lo usamos para que desparezca el boton editar 
   this.save = true;   // pone los botones guardar y cancelar en true para que sean visibles
 }
 saves(){ //función guardar
  // console.log(this.mountainForm.value.bio);
   // instancia al servicio, crea una funcion para usarla en el cardservice y le pasa como parametros la id y en este caso el valor del mountainform y mas en concreto el value de la bio
  this._cardService.upadateCardById(this.card); 
   this.mountainForm.controls.bio.disable();  // vuelvo a poner el texto en disabled
   this.mountainForm.controls.name.disable();
  this.router.navigate(['/home']);            // redirección a la home
  // console.log(this._cardService);
  
   
 }

 cancel(){ // funcion cancelar
  //  console.log (this.mountainForm);
   this.mountainForm.patchValue({    // uso el pathvalue para poder modificar el texto actual y volver a que tenia inicialmente, le digo que del mountainform me haga pathvalue
    bio : this.card.bio,              // y mas en concreto que a la vio le asigne el valor del card.bio
    name :this.card.nombre
  });
  //  console.log (bio);
 }

 
 

}

