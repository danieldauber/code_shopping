import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials = {
    email : 'admin@user.com',
    password : 'secret'
  };

  showMessageError : boolean = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {

  }

  submit(){
    this.http.post<any>('http://server.local:8000/api/login', this.credentials)
      .subscribe((data) => {
        const token = data.token;
        window.localStorage.setItem('token', token);
        this.router.navigate(['categories/list']);


      }, () => this.showMessageError = true);

    return false;
  }


}