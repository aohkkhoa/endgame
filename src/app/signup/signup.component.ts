import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userservice: UserService, private router : Router) {
    
   }
   user : User = new User()

  ngOnInit(): void {
  }
  save(){
    this.userservice.signup(this.user).subscribe(data =>{
        console.log(data);
        this.gotologin();
    },
    error => console.log(error));
    
  }
  gotologin() {
    this.router.navigate(['login'])
  }
  onSubmit(){
    console.log(this.user);
    this.save();
  }
}
