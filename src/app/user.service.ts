import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:8080/login";
  private url = "http://localhost:8080/registuser";

  constructor(private http:HttpClient) { }
  public loginuserfromremote(user :User):Observable<any>{
    return this.http.post("http://localhost:8080/login",user,{responseType : "text" as "json"});
  }
  getAllListProduct():Observable<any>{
    return this.http.get("http://localhost:8080/product/getallproduct");
  }
  getAllListKindProduct():Observable<any>{
    return this.http.get("http://localhost:8080/kindproduct/getallkind");
  }
  getProductById(id: any):Observable<Movie>{
    return this.http.get<Movie>("http://localhost:8080/product/getproduct/"+`${id}`);
  }
  updateProduct(id: number, data: any): Observable<any> {
    return this.http.put("http://localhost:8080/product/update/"+`${id}`,data);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete("http://localhost:8080/product/delete/"+`${id}`, { responseType: 'text' });
  }

  findByName(name:any): Observable<Movie[]>{
    return this.http.get<Movie[]>("http://localhost:8080/product/getallproduct?name="+`${name}`);
  }

  createProductFromRemote(product: Movie): Observable<any>{
    return this.http.post("http://localhost:8080/product/create",product);
  }
  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('role')
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  signup( user:User): Observable<object>{
      return this.http.post(`${this.url}`,user);
  }
  isAdmin(){
    let admin = sessionStorage.getItem('role')
    console.log((admin === "admin"))
    return (admin === "admin")
  }
}
