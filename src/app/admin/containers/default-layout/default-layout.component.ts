import { Component, OnInit, ChangeDetectorRef, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})

export class DefaultLayoutComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('snav', { static: true }) public sidenav: MatSidenav;

  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  showSpinner: boolean;
  title: string;

  /**
   * Constructor of the class.
   *
   * @param {ChangeDetectorRef} changeDetectorRef
   * @param {MediaMatcher} media
   * @param {ActivatedRoute} activatedRoute
   */
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private activatedRoute: ActivatedRoute
  ) {

    this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  /**
   * Method to toggle application sidenav(close on small device on side nav click) and set the current route path
   */
  onActivate(e) {
    if (this.sidenav && this.mobileQuery['matches']) {
      this.sidenav.close();
    }

    let path = this.activatedRoute.snapshot['_routerState']['url'];
    if (path) {
      path = path.split('/');
      this.title = path[2]
    }
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}
