import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Candidato } from '../candidato/candidato.component';

@Component({
  selector: 'app-view-candidato',
  templateUrl: './view-candidato.component.html',
  styleUrls: ['./view-candidato.component.css']
})
export class ViewCandidatoComponent implements OnInit {

  candidato = new Candidato();
  constructor(private rest: RestService) { }

  ngOnInit() {
    this.candidato = this.rest.getObjCand();
  }

}
