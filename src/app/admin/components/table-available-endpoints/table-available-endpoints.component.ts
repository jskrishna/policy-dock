import { Component, OnInit, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-table-available-endpoints',
  templateUrl: './table-available-endpoints.component.html',
  styleUrls: ['./table-available-endpoints.component.scss']
})

export class TableAvailableEndpointsComponent implements OnInit {

  @Input('tableMeta') tableMeta: any;

  displayedColumns: string[] = [
    "endpoint",
    "requestType",
    "queries",
    "enabled",
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

