import { Component, OnInit } from "@angular/core";

export interface PolicyElement {
  date: string;
  renewDate: string;
  policy: string;
  policyHolder: string;
  insurance: string;
  payment: string;
}

export interface ApplicationElement {
  productItems: string;
  detail: string;
  included: number;
  insuredAmount: string;
  calculatedPremium: string;
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

export interface AdminstrationData {
  username: string;
  nameCompany: string;
  apiKey: string;
  totalQueries: number;
  quotesProvided: number;
  policiesSold: number;
}

export interface EndpointsData {
  endpoint: string;
  requestType: string;
  queries: number;
  enabled: boolean;
}

export interface ProductProviderPolicyAdministration {
  sections: string;
  sumInsuredMin: string;
  sumInsuredMax: string;
  rate?: string;
  overridePremium?: string;
  possibleTypes?: string;
}

export interface PolicySchedule {
  document: string;
}

@Component({
  selector: "app-all-components",
  templateUrl: "./all-components.component.html",
  styleUrls: ["./all-components.component.scss"],
})
export class AllComponentsComponent implements OnInit {
  public checked: boolean = true;
  public policyTableData: PolicyElement[] = [
    {
      date: "12/02/2020",
      renewDate: "11/03/2021",
      policy: "#00001",
      policyHolder: "Bob Brown",
      payment: "Car",
      insurance: "Monthly",
    },
    {
      date: "12/02/2020",
      renewDate: "11/03/2021",
      policy: "#00001",
      policyHolder: "Bob Brown",
      payment: "Car",
      insurance: "Monthly",
    },
  ];

  public applicationTableData1: ApplicationElement[] = [
    {
      productItems: "Car Insurance",
      detail: "10,000",
      included: 600,
      insuredAmount: "10,600",
      calculatedPremium: "10,600",
    },
  ];

  public applicationTableData2: ApplicationElement[] = [
    {
      productItems: "Car Insurance",
      detail: "10,000",
      included: 600,
      insuredAmount: "10,600",
      calculatedPremium: "",
    },
  ];

  public applicationTableData3: ApplicationElement[] = [
    {
      productItems: "Toyota Corolla V4 2L",
      detail: "0",
      included: 0,
      insuredAmount: "0",
      calculatedPremium: "",
    },
  ];

  public quotationTableData: Quotation[] = [
    {
      productItems: "Vehicle Make and Model",
      detail: "Toyota Corolla V4 2L",
      included: 0,
      insuredAmount: 0,
      rate: 0,
      calculatedPremium: 0,
      overridePremium: 0,
      premiumAmount: 0,
    },
  ];
  public quotation;

  public adminstrationTableData: AdminstrationData[] = [
    {
      username: "user1",
      nameCompany: "Co.APP",
      apiKey: "asdadad12331mcs",
      totalQueries: 5000,
      quotesProvided: 34,
      policiesSold: 23,
    },
  ];
  public adminstrationData;

  public ENDPOINTS_DATA: EndpointsData[] = [
    {
      endpoint: "Application",
      requestType: "POST",
      queries: 234,
      enabled: true,
    },
  ];
  public endpointData;

  public ADMIN_ELEMENT_DATA: ProductProviderPolicyAdministration[] = [
    {
      sections: "Tires",
      sumInsuredMin: "200",
      sumInsuredMax: "10,000",
    },
  ];
  public administrationDetails;

  public POLICY_ELEMENT_DATA: PolicySchedule[] = [
    {
      document: "Application",
    },
  ];
  public policyDetails;

  constructor() {
    this.quotation = {
      name: "quotation",
      value: this.quotationTableData,
      component: "allComponent",
    };
    this.adminstrationData = {
      name: "adminstrationData",
      value: this.adminstrationTableData,
      component: "allComponent",
    };
    this.endpointData = {
      name: "endpointData",
      value: this.ENDPOINTS_DATA,
      component: "allComponent",
    };
    this.administrationDetails = {
      name: "administrationDetails",
      value: this.ADMIN_ELEMENT_DATA,
      component: "allComponent",
    };
    this.policyDetails = {
      name: "policyDetails",
      value: this.POLICY_ELEMENT_DATA,
      component: "allComponent",
    };
  }

  ngOnInit() {}
}
