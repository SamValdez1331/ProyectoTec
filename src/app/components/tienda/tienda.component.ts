import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {


  constructor(private router:Router){}

  goToPage(pageName:string):void{

    this.router.navigate([`${pageName}`]);
  }

}
