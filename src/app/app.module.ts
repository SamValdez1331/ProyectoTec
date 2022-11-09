import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { PlandeestudioComponent } from './components/plandeestudio/plandeestudio.component';
import { CarrerasComponent } from './components/carreras/carreras.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { MenuComponent } from './components/menu/menu.component';

const router: Routes = [

  {path:'', component: MiComponente},
  {path:'menu', component: EntradaComponent},
  {path:'planes', component: PlandeestudioComponent},
  {path:'carreras', component: CarrerasComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    EntradaComponent,
    PlandeestudioComponent,
    CarrerasComponent,
    NavegadorComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
