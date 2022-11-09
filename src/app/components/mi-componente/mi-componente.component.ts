import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'mi-componente',
  templateUrl:'./mi-componente.component.html'
})
export class MiComponente implements OnInit {

    public myForm!:FormGroup;

    constructor(private fb:FormBuilder, private router:Router, private login:ServiciosService){}
    
    ngOnInit(): void {

        this.myForm = this.createMyForm();
    }

    private createMyForm():FormGroup{

        return this.fb.group({
            usuario:['',[Validators.required]],
            password:['',Validators.required]
        });
    }   

    public SubmitFormulario(){
        
        if(this.myForm.invalid){
            
            Object.values(this.myForm.controls).forEach(control => {
                control.markAllAsTouched();
            });

            return;
        }

        if(!this.login.ingresarAplicativo(this.myForm.value)){
            alert("Usuario o contrase;a invalidos")
        }

        alert("se envio");
    }
  
    goToPage(pageName:string):void{
  
      this.router.navigate([`${pageName}`]);
    }
}
