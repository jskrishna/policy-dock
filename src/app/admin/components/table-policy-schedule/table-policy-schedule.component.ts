import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

export interface PolicySchedule {
  document: string;
}

const ELEMENT_DATA: PolicySchedule[] = [
  {
    document: "Application"
  },
  {
    document: "Application"
  },
];

@Component({
  selector: 'app-table-policy-schedule',
  templateUrl: './table-policy-schedule.component.html',
  styleUrls: ['./table-policy-schedule.component.scss']
})
export class TablePolicyScheduleComponent implements OnInit {

  displayedColumns: string[] = [
    "legalDocument",
    "keyPolicyTerms",
    "insertIntoDoc"
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }
}
