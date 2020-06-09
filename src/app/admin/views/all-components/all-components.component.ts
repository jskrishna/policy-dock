import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-components',
  templateUrl: './all-components.component.html',
  styleUrls: ['./all-components.component.scss']
})
export class AllComponentsComponent implements OnInit {

  public checked: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

}
