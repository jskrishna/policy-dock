import { Component, OnInit } from '@angular/core';

export interface PaymentMethod {
  imagePath: string;
  text: string;
}

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  public PAYMENT_DATA: PaymentMethod[] = [
    {
      imagePath: "assets/img/icn_credit_card.png",
      text: "Pay with credit card",
    },
    {
      imagePath: "assets/img/icn_bank_wire.png",
      text: "Pay via bank wire",
    },
    {
      imagePath: "assets/img/icn_direct_debit.png",
      text: "Direct debit",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
