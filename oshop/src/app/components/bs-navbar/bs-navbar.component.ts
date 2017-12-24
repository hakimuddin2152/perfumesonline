import { AppUser } from '../../model/app-user';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: AppUser;

  constructor(private auth: AuthService,private route:Router) { 
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  logout() {
    setTimeout(() => {
      this.auth.logout();
      this.route.navigateByUrl('/')
    }, 2000);
    
  }

}
