import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardsComponent } from './shared/cards/cards.component';
import { VistaDetalleComponent } from './vista-detalle/vista-detalle.component';
import { MountainComponent } from './shared/cards/mountain/mountain.component';
import { BeachComponent } from './shared/cards/beach/beach.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardsComponent,
    VistaDetalleComponent,
    MountainComponent,
    BeachComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
