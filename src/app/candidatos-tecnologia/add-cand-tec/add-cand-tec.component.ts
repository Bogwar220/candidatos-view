import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Candidato } from 'src/app/candidatos/candidato/candidato.component';
import { Tecnologia } from 'src/app/tecnologias/tecnologia/tecnologia.component';
import { CandTec } from '../cand-tec/cand-tec.component';

@Component({
  selector: 'add-cand-tec',
  templateUrl: './add-cand-tec.component.html',
  styleUrls: ['./add-cand-tec.component.css']
})
export class AddCandTecComponent implements OnInit {

  tecNos : any = [];
  candTecs : any = [];
  candidato = new Candidato();
  constructor(private rest: RestService) { }

  ngOnInit() {
    this.tecNos = []; 
    this.candTecs = [];   
    this.candidato = this.rest.getObjCand();
    this.rest.getCandTecNo(this.candidato).subscribe((data) => this.tecNos = data);
    this.rest.getCandTecSi(this.candidato).subscribe((data) => this.candTecs= data); 
  }

  addTec(tecnologia: Tecnologia){
    let candTec = new CandTec();
    candTec.candidato = this.candidato;
    candTec.tecnologia = tecnologia;
    this.rest.addCandTec(candTec).subscribe(res => {
      console.log(candTec);
      this.ngOnInit();
    })
  }

  delTec(candTec: CandTec){    
    this.rest.delCandTec(candTec).subscribe(res => {
      console.log(candTec);
      this.ngOnInit();
    })
  }
}
