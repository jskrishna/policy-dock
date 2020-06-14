import { Component, OnInit, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";


@Component({
  selector: 'app-table-policy-schedule',
  templateUrl: './table-policy-schedule.component.html',
  styleUrls: ['./table-policy-schedule.component.scss']
})
export class TablePolicyScheduleComponent implements OnInit {

  @Input('tableMeta') tableMeta: any;

  displayedColumns: string[] = [
    "legalDocument",
    "keyPolicyTerms",
    "insertIntoDoc"
  ];


  dataSource;

  constructor() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tableMeta.value);
    }, 0);
  }

  ngOnInit() {
  }
}
