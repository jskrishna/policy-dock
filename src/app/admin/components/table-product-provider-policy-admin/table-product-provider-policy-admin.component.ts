import { Component, OnInit, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-table-product-provider-policy-admin',
  templateUrl: './table-product-provider-policy-admin.component.html',
  styleUrls: ['./table-product-provider-policy-admin.component.scss']
})
export class TableProductProviderPolicyAdminComponent implements OnInit {
  @Input('tableMeta') tableMeta: any;
  
  displayedColumns: string[] = [
    "sections",
    "sumInsuredMin",
    "sumInsuredMax",
    "rate",
    "overridePremium",
    "possibleTypes"
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

