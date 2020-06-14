import { Component, OnInit } from '@angular/core';

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


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


  public ADMINISTRATION_DATA: AdminstrationData[] = [
    {
      username: "user1",
      nameCompany: "Co.APP",
      apiKey: "asdadad12331mcs",
      totalQueries: 5000,
      quotesProvided: 34,
      policiesSold: 23
    },
    {
      username: "user1",
      nameCompany: "Co.APP",
      apiKey: "asdadad12331mcs",
      totalQueries: 5000,
      quotesProvided: 34,
      policiesSold: 23
    }
  ];
  public adminstrationData;

  public ENDPOINTS_DATA: EndpointsData[] = [
    {
      endpoint: "Application",
      requestType: "POST",
      queries: 234,
      enabled: true,
    },
    {
      endpoint: "Proposal",
      requestType: "POST",
      queries: 234,
      enabled: true,
    },
    {
      endpoint: "Quotation",
      requestType: "POST",
      queries: 234,
      enabled: true,
    },
    {
      endpoint: "Get Policy",
      requestType: "POST",
      queries: 234,
      enabled: true,
    },
    {
      endpoint: "Account Query",
      requestType: "POST",
      queries: 234,
      enabled: true,
    },
    {
      endpoint: "Benefit Illustration",
      requestType: "POST",
      queries: 234,
      enabled: true,
    }
  ];
  public endpointData;


  constructor() {
    this.adminstrationData = { name: 'adminstrationData', value: this.ADMINISTRATION_DATA, component: 'settingsComponent' };
    this.endpointData = { name: 'adminstrationData', value: this.ENDPOINTS_DATA, component: 'settingsComponent' };
  }

  ngOnInit() {
  }

}
