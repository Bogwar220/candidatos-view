import { Component, OnInit } from '@angular/core';
import { Tecnologia } from '../tecnologia/tecnologia.component';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-add-tecnologia',
  templateUrl: './add-tecnologia.component.html',
  styleUrls: ['./add-tecnologia.component.css']
})
export class AddTecnologiaComponent implements OnInit {

  mensaje : string = "";

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.mensaje;
  }

  getTec(){
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    if(nombre == ""){
      nombre = null;
    }
    var descripcion = (<HTMLInputElement>document.getElementById("descripcion")).value;
    if(descripcion == ""){
      descripcion = null;
    }

    let tecnologia = new Tecnologia();
    tecnologia.nombre = nombre;
    tecnologia.descripcion = descripcion;

    return tecnologia;
  }

  addTec(){
    this.mensaje = this.getTec().nombre + " añadida.";
    this.rest.addTecnologia(this.getTec()).subscribe(res =>{
      console.log(this.getTec());
    })
  }

}
