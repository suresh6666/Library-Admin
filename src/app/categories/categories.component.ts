import { Component, OnInit } from '@angular/core';
import {AppServiceModule} from '../shared/app.service.module';
import {AppUrls} from '../config/constant.config';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any = [];
  constructor(private appService: AppServiceModule,
              private appUrls: AppUrls) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories () {
    this.appService.get(this.appUrls.categories).subscribe((data: any) => {
      console.log(data);
      this.categories = data['_items'];
    }, (err) => {
      console.log(err);
    });
  }

}
