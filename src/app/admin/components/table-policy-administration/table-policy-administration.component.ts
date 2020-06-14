import { Component, OnInit, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-table-policy-administration',
  templateUrl: './table-policy-administration.component.html',
  styleUrls: ['./table-policy-administration.component.scss']
})

export class TablePolicyAdministrationComponent implements OnInit {

  @Input('tableMeta') tableMeta: any;

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
  
  dataSource;

  constructor() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tableMeta.value);
    }, 0);
  }
  
  ngOnInit() {
  }
}
