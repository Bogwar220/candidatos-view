import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Titulo } from '../titulo/titulo.component';

@Component({
  selector: 'app-edit-titulo',
  templateUrl: './edit-titulo.component.html',
  styleUrls: ['./edit-titulo.component.css']
})
export class EditTituloComponent implements OnInit {

  titulo = new Titulo();
  constructor(private rest: RestService) { }

  ngOnInit() {
    this.titulo = this.rest.getObjTit();
  }

  getTitulo(){
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    if(nombre == ""){
      nombre = this.titulo.nombre;
    }

    var centro = (<HTMLInputElement>document.getElementById("centro")).value;
    if(centro == ""){
      centro = this.titulo.centro;
    }

    var nivelEd = (<HTMLInputElement>document.getElementById("nivelEd")).value;
    if(nivelEd == ""){
      nivelEd = this.titulo.nivelEd;
    }

    var fechaExp = (<HTMLInputElement>document.getElementById("fechaExp")).value;
    if(fechaExp == "" ){
      fechaExp = this.titulo.fechaExp;
    }

    let titulo = new Titulo;
    titulo.id = this.titulo.id;
    titulo.candidato = this.titulo.candidato;
    titulo.nombre = nombre;
    titulo.centro = centro;
    titulo.nivelEd = nivelEd;
    titulo.fechaExp = fechaExp;

    return titulo;
  }

  editTitulo(){
    this.rest.putTitulo(this.getTitulo()).subscribe(res =>{
      this.ngOnInit();
      this.titulo = this.getTitulo();
    })
  }

}
