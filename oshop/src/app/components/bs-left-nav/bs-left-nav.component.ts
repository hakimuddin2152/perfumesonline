import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-bs-left-nav',
  templateUrl: './bs-left-nav.component.html',
  styleUrls: ['./bs-left-nav.component.css']
})
export class BsLeftNavComponent implements OnInit {
  categories$:Observable<any>;
  constructor(private categories:CategoryService) {
    this.categories$=categories.getCategories()
    console.log(this.categories$)
   }
  
  ngOnInit() {
  }

}
