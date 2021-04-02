import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userr :string;
  roless: string;
  title = 'moviebooking';


  constructor(public service:UserService){
    this.userr=sessionStorage.getItem('username')||'{}'
    this.roless=sessionStorage.getItem('role')||'{}'
  }
}
