import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Candidato } from 'src/app/candidatos/candidato/candidato.component';

export class Titulo{
  id;
  nombre;
  centro;
  nivelEd;
  fechaExp;
  candidato: Candidato;
}
@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  
  candidato = new Candidato();
  titulos: any = [];
  constructor(private rest: RestService) { }

  ngOnInit() {
    this.candidato = this.rest.getObjCand();
    this.titulos = [];
    this.rest.getTitulo(this.candidato).subscribe((data) => this.titulos = data);
  }

  delTitulo(titulo: Titulo){
    this.rest.delTitulo(titulo).subscribe(res => {
      this.ngOnInit();
      console.log(titulo);
    })
  }

  getTitulo(titulo: Titulo){
    this.rest.tituloViaja(titulo);
  }

}
