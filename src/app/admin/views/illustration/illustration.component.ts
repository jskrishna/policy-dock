import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-illustration",
  templateUrl: "./illustration.component.html",
  styleUrls: ["./illustration.component.scss"],
})
export class IllustrationComponent implements OnInit {
  constructor() {}

  illustrationImage = [
    "assets/img/illustrations/1.svg",
    "assets/img/illustrations/2.svg",
    "assets/img/illustrations/3.svg",
    "assets/img/illustrations/4.svg",
    "assets/img/illustrations/5.svg",
    "assets/img/illustrations/6.svg",
    "assets/img/illustrations/7.svg",
    "assets/img/illustrations/7(1).svg",
    "assets/img/illustrations/8.svg",
    "assets/img/illustrations/9.svg",
    "assets/img/illustrations/10.svg",
    "assets/img/illustrations/11.svg",
    "assets/img/illustrations/12.svg",
    "assets/img/illustrations/13.svg",
    "assets/img/illustrations/14.svg",
    "assets/img/illustrations/15.svg",
    "assets/img/illustrations/16.svg",
  ];

  illustrationImageMini = [
    "assets/img/illustrations/17.svg",
    "assets/img/illustrations/18.svg",
    "assets/img/illustrations/19.svg",
    "assets/img/illustrations/20.svg",
    "assets/img/illustrations/21.svg",
    "assets/img/illustrations/22.svg",
    "assets/img/illustrations/23.svg",
    "assets/img/illustrations/24.svg",
    "assets/img/illustrations/25.svg",
    "assets/img/illustrations/27.svg",
    "assets/img/illustrations/28.svg",
    "assets/img/illustrations/29.svg",
    "assets/img/illustrations/30.svg",
    "assets/img/illustrations/31.svg",
  ];

  ngOnInit() {}
}
