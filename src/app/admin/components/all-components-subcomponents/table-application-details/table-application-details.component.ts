import { Component, OnInit, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-table-application-details',
  templateUrl: './table-application-details.component.html',
  styleUrls: ['./table-application-details.component.scss']
})

export class TableApplicationDetailsComponent implements OnInit {
  @Input('tableApplicationMeta') tableApplicationMeta: any;

  displayedColumns: string[] = [
    "productItems",
    "detail",
    "included",
    "insuredAmount",
    "calculatedPremium"
  ];
  dataSource;

  constructor() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tableApplicationMeta);
    }, 0);
  }

  ngOnInit() {
  }
}
