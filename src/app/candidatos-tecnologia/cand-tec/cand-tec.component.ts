import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/candidatos/candidato/candidato.component';
import { RestService } from 'src/app/rest.service';
import { Tecnologia } from 'src/app/tecnologias/tecnologia/tecnologia.component';

export class CandTec{
  constructor(){}
  id: number;
  candidato: Candidato;
  tecnologia: Tecnologia;
  nivel;
}

@Component({
  selector: 'cand-tec',
  templateUrl: './cand-tec.component.html',
  styleUrls: ['./cand-tec.component.css']
})
export class CandTecComponent implements OnInit {
 
  candTecs: any = [];
  candidato = new Candidato();
  constructor(private rest: RestService) { }

  ngOnInit() {      
    this.candTecs = [];
    this.candidato = this.rest.getObjCand();   
    this.rest.getCandTecSi(this.candidato).subscribe((data) => this.candTecs = data); 
  } 
  
  modifCandTec(candTec : CandTec, nivel: String){    
    candTec.nivel = nivel;
    this. rest.putCandTec(candTec).subscribe(res => {
      this.ngOnInit();
    })
  }
}
