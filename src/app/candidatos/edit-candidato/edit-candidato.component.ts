import { Component, OnInit } from '@angular/core';
import { Candidato } from '../candidato/candidato.component';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-edit-candidato',
  templateUrl: './edit-candidato.component.html',
  styleUrls: ['./edit-candidato.component.css']
})
export class EditCandidatoComponent implements OnInit {

  candidato = new Candidato();
  mensaje : string = "";

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.mensaje;
    this.candidato = this.rest.getObjCand();
    console.log(this.candidato);
  }

  getCand(){
    var nombre =(<HTMLInputElement>document.getElementById("nombre")).value;
    if(nombre == ""){
      nombre = this.candidato.nombre;
    }
    var apellido1 = (<HTMLInputElement>document.getElementById("apellido1")).value;
    if(apellido1 == ""){
      apellido1 = this.candidato.apellido1;
    }
    var apellido2 = (<HTMLInputElement>document.getElementById("apellido2")).value;
    if(apellido2 == ""){
      apellido2 = this.candidato.apellido2;
    }
    var dni = (<HTMLInputElement>document.getElementById("dni")).value;
    if(dni == ""){
      dni = this.candidato.dni;
    }
    var direccion = (<HTMLInputElement>document.getElementById("direccion")).value;
    if(direccion == ""){
      direccion = this.candidato.direccion;
    }
    var poblacion = (<HTMLInputElement>document.getElementById("poblacion")).value;
    if(poblacion == ""){
      poblacion = this.candidato.poblacion;
    }
    var cp = (<HTMLInputElement>document.getElementById("cp")).value;
    if(cp == ""){
      cp = this.candidato.cp;
    }
   
    var email = (<HTMLInputElement>document.getElementById("email")).value;
    if(email == ""){
      email = this.candidato.email;
    }
    var tlf = (<HTMLInputElement>document.getElementById("tlf")).value;
    if(tlf == ""){
      tlf = this.candidato.tlf;
    }
    var fechaNac = (<HTMLInputElement>document.getElementById("fechaNac")).value;
    if(fechaNac == ""){
      fechaNac = this.candidato.fechaNac;
    }
    var fechaAlta = (<HTMLInputElement>document.getElementById("fechaAlta")).value;
    if(fechaAlta == ""){
      fechaAlta = this.candidato.fechaAlta;
    }
    var fechaBaja = (<HTMLInputElement>document.getElementById("fechaBaja")).value;
    if(fechaBaja == ""){
      fechaBaja = this.candidato.fechaBaja;
    }

    let candidato = new Candidato();
    candidato.id = this.candidato.id;
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

  modifCand(){
    this.mensaje = this.getCand().nombre + " modificado.";
    this.rest.putCandidato(this.getCand()).subscribe(res => {
      this.ngOnInit();
      this.candidato = this.getCand();
    });
  }
}
