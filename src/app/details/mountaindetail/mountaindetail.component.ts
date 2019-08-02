import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService, Card } from 'src/app/services/card.service';

@Component({
  selector: 'app-mountaindetail',
  templateUrl: './mountaindetail.component.html'
})
export class MountaindetailComponent implements OnInit {
  
 @Input() card : Card;


  constructor() {
  
   }

  ngOnInit() {
  }

 IamMountain()
 {
   alert("Soy Montaña");
 }

}

