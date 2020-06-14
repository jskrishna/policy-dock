import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

export interface ApplicationElement {
  productItems: string;
  detail: string;
  included: number;
  insuredAmount: number;
  calculatedPremium: number;
}

const ELEMENT_DATA: ApplicationElement[] = [
  {
    productItems: "Insured Driver",
    detail: "Abe Lincoln",
    included: 0,
    insuredAmount: 0,
    calculatedPremium: 0
  },
  {
    productItems: "Gender",
    detail: "Male",
    included: 0,
    insuredAmount: 0,
    calculatedPremium: 0
  }
];

@Component({
  selector: 'app-table-application',
  templateUrl: './table-application.component.html',
  styleUrls: ['./table-application.component.scss']
})

export class TableApplicationComponent implements OnInit {

  displayedColumns: string[] = [
    "productItems",
    "detail",
    "included",
    "insuredAmount",
    "calculatedPremium"
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }
}

