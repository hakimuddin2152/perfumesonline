import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Router, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router/src/interfaces';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';
import { switchMap } from 'rxjs/operator/switchMap'


@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth:AuthService,private userService: UserService,private route:Router )
     { 
          
     }
     isAdminUser:boolean;

     canActivate(route,state:RouterStateSnapshot) :Observable<boolean> {
      
      this.auth.user$
       .subscribe(user => 
        {
        if(user!==null)
        {  
        let appUser=this.userService.getUser(user.uid)
        appUser.subscribe(userInfo=>{
          if(userInfo.isAdmin)
          this.isAdminUser= true
          else
          this.isAdminUser= false
        })
      }
      else
      return Observable.of(false)
        }
      )
      this.route.navigate(['/login'],{queryParams:{returnUrl:state.url}})
      return Observable.of(this.isAdminUser)

    }
   
}
