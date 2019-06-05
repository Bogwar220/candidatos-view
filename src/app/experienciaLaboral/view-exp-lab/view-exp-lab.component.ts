import { Component, OnInit } from '@angular/core';
import { Candidato } from 'src/app/candidatos/candidato/candidato.component';
import { ExpLab } from '../exp-lab/exp-lab.component';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-view-exp-lab',
  templateUrl: './view-exp-lab.component.html',
  styleUrls: ['./view-exp-lab.component.css']
})
export class ViewExpLabComponent implements OnInit {

  candidato = new Candidato();
  expLab = new ExpLab();
  constructor(private rest: RestService) { }

  ngOnInit() {
    this.candidato = this.rest.getObjCand();
    this.expLab = this.rest.getObjExpLab();
  }

}
