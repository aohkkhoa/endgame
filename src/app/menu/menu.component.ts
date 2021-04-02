import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { UserService } from '../user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  movie: Movie[];
  
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.service.getAllListProduct().subscribe(
      data => {
        this.movie = data;
        console.log(data);
      },
      error => {
        console.log('ERROR'+ error);
      }
    )
  }

}
