import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header-after-login',
  templateUrl: './header-after-login.component.html',
  styleUrls: ['./header-after-login.component.scss']
})
export class HeaderAfterLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.toggle-menu-mobile').click(function () {
      $('body').toggleClass('isOpen');
    });
    $('.overlay').click(function () {
      $('body').removeClass('isOpen');
    });
  }
}
