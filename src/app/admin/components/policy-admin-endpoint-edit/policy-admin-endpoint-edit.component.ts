import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface ApiEndpoints {
  row1: string;
  row2: string;
}

const ELEMENT_DATA: ApiEndpoints[] = [
  {
    row1: "API ID",
    row2: "The API ID of person accesing the API"
  },
  {
    row1: "API Key",
    row2: "The API key for specific API ID"
  },
];

@Component({
  selector: 'app-policy-admin-endpoint-edit',
  templateUrl: './policy-admin-endpoint-edit.component.html',
  styleUrls: ['./policy-admin-endpoint-edit.component.scss']
})
export class PolicyAdminEndpointEditComponent implements OnInit {

  displayedColumns: string[] = [
    "col1",
    "col2",
    "col3"
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  constructor() { }

  ngOnInit() {
  }

}
