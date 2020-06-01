import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-button',
  templateUrl: './banner-button.component.html',
  styleUrls: ['./banner-button.component.scss']
})
export class BannerButtonComponent implements OnInit {

  @Input('bannerDetails') bannerDetails: any;

  constructor() { }

  ngOnInit() {
  }

}
