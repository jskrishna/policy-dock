import { Component, OnInit, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-table-quotation',
  templateUrl: './table-quotation.component.html',
  styleUrls: ['./table-quotation.component.scss']
})

export class TableQuotationComponent implements OnInit {

  @Input('tableData') tableData: any;

  displayedColumns: string[] = [
    "productItems",
    "detail",
    "included",
    "rate",
    "insuredAmount",
    "calculatedPremium",
    "overridePremium",
    "premiumAmount"
  ];

  dataSource;

  constructor() {
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tableData.value);
    }, 0);
  }

  ngOnInit() {
  }
}
