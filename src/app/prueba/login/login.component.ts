import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: RestService) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.auth.getUser(username, password).subscribe((data) => console.log(data));  
    console.log(username, password);
  }
}
