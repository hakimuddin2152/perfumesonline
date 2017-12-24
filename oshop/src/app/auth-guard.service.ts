import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router/src/interfaces';
import 'rxjs/add/operator/map'
import { RouterStateSnapshot } from '@angular/router/src/router_state';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService, private route:Router) { }
  canActivate(route,state:RouterStateSnapshot) {
    return this.auth.user$.map(user=>
      {
        if(user) 
        return true;
      this.route.navigate(['/login'],{queryParams:{returnUrl:state.url}}).then(

      )
      return false;
    })
  }
}
