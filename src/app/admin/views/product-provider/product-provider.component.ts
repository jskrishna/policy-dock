import { Component, OnInit } from '@angular/core';

export interface ProductProviderPolicyAdministration {
  sections: string;
  sumInsuredMin: string;
  sumInsuredMax: string;
  rate?: string;
  overridePremium?: string;
  possibleTypes?: string;
}

@Component({
  selector: 'app-product-provider',
  templateUrl: './product-provider.component.html',
  styleUrls: ['./product-provider.component.scss']
})
export class ProductProviderComponent implements OnInit {

  public bannerDetail: Array<any>;

  public ADMIN_ELEMENT_DATA: ProductProviderPolicyAdministration[] = [
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
  public administrationDetails;

  constructor() {
    this.bannerDetail = [
      { id: 1, imagePath: 'assets/img/authorization.svg', name: 'Check Report and Send to Authorization' },
      { id: 2, imagePath: 'assets/img/page-editor.svg', name: 'Go to page Editor' },
      { id: 3, imagePath: 'assets/img/api-editor.svg', name: 'Go to API Documentation Editor' }
    ];

    this.administrationDetails = { name: 'administrationDetails', value: this.ADMIN_ELEMENT_DATA, component: 'productProvider' };

  }

  ngOnInit() {
  }

}
