import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn:'root',
})
export class AuthGuard implements CanActivate  {
constructor(private auth :AuthService,private router:Router){}
  
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  if(this.auth.isLoggedIn()){
      return true;
} else{
  this.router.navigate(['/login']);
  return false;
}


}}