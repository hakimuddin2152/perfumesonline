import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

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
        this.userService.save(user)
       route.navigateByUrl(localStorage.getItem('returnUrl'))
      }
     }
    )
  }
}