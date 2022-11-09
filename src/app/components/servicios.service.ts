import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private ingresar:boolean = false;

  constructor() { }

  public ingresarAplicativo(obj:any):boolean{
    this.ingresar = obj.usuario == 'samvaldez' && obj.password == '1331';
    return this.ingresar;
    
  }
  
  public habilitarlogin(){
    return this.ingresar;
  }
}
