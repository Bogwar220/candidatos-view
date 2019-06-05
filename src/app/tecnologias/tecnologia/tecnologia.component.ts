import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

export class Tecnologia{
  constructor(){}
  id: number;
  nombre;
  descripcion;
}

@Component({
  selector: 'tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {

  tecnologias : any = [];
  tecnologia = new Tecnologia();

  constructor(private rest:  RestService) { }

  ngOnInit() {
    this.tecnologias = [];
    this.rest.getTecnologias().subscribe((data) => this.tecnologias = data);
  }

  delTec(tecId: number){
    let tecnologia = new Tecnologia();
    tecnologia.id = tecId;
    this.rest.delTecnologia(tecnologia).subscribe(res => {
      this.ngOnInit();
    })
  }

  modifTec(tecnologia: Tecnologia){
    this.rest.tecViaja(tecnologia);
  }

}
