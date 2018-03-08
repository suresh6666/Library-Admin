import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish-book',
  templateUrl: './publish-book.component.html',
  styleUrls: ['./publish-book.component.css']
})
export class PublishBookComponent implements OnInit {
  trueFalseArray: any[];
  languages: any[];
  constructor() { }

  ngOnInit() {
    this.trueFalseArray = [
      {text: 'Yes', val: true},
      {text: 'No', val: false}
    ];
    this.languages = [
      {text: 'Telugu', val: 'telugu'},
      {text: 'English', val: 'english'}
    ];
  }

}
