import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AuthorComponent } from './author/author.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path : '',redirectTo : '/login',pathMatch : 'full'},
  
  {path : 'home',canActivate:[AuthGuard],component : HomeComponent },
  {path : 'article/:id',canActivate:[AuthGuard],component : DetailComponent },
  {path : 'create', canActivate:[AuthGuard],component : CreatearticleComponent },
  {path : 'about',canActivate:[AuthGuard],component : AboutComponent },
  {path : 'privacy',canActivate:[AuthGuard],component : PrivacyComponent },
  {path : 'author/:id',component : AuthorComponent },
  {path : 'login',component : LoginComponent },
  {path : 'register',component : RegisterComponent },

  {path : '**',component : NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
