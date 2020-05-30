import { Component, OnInit } from '@angular/core';


export interface QuotationSpecifiedMotorVehicle {
  productItems: string;
  detail: string;
  included: number;
  insuredAmount: any;
  rate: number;
  calculatedPremium: number;
  overridePremium: number;
  premiumAmount: number;
}
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

export interface ClausesAndExtensions {
  productItems: string;
  detail: string;
  included: string;
  insuredAmount: string;
  rate: number;
  calculatedPremium: string;
  overridePremium: number;
  premiumAmount: string;
}

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.scss']
})
export class QuotationComponent implements OnInit {

  public ELEMENT_DATA_QuotationSpecifiedMotorVehicle: QuotationSpecifiedMotorVehicle[];
  public ELEMENT_DATA_Quotation: Quotation[];
  public ELEMENT_DATA_ClausesAndExtensions: ClausesAndExtensions[];
  public quotation;
  public specifiedMotorVehicle;
  public clausesAndExtensions;

  constructor() {
    this.ELEMENT_DATA_QuotationSpecifiedMotorVehicle = [
      {
        productItems: "Vehicle Make and Model",
        detail: "Toyota Corolla V4 2L",
        included: 0,
        insuredAmount: "0",
        rate: 0,
        calculatedPremium: 0,
        overridePremium: 0,
        premiumAmount: 0
      },
      {
        productItems: "Vehicle Year",
        detail: "1998",
        included: 0,
        insuredAmount: "0",
        rate: 0,
        calculatedPremium: 0,
        overridePremium: 0,
        premiumAmount: 0
      },
      {
        productItems: "Insured DOB",
        detail: "23 October 1980",
        included: 0,
        insuredAmount: "0",
        rate: 0,
        calculatedPremium: 0,
        overridePremium: 0,
        premiumAmount: 0
      },
      {
        productItems: "Type of Cover",
        detail: "Vehicle Personal",
        included: 0,
        insuredAmount: "0",
        rate: 0,
        calculatedPremium: 0,
        overridePremium: 0,
        premiumAmount: 0
      },
      {
        productItems: "Regsitration number",
        detail: "1231213",
        included: 0,
        insuredAmount: "0",
        rate: 0,
        calculatedPremium: 0,
        overridePremium: 0,
        premiumAmount: 0
      },
      {
        productItems: "NCB(year)",
        detail: "1980",
        included: 0,
        insuredAmount: "yes",
        rate: 0,
        calculatedPremium: 0,
        overridePremium: 0,
        premiumAmount: 0
      },
      {
        productItems: "Miscellaneous",
        detail: "0",
        included: 0,
        insuredAmount: "0",
        rate: 0,
        calculatedPremium: 0,
        overridePremium: 0,
        premiumAmount: 0
      },
      {
        productItems: "Insured Amount",
        detail: "0",
        included: 0,
        insuredAmount: null,
        rate: 0,
        calculatedPremium: 0,
        overridePremium: 0,
        premiumAmount: 0
      },

    ];

    this.ELEMENT_DATA_Quotation = [
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

    this.ELEMENT_DATA_ClausesAndExtensions = [
      {
        productItems: "Contingent Liability",
        detail: "0",
        included: "yes",
        insuredAmount: "0",
        rate: 0,
        calculatedPremium: "$1000",
        overridePremium: 0,
        premiumAmount: "$100"
      },
      {
        productItems: "Contingent Liability",
        detail: "0",
        included: "yes",
        insuredAmount: "0",
        rate: 0,
        calculatedPremium: "$1000",
        overridePremium: 0,
        premiumAmount: "$100"
      },
      {
        productItems: "Contingent Liability",
        detail: "0",
        included: "yes",
        insuredAmount: "0",
        rate: 0,
        calculatedPremium: "$1000",
        overridePremium: 0,
        premiumAmount: "$100"
      },
    ]
  }

  ngOnInit() {
    this.quotation = { name: 'quotation', value: this.ELEMENT_DATA_Quotation, component: 'quotation' };
    this.specifiedMotorVehicle = { name: 'specifiedMotorVehicle', value: this.ELEMENT_DATA_QuotationSpecifiedMotorVehicle, component: 'quotation' };
    this.clausesAndExtensions = { name: 'clausesAndExtensions', value: this.ELEMENT_DATA_ClausesAndExtensions, component: 'quotation' };
  }

}
