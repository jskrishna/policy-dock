import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-default-with-sub-header',
  templateUrl: './default-with-sub-header.component.html',
  styleUrls: ['./default-with-sub-header.component.scss']
})
export class DefaultWithSubHeaderComponent implements OnInit {

  /**
   * holds the front active route name
   */
  public title: string;

  /**
   * Constructor of the class.
   *
   * @param {ActivatedRoute} activatedRoute
   */
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  /**
   * Method to toggle application sidenav(close on small device on side nav click) and set the current route path
   */
  onActivate(event) {
    console.log('event: ', event);
    let path = this.activatedRoute.snapshot['_routerState']['url'];
    console.log('path: ', path);
    if (path) {
      path = path.split('/');
      this.title = path[1]
      console.log('this.title: ', this.title);
    }
  }

}