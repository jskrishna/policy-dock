import { Component, OnInit, ChangeDetectorRef, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})

export class DefaultLayoutComponent implements OnInit, OnDestroy, AfterViewInit {
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  showSpinner: boolean;
  title: string;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher) {

    this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);


  }

 

  ngOnInit(): void {
    
  }

  selectedRoute(route: string){
    this.title = route;
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}
