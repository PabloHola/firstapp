import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaDetalleComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path : 'vistadetalle/:id', component: VistaDetalleComponent},  
  {path : '**', component: HomeComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const APP_ROUTING =RouterModule.forRoot(routes);
