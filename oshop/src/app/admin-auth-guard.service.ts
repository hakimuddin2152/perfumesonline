import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router/src/interfaces';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';
import { switchMap } from 'rxjs/operator/switchMap'


@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth:AuthService,private userService: UserService )
     { 
          
     }
     isAdminUser:boolean;
     canActivate() :Observable<boolean> {
      
      this.auth.user$
       .subscribe(user => 
        {
        let appUser=this.userService.getUser(user.uid)
        console.log(appUser)
        appUser.subscribe(userInfo=>{
          console.log(userInfo.isAdmin)
          if(userInfo.isAdmin)
          this.isAdminUser= true
          else
          this.isAdminUser= false
        })
        }
      )
      
      return Observable.of(this.isAdminUser)

    }
   
}
