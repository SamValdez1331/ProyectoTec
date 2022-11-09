import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  constructor(private router:Router){}

  goToPage(pageName:string):void{

    this.router.navigate([`${pageName}`]);
  }

  ngOnInit(): void {
  }

}
