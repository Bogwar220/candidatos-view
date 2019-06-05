import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

export class Candidato{
  constructor(){}
  id: number;
  nombre;
  apellido1;
  apellido2;
  dni;
  direccion;
  poblacion;
  cp;
  email;
  tlf;
  fechaNac;
  fechaAlta;
  fechaBaja;
}

@Component({
  selector: 'candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit {

  candidatos : any = [];
  candidato = new Candidato();
  constructor(private rest: RestService) { }

  ngOnInit() {    
    this.candidatos = [];
    this.rest.getCandidatos().subscribe((data) => this.candidatos = data);
  }

  delCand(candId: number){
    let candidato = new Candidato();
    candidato.id = candId;
    this.rest.delCandidato(candidato).subscribe(res =>{
      this.ngOnInit();  
    })
  }
  getCand(candidato: Candidato){
    this.rest.candViaja(candidato);
  }
}
