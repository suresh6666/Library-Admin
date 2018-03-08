import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public gridOptions: GridOptions;

  constructor() {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
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
    this.gridOptions.rowData = [
      {id: 5, value: 10},
      {id: 10, value: 15},
      {id: 15, value: 20},
      {id: 10, value: 15},
      {id: 15, value: 20},
      {id: 10, value: 15},
      {id: 15, value: 20},
      {id: 10, value: 15},
      {id: 15, value: 20},
      {id: 10, value: 15},
      {id: 15, value: 20},
      {id: 10, value: 15},
      {id: 15, value: 20},
      {id: 10, value: 15},
      {id: 15, value: 20},
      {id: 10, value: 15},
      {id: 15, value: 20},
      {id: 10, value: 15},
      {id: 15, value: 20}
    ];
  }
  ngOnInit () {}
}
