import { Component, OnInit } from '@angular/core';
import { GridOptions, GridApi } from 'ag-grid';
import {AppServiceModule} from '../shared/app.service.module';
import {AppUrls} from '../config/constant.config';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public gridOptions: GridOptions;
  public rowSelection;
  constructor(private appService: AppServiceModule, private appUrls: AppUrls) {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.rowData = [];
    this.rowSelection = 'multiple';
    this.gridOptions.columnDefs = [
      {
        headerName: 'Book Title',
        field: 'book_title',
      },
      {
        headerName: 'Author',
        field: 'book_author'
      },
      {
        headerName: 'Book Image',
        field: 'book_image'
      },
      {
        headerName: 'ISBN',
        field: 'isbn',
        width: 100
      },
      {
        headerName: 'Lease Price',
        field: 'lease_price',
        width: 100
      },
      {
        headerName: 'Languages',
        field: 'languages',
        width: 100
      },
      {
        headerName: 'Year',
        field: 'year',
        width: 100
      },
      {
        headerName: 'No.of Pages',
        field: 'number_of_pages',
        width: 100
      },
      {
        headerName: 'Book Summary',
        field: 'book_summary',
        width: 100
      },
      {
        headerName: 'Id',
        field: 'id',
        width: 100
      },
      {
        headerName: 'Value',
        field: 'value',
        width: 100
      },
      {
        headerName: 'Id',
        field: 'id',
        width: 100
      },
      {
        headerName: 'Value',
        field: 'value',
        width: 100
      }

    ];
  }
  ngOnInit () {
    console.log(this.appUrls.books_list);
    this.appService.get(this.appUrls.books_list).subscribe((data) => {
      const items: any = data;
      this.gridOptions.api.setRowData(items);
    });
  }
}
