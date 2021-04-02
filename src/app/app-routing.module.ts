import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { LoginComponent } from './login/login.component';
import { ManagemovieComponent } from './managemovie/managemovie.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { UpdatemovieComponent } from './updatemovie/updatemovie.component';

const routes: Routes = [
  {path:'home', component:MenuComponent},
  {
    path:'', component:MenuComponent
  },
  {
    path:'login',component:LoginComponent
  },
 {
   path:'signup',component:SignupComponent
 },
{
path:'movie', component:ManagemovieComponent
},
{
  path:'update/:id', component:UpdatemovieComponent
},
{
  path:'add',component:AddmovieComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
