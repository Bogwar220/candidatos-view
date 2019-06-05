import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Candidato } from 'src/app/candidatos/candidato/candidato.component';
import { ExpLab } from '../exp-lab/exp-lab.component';

@Component({
  selector: 'app-edit-exp-lab',
  templateUrl: './edit-exp-lab.component.html',
  styleUrls: ['./edit-exp-lab.component.css']
})
export class EditExpLabComponent implements OnInit {

  candidato = new Candidato();
  expLab = new ExpLab();
  constructor(private rest: RestService) { }

  ngOnInit() {
    this.candidato = this.rest.getObjCand();
    this.expLab = this.rest.getObjExpLab();
  }

  getExpLab(){
    var puesto = (<HTMLInputElement>document.getElementById("puesto")).value;
    if(puesto == ""){
      puesto = this.expLab.puesto;
    }
    var empresa = (<HTMLInputElement>document.getElementById("empresa")).value;
    if(empresa == ""){
      empresa = this.expLab.empresa;
    }
    var funciones = (<HTMLInputElement>document.getElementById("funciones")).value;
    if(funciones == ""){
      funciones = this.expLab.funciones;
    }
    var cliente = (<HTMLInputElement>document.getElementById("cliente")).value;
    if(cliente == ""){
      cliente = this.expLab.cliente;
    }
    var fechaIni = (<HTMLInputElement>document.getElementById("fechaIni")).value;
    if(fechaIni ==""){
      fechaIni = this.expLab.fechaIni;
    }
    var fechaFin = (<HTMLInputElement>document.getElementById("fechaFin")).value;
    if(fechaFin == ""){
      fechaFin = this.expLab.fechaFin;
    }

    let expLab = new ExpLab();
    expLab.id = this.expLab.id;
    expLab.candidato = this.expLab.candidato;
    expLab.puesto = puesto;
    expLab.empresa = empresa;
    expLab.funciones = funciones;
    expLab.cliente = cliente;
    expLab.fechaIni = fechaIni;
    expLab.fechaFin = fechaFin;

    return expLab;
  }

  modifExpLab(){
    this.rest.putExpLab(this.getExpLab()).subscribe(res => {
      this.ngOnInit();
      console.log(this.getExpLab());
      this.expLab = this.getExpLab();
    })
  }

}
