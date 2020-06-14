import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

export interface PolicyElement {
  date: string;
  renewDate: string;
  policy: string;
  policyHolder: string;
  insurance: string;
  payment: string;
}

const ELEMENT_DATA: PolicyElement[] = [
  {
    date: "12/02/2020",
    renewDate: "11/03/2021",
    policy: "#00001",
    policyHolder: "Bob Brown",
    payment: "Car",
    insurance: "Monthly",
  },
  {
    date: "12/02/2020",
    renewDate: "11/03/2021",
    policy: "#00001",
    policyHolder: "Bob Brown",
    payment: "Car",
    insurance: "Monthly",
  },
  {
    date: "12/02/2020",
    renewDate: "11/03/2021",
    policy: "#00001",
    policyHolder: "Bob Brown",
    payment: "Car",
    insurance: "Monthly",
  },
  {
    date: "12/02/2020",
    renewDate: "11/03/2021",
    policy: "#00001",
    policyHolder: "Bob Brown",
    payment: "Car",
    insurance: "Monthly",
  },
];

@Component({
  selector: "app-table-policy",
  templateUrl: "./table-policy.component.html",
  styleUrls: ["./table-policy.component.scss"],
})
export class TablePolicyComponent implements OnInit {

  displayedColumns: string[] = [
    "date",
    "renewDate",
    "policy",
    "policyHolder",
    "insurance",
    "payment",
    "renew",
    "action",
    "check-policy",
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() { }
}
