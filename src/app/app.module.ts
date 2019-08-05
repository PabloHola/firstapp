import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardsComponent } from './shared/cards/cards.component';
import { VistaDetalleComponent } from './details/details.component';
import { MountainComponent } from './shared/cards/mountain/mountain-card.component';
import { BeachComponent } from './shared/cards/beach/beach-card.component';
import { MountaindetailComponent } from './details/mountaindetail/mountaindetail.component';
import { BeachdetailComponent } from './details/beachdetail/beachdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardsComponent,
    VistaDetalleComponent,
    MountainComponent,
    BeachComponent,
    MountaindetailComponent,
    BeachdetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
