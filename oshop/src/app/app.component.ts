import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService ,private auth: AuthService,private route:Router){
    auth.user$.subscribe(
      user=>
     {
       if(user)
      {
        let returnUrl=localStorage.getItem('returnUrl')
        this.userService.save(user)
        console.log(returnUrl)
          if(returnUrl!='/')
            route.navigateByUrl(returnUrl)
            else
            route.navigateByUrl('/')
          
      }
     }
    )
  }
}
