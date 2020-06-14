import { Component, OnInit, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";


@Component({
  selector: 'app-table-current-policy',
  templateUrl: './table-current-policy.component.html',
  styleUrls: ['./table-current-policy.component.scss']
})
export class TableCurrentPolicyComponent implements OnInit {

  @Input('tablePolicyMeta') tablePolicyMeta: any;

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
  dataSource;

  constructor() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tablePolicyMeta);
    }, 0);
  }

  ngOnInit() { }
}
