import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';
import { UserService } from '../user.service';

@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrls: ['./updatemovie.component.scss']
})
export class UpdatemovieComponent implements OnInit {
  id: number;
  movie: Movie;
  constructor( private service: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.movie = new Movie();
  
      this.id = this.route.snapshot.params['id'];
      this.service.getProductById(this.id).subscribe(
        data => {
          console.log(data);
          this.movie = data;
        },
        error => {
          console.log("ERROR"+ error);
        }
      )
    }
    updateProduct(): void{
      this.service.updateProduct(this.id, this.movie).subscribe(
        data => {
          console.log(data);
          this.movie = new Movie();
          this.router.navigate(['/movie']);
        },
        error => {
          console.log("ERROR"+ error);
        }
      )
    }

}
