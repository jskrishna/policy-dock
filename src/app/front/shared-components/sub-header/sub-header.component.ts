import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit, OnChanges {

  @Input('activeRouteName') activeRoute: string;
  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(simpleChanges) {
    console.log('simpleChanges: ', simpleChanges);
  }

}
