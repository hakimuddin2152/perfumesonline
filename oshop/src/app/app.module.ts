import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AngularFireModule} from 'angularfire2'
import { AngularFireAuthModule} from 'angularfire2/auth'
import { AngularFireDatabaseModule} from 'angularfire2/database'


import { HomeComponent} from './components/home/home.component'
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { environment } from '../environments/environment.prod';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { UserService } from './services/user.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    BsNavbarComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    ShoppingCartComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    MyOrdersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      
      {path:'',component:HomeComponent},
      {path:'products',component:ProductsComponent},
      {path:'shopping-cart',component:ShoppingCartComponent},
      {path:'login',component:LoginComponent},

      {path:'check-out',component:CheckOutComponent, canActivate:[AuthGuardService]},
      {path:'order-success',component:OrderSuccessComponent, canActivate:[AuthGuardService]},
      {path:'my-orders',component:MyOrdersComponent, canActivate:[AuthGuardService]},
      
      {path:'admin/products',component:AdminProductsComponent, canActivate:[AuthGuardService,AdminAuthGuardService]},
      {path:'admin/orders',component:AdminOrdersComponent, canActivate:[AuthGuardService,AdminAuthGuardService]},

    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
