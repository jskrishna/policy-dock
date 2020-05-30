import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

export interface ApiEndpoints {
  row1: string;
  row2: string;
}

const ELEMENT_DATA: ApiEndpoints[] = [
  {
    row1: "Get Product Detail",
    row2: "/product_detail"
  },
  {
    row1: "Send Proposal",
    row2: "/send_proposal"
  },
];

@Component({
  selector: 'app-api-endpoints',
  templateUrl: './api-endpoints.component.html',
  styleUrls: ['./api-endpoints.component.scss']
})

export class ApiEndpointsComponent implements OnInit {

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

