import { Component, OnInit } from "@angular/core";

export interface PaymentMethod {
  imagePath: string;
  text: string;
  id: number;
}

@Component({
  selector: "app-applications",
  templateUrl: "./applications.component.html",
  styleUrls: ["./applications.component.scss"],
})
export class ApplicationsComponent implements OnInit {
  public PAYMENT_DATA: PaymentMethod[] = [
    {
      imagePath: "assets/img/icn_credit_card.svg",
      text: "Pay with credit card",
      id: 1,
    },
    {
      imagePath: "assets/img/icn_bank_wire.svg",
      text: "Pay via bank wire",
      id: 2,
    },
    {
      imagePath: "assets/img/icn_direct_debit.svg",
      text: "Direct debit",
      id: 3,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
