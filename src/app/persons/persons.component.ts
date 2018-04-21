import { Component, OnInit } from '@angular/core';
import {AppServiceModule} from '../shared/app.service.module';
import {AppUrls} from '../config/constant.config';
import {GridOptions} from 'ag-grid';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  public gridOptions: GridOptions;
  public rowSelection;
  public usersMeta: any = {};
  constructor(private appService: AppServiceModule, private appUrls: AppUrls) {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.rowData = [];
    this.rowSelection = 'multiple';
    this.gridOptions.columnDefs = [
      {headerName: 'Name', field: 'first_name'},
      {headerName: 'Email', field: 'email'},
      {headerName: 'Mobile', field: 'mobile_number'},
      {headerName: 'Registered on ', field: '_created'},
      {headerName: 'Gender', field: 'gender'},
      {headerName: 'Status', field: 'status'}
    ];
  }
  ngOnInit () {
    console.log(this.appUrls.books_list);
    this.appService.get(this.appUrls.users).subscribe((data) => {
      console.log(data);
      this.usersMeta = data['_meta'];
      this.gridOptions.api.setRowData(data['_items']);
    });
  }

}
