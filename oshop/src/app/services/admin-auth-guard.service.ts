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
      
      // this.auth.user$
      //  .subscribe(user => 
      //   {
      //   if(user!==null)
      //   {  
      //   let appUser=this.userService.getUser(user.uid)
      //   appUser.subscribe(userInfo=>{
      //     if(userInfo.isAdmin)
      //     this.isAdminUser= true
      //     else
      //     this.isAdminUser= false
      //   })
      // }
      // else
      // return Observable.of(false)
      //   }
      // )
      
      return Observable.of(true)

    }
   
}
