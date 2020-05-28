import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

export interface EndpointsData {
  endpoint: string;
  requestType: string;
  queries: number;
  enabled: boolean;
}

const ELEMENT_DATA: EndpointsData[] = [
  {
    endpoint: "Application",
    requestType: "POST",
    queries: 234,
    enabled: true,
  },
  {
    endpoint: "Proposal",
    requestType: "POST",
    queries: 234,
    enabled: true,
  },
  {
    endpoint: "Quotation",
    requestType: "POST",
    queries: 234,
    enabled: true,
  },
  {
    endpoint: "Get Policy",
    requestType: "POST",
    queries: 234,
    enabled: true,
  },
  {
    endpoint: "Account Query",
    requestType: "POST",
    queries: 234,
    enabled: true,
  },
  {
    endpoint: "Benefit Illustration",
    requestType: "POST",
    queries: 234,
    enabled: true,
  }
];

@Component({
  selector: 'app-table-available-endpoints',
  templateUrl: './table-available-endpoints.component.html',
  styleUrls: ['./table-available-endpoints.component.scss']
})

export class TableAvailableEndpointsComponent implements OnInit {

  displayedColumns: string[] = [
    "endpoint",
    "requestType",
    "queries",
    "enabled",
    "action"
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }
}

