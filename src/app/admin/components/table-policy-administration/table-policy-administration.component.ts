import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

export interface AdminstrationData {
  username: string;
  nameCompany: string;
  apiKey: string;
  totalQueries: number;
  quotesProvided: number;
  policiesSold: number;
}

const ELEMENT_DATA: AdminstrationData[] = [
  {
    username: "user1",
    nameCompany: "Co.APP",
    apiKey: "asdadad12331mcs",
    totalQueries: 5000,
    quotesProvided: 34,
    policiesSold: 23
  },
  {
    username: "user1",
    nameCompany: "Co.APP",
    apiKey: "asdadad12331mcs",
    totalQueries: 5000,
    quotesProvided: 34,
    policiesSold: 23
  }
];

@Component({
  selector: 'app-table-policy-administration',
  templateUrl: './table-policy-administration.component.html',
  styleUrls: ['./table-policy-administration.component.scss']
})

export class TablePolicyAdministrationComponent implements OnInit {

  displayedColumns: string[] = [
    "username",
    "nameCompany",
    "apiKey",
    "totalQueries",
    "quotesProvided",
    "policiesSold",
    "permissions",
    "action"
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }
}
