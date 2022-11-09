import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plandeestudio',
  templateUrl: './plandeestudio.component.html',
  styleUrls: ['./plandeestudio.component.css']
})
export class PlandeestudioComponent implements OnInit {

  constructor(private router:Router){}

  goToPage(pageName:string):void{

    this.router.navigate([`${pageName}`]);
  }

  ngOnInit(): void {
  }


}
