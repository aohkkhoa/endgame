import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user = new User()
  constructor(private _service:UserService,private router:Router) { }
 
  ngOnInit(): void {
  }
  loginUser(){
    this._service.loginuserfromremote(this.user).subscribe(
     
      async data => {
    
        sessionStorage.setItem('role',data) 
        let role = sessionStorage.getItem('role')
        console.log(role)
        this.router.navigate(['home'])
        sessionStorage.setItem('username',this.user.username)
        let user = sessionStorage.getItem('username')
        console.log(user)
        window.location.reload(await this.router.navigate(['home']))
      },
      
      error => console.log("error")
    )
  }
}
