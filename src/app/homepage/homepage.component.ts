import { Component, OnInit } from '@angular/core';
import { GridOptions, GridApi } from 'ag-grid';
import {AppServiceModule} from '../shared/app.service.module';
import {AppUrls} from '../config/constant.config';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public gridOptions: GridOptions;
  public rowSelection;
  public gridApi = <GridApi>{};
  constructor(private appService: AppServiceModule,
              private appUrls: AppUrls,
              private route: Router) {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.rowData = [];
    this.rowSelection = 'single';
    this.gridOptions.columnDefs = [{
        headerName: 'Book Title', field: 'book_title',
      }, {
        headerName: 'Author', field: 'book_authors'
      }, {
        headerName: 'Book Image', field: 'book_image'
      },
      {
        headerName: 'ISBN 13', field: 'ISBN_13', width: 100
      },
      {
        headerName: 'Lease Price', field: 'lease_price', width: 100
      }, {
        headerName: 'Languages', field: 'language', width: 100
      }, {
        headerName: 'Year', field: 'published_date', width: 100
      }, {
        headerName: 'No.of Pages', field: 'no_of_pages', width: 100
      }, {
        headerName: 'Book Summary', field: 'book_summary', width: 100
      }
    ];
  }
  ngOnInit () {
    console.log(this.appUrls.books_list);
    const query = {sort: '-_updated', max_results: 100};
    this.appService.get(this.appUrls.books_list, query).subscribe((data) => {
      const items: any = data['_items'];
      this.gridOptions.api.setRowData(items);
    });
  }
  cellClicked (event) {
    console.log(event['data']['_id']);
    if (event['data'] && event['data']['_id']) {
      this.route.navigate(['/edit-book', event['data']['_id']]);
    }
  }
  onSelectionChanged(event) {
    const selectedRows = this.gridApi.getSelectedRows();
    selectedRows.forEach(function(selectedRow, index) {
      console.log(selectedRow);
    });
  }
}
