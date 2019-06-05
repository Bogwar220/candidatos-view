
import { Component, OnInit } from '@angular/core';
import { Candidato } from '../candidato/candidato.component';
import { RestService } from 'src/app/rest.service';
@Component({
  selector: 'app-add-candidato',
  templateUrl: './add-candidato.component.html',
  styleUrls: ['./add-candidato.component.css']
})

export class AddCandidatoComponent implements OnInit {

  mensaje : string = "";
  constructor(private rest: RestService) { }

  ngOnInit() {
    this.mensaje;
  }

  getCand(){
    var nombre =(<HTMLInputElement>document.getElementById("nombre")).value;
    if(nombre == ""){
      nombre = null;
    }
    var apellido1 = (<HTMLInputElement>document.getElementById("apellido1")).value;
    if(apellido1 == ""){
      apellido1 = null;
    }
    var apellido2 = (<HTMLInputElement>document.getElementById("apellido2")).value;
    if(apellido2 == ""){
      apellido2 = null;
    }
    var dni = (<HTMLInputElement>document.getElementById("dni")).value;
    if(dni == ""){
      dni = null;
    }
    var direccion = (<HTMLInputElement>document.getElementById("direccion")).value;
    if(direccion == ""){
      direccion = null;
    }
    var poblacion = (<HTMLInputElement>document.getElementById("poblacion")).value;
    if(poblacion == ""){
      poblacion = null;
    }
    var cp = (<HTMLInputElement>document.getElementById("cp")).value;
    if(cp == ""){
      cp = "0";
    }
   
    var email = (<HTMLInputElement>document.getElementById("email")).value;
    if(email == ""){
      email = null;
    }
    var tlf = (<HTMLInputElement>document.getElementById("tlf")).value;
    if(tlf == ""){
      tlf = null;
    }
    var fechaNac = (<HTMLInputElement>document.getElementById("fechaNac")).value;
    var fechaAlta = (<HTMLInputElement>document.getElementById("fechaAlta")).value;
    var fechaBaja = (<HTMLInputElement>document.getElementById("fechaBaja")).value;

    let candidato = new Candidato();
    candidato.nombre = nombre;
    candidato.apellido1 = apellido1;
    candidato.apellido2 = apellido2;
    candidato.dni = dni;
    candidato.direccion = direccion;
    candidato.poblacion = poblacion;
    candidato.cp = cp;
    candidato.email = email;
    candidato.tlf = tlf;
    candidato.fechaNac = fechaNac;
    candidato.fechaAlta = fechaAlta;
    candidato.fechaBaja = fechaBaja;

    return candidato;
  }

  addCand(){
    console.log(this.getCand());
    this.mensaje = this.getCand().nombre + " añadido.";
    this.rest.addCandidato(this.getCand()).subscribe(res =>{
      console.log(this.getCand());
    })
  }
}
