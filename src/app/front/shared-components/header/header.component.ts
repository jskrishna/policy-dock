import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $('.toggle-menu-mobile').click(function(){
      $('body').toggleClass('isOpen');
    });
    $('.overlay').click(function(){
      $('body').removeClass('isOpen');
    });
  }

}
