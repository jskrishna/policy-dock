import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

export interface ProductProviderPolicyAdministration {
  sections: string;
  sumInsuredMin: string;
  sumInsuredMax: string;
  rate?: string;
  overridePremium?: string;
  possibleTypes?: string;
}

const ELEMENT_DATA: ProductProviderPolicyAdministration[] = [
  {
    sections: "Tires",
    sumInsuredMin: "200",
    sumInsuredMax: "10,000",
  },
  {
    sections: "Engine",
    sumInsuredMin: "200",
    sumInsuredMax: "10,000",
  },
  {
    sections: "Chasy",
    sumInsuredMin: "200",
    sumInsuredMax: "10,000",
  },
  {
    sections: "Seats",
    sumInsuredMin: "200",
    sumInsuredMax: "10,000",
  },
];

@Component({
  selector: 'app-table-product-provider-policy-admin',
  templateUrl: './table-product-provider-policy-admin.component.html',
  styleUrls: ['./table-product-provider-policy-admin.component.scss']
})
export class TableProductProviderPolicyAdminComponent implements OnInit {

  displayedColumns: string[] = [
    "sections",
    "sumInsuredMin",
    "sumInsuredMax",
    "rate",
    "overridePremium",
    "possibleTypes"
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }
}

