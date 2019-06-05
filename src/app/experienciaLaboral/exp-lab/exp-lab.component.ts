import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Candidato } from 'src/app/candidatos/candidato/candidato.component';

export class ExpLab{
  constructor(){}
  id;
  puesto;
  empresa;
  funciones;
  cliente;
  fechaIni;
  fechaFin;
  candidato : Candidato;
}

@Component({
  selector: 'app-exp-lab',
  templateUrl: './exp-lab.component.html',
  styleUrls: ['./exp-lab.component.css']
})
export class ExpLabComponent implements OnInit {

  candidato = new Candidato();
  expsLab:any=[]
  constructor(private rest: RestService) { }

  ngOnInit() {
    this.candidato = this.rest.getObjCand();
    this.expsLab = [];
    this.rest.getExpLab(this.candidato).subscribe((data) => this.expsLab = data);
  }

  delExpLab(expLab : ExpLab){
    this.rest.delExpLab(expLab).subscribe(res => {
      this.ngOnInit();
      console.log(expLab);
    })
  }

  getExpLab(expLab: ExpLab){
    this.rest.expLabViaja(expLab);
  }

}
