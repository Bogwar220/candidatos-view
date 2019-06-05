import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Router } from '@angular/router';

export class User{
  constructor(){}
  id;
  conn: boolean = false;
  nombre;
  pass;
}

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = new User(); 
  constructor(private rest: RestService, private router: Router) { }

  ngOnInit() {       
    this.user;    
    if(this.user.conn == false){
      this.router.navigateByUrl('');
    } 
  }

  buildUser(){
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    if(nombre == ""){
      nombre = null;
    }

    var pass = (<HTMLInputElement>document.getElementById("pass")).value;
    if(pass == ""){
      pass= null;
    }

    let user = new User();
    user.nombre = nombre;
    user.pass = pass;

    return user;
  }

  getUser(){    
    console.log(this.buildUser().nombre, this.buildUser().pass); 
    this.rest.getUser(this.buildUser().nombre, this.buildUser().pass).subscribe((data) => Object.assign(this.user,data));  
    console.log(this.user.id);  
    if(this.user.id == null){
      this.user.conn = false;      
      this.ngOnInit();
    }else{
      this.user.conn = true;      
      this.ngOnInit();
    }    
  }
  
  desc(){
    this.user.conn = false;
    this.user = new User();
    this.ngOnInit();
  }
}
