import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { MiComponente } from '../app/components/mi-componente/mi-componente.component';
import { TiendaComponent} from '../app/components/tienda/tienda.component';
import { PlandeestudioComponent } from '../app/components/plandeestudio/plandeestudio.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { CarrerasComponent } from './components/carreras/carreras.component';
import { RegistroComponent } from './components/registro/registro.component';

const router: Routes = [

  {path:'login', component: MiComponente},
  {path:'menu', component: EntradaComponent},
  {path:'planes', component: PlandeestudioComponent},
  {path:'carreras', component: CarrerasComponent},

  { path: 'registro', component: RegistroComponent },

  { path: '**', redirectTo: 'registro' }
]

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
