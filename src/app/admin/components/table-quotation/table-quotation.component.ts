import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

export interface Quotation {
  productItems: string;
  detail: string;
  included: number;
  insuredAmount: number;
  rate: number;
  calculatedPremium: number;
  overridePremium: number;
  premiumAmount: number;
}

const ELEMENT_DATA: Quotation[] = [
  {
    productItems: "Insured Driver",
    detail: "Abe Lincoln",
    included: 0,
    insuredAmount: 0,
    rate: 0,
    calculatedPremium: 0,
    overridePremium: 0,
    premiumAmount: 0
  },
  {
    productItems: "Gender",
    detail: "Male",
    included: 0,
    insuredAmount: 0,
    rate: 0,
    calculatedPremium: 0,
    overridePremium: 0,
    premiumAmount: 0
  }
];

@Component({
  selector: 'app-table-quotation',
  templateUrl: './table-quotation.component.html',
  styleUrls: ['./table-quotation.component.scss']
})

export class TableQuotationComponent implements OnInit {

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
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }
}
