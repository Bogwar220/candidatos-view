import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/candidatos/candidato/candidato.component';
import { RestService } from 'src/app/rest.service';
import { Titulo } from '../titulo/titulo.component';

@Component({
  selector: 'app-add-titulo',
  templateUrl: './add-titulo.component.html',
  styleUrls: ['./add-titulo.component.css']
})
export class AddTituloComponent implements OnInit {

  mensaje: string = "";
  candidato = new Candidato();

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.candidato = this.rest.getObjCand();
    this.mensaje;
  }

  getTitulo(){
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    if(nombre == ""){
      nombre = null;
    }
    var centro = (<HTMLInputElement>document.getElementById("centro")).value;
    if(centro == ""){
      centro = null;
    }

    var nivelEd = (<HTMLInputElement>document.getElementById("nivelEd")).value;
    if(nivelEd == ""){
      nivelEd = null;
    }
    var fechaExp = (<HTMLInputElement>document.getElementById("fechaExp")).value;
    
    let titulo = new Titulo();
    titulo.candidato = this.candidato;
    titulo.nombre = nombre;
    titulo.centro = centro;
    titulo.nivelEd = nivelEd;
    titulo.fechaExp = fechaExp;

    return titulo;
  }

  addTitulo(){
    this.mensaje = "Titulo guardado";
    this.rest.addTitulo(this.getTitulo()).subscribe(res => {
      console.log(this.getTitulo());
    })
  }

}
