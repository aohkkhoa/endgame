import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { UserService } from '../user.service';

@Component({
  selector: 'app-managemovie',
  templateUrl: './managemovie.component.html',
  styleUrls: ['./managemovie.component.scss']
})
export class ManagemovieComponent implements OnInit {
  movie:Movie[];
  currentProduct ?: Movie;
  currentIndex = -1;
  name='';
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
  setActiveProduct(product: Movie, index: number): void{
    this.currentProduct = product;
    this.currentIndex = index;
  }

  deleteProduct(id: number){
    this.service.deleteProduct(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }
  searchName():void{
    this.currentProduct = undefined;
    this.currentIndex = -1;

    this.service.findByName(this.name).subscribe(
      data => {
        this.movie = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  selectUpdate(id: number){
    this.router.navigate(['update', id])
  }
}
