import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Title } from "@angular/platform-browser";

export interface PeriodicElement {
  date: string;
  renewDate: string;
  policy: string;
  policyHolder: string;
  insurance: string;
  payment: string;
  renew: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    date: "12/02/2020",
    renewDate: "11/03/2021",
    policy: "#00001",
    policyHolder: "Bob Brown",
    payment: "Car",
    insurance: "Monthly",
    renew: "Apply to Renew ",
  },
  {
    date: "12/02/2020",
    renewDate: "11/03/2021",
    policy: "#00001",
    policyHolder: "Bob Brown",
    payment: "Car",
    insurance: "Monthly",
    renew: "Apply to Renew ",
  },
  {
    date: "12/02/2020",
    renewDate: "11/03/2021",
    policy: "#00001",
    policyHolder: "Bob Brown",
    payment: "Car",
    insurance: "Monthly",
    renew: "Apply to Renew ",
  },
  {
    date: "12/02/2020",
    renewDate: "11/03/2021",
    policy: "#00001",
    policyHolder: "Bob Brown",
    payment: "Car",
    insurance: "Monthly",
    renew: "Apply to Renew ",
  },
];

@Component({
  selector: "app-table-policy",
  templateUrl: "./table-policy.component.html",
  styleUrls: ["./table-policy.component.scss"],
})
export class TablePolicyComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = [
    "date",
    "renewDate",
    "policy",
    "policyHolder",
    "insurance",
    "payment",
    "renew",
    "action",
    "check-policy"
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
