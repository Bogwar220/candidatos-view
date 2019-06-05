import { Component, OnInit } from '@angular/core';
import { Tecnologia } from '../tecnologia/tecnologia.component';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-edit-tecnologia',
  templateUrl: './edit-tecnologia.component.html',
  styleUrls: ['./edit-tecnologia.component.css']
})
export class EditTecnologiaComponent implements OnInit {

  tecnologia = new Tecnologia();
  mensaje : string = "";

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.mensaje;
    this.tecnologia = this.rest.getObjTec();
  }

  getTec(){
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    if(nombre == ""){
      nombre = this.tecnologia.nombre;
    }
    var descripcion = (<HTMLInputElement>document.getElementById("descripcion")).value;
    if(descripcion == ""){
      descripcion = this.tecnologia.descripcion;
    }

    let tecnologia = new Tecnologia();
    tecnologia.id = this.tecnologia.id;
    tecnologia.nombre = nombre;
    tecnologia.descripcion = descripcion;

    return tecnologia;
  }

  modifTec(){
    this.mensaje = this.getTec().nombre+ " modificado.";
    this.rest.putTecnologia(this.getTec()).subscribe(res => {
      this.ngOnInit();
      this.tecnologia = this.getTec();
    })
  }  
}
