import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { User } from '../user/user.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  mensaje : string;
  constructor(private rest: RestService) { }

  ngOnInit() {
    this.mensaje;
  }

  getUser(){
    var nombre = (<HTMLInputElement>document.getElementById("nombre1")).value;
    var pass1 = (<HTMLInputElement>document.getElementById("pass1")).value;
    var pass2 = (<HTMLInputElement>document.getElementById("pass2")).value;
    if(nombre != null && pass1 != null && pass1 == pass2){
      let user = new User();
      user.nombre = nombre;     
      user.pass = pass1;      
      return user;
    }else{return null;}
  }

  addUser(){
    if(this.getUser().nombre != null){
      this.mensaje = this.getUser().nombre + " creado.";
    }
    this.rest.addUser(this.getUser()).subscribe(res =>{
      console.log(this.getUser());
    })
  }
}
