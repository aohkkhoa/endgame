import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.scss']
})
export class AddmovieComponent implements OnInit {
  movie = new Movie();
  msg='';
  path: String;

  imgSrc: string ;
  selectImage: any;
  isSubmitted: boolean;
  formTemplate = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('',Validators.required)
  })
  constructor(private service: UserService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
  }
  createProduct(){
    this.service.createProductFromRemote(this.movie).subscribe(
      data =>{
        const formData = new FormData();
        formData.append('name',JSON.stringify(this.movie.name));
        console.log(data);
        this.router.navigate(['/movie'])
      },
      error =>{
        console.log("exception occured");
        this.msg=error.console.error();   
      }
    )
  }
  upload(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectImage = event.target.files[0];
    }else{
      this.imgSrc = './assets/menu/img/click_image.png';
      this.selectImage = null;
    }
  }
  get formControls(){
    return this.formTemplate['controls'];
  }
}
