import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/candidatos/candidato/candidato.component';
import { RestService } from 'src/app/rest.service';
import { ExpLab } from '../exp-lab/exp-lab.component';

@Component({
  selector: 'app-add-exp-lab',
  templateUrl: './add-exp-lab.component.html',
  styleUrls: ['./add-exp-lab.component.css']
})
export class AddExpLabComponent implements OnInit {

  mensaje :string = "";
  candidato = new Candidato();

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.candidato = this.rest.getObjCand();
    this.mensaje;
  }

  getExpLab(){
    var puesto = (<HTMLInputElement>document.getElementById("puesto")).value;
    if(puesto == ""){
      puesto = null;
    }
    var empresa = (<HTMLInputElement>document.getElementById("empresa")).value;
    if(empresa == ""){
      empresa = null;
    }
    var funciones = (<HTMLInputElement>document.getElementById("funciones")).value;
    if(funciones == ""){
      funciones = null;
    }
    var cliente = (<HTMLInputElement>document.getElementById("cliente")).value;
    if(cliente == ""){
      cliente = null;
    }
    var fechaIni = (<HTMLInputElement>document.getElementById("fechaIni")).value;
    var fechaFin = (<HTMLInputElement>document.getElementById("fechaFin")).value;

    let expLab = new ExpLab();
    expLab.candidato = this.candidato;
    expLab.puesto = puesto;
    expLab.empresa = empresa;
    expLab.funciones = funciones;
    expLab.cliente = cliente;
    expLab.fechaIni = fechaIni;
    expLab.fechaFin = fechaFin;

    return expLab;
  }

  addExpLab(){
    this.mensaje = "Experiencia guardada";
    this.rest.addExpLab(this.getExpLab()).subscribe(res =>{
      console.log(this.getExpLab());
    })
  }

}
