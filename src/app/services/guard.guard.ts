import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  
  constructor(private authService:AuthService, private rutas:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let currentUser = this.authService.usuarioAuth;

      if(currentUser && currentUser.accessToken){
        return true;
      }else{
        console.log("Entre por aca para ir a login");
        this.rutas.navigate(["/login"]);
        return false;
      }
  }
  
}
