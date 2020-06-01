import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-policy-admin-endpoint',
  templateUrl: './policy-admin-endpoint.component.html',
  styleUrls: ['./policy-admin-endpoint.component.scss']
})
export class PolicyAdminEndpointComponent implements OnInit {

  @Input('editable') editable: boolean;

  constructor() { }

  ngOnInit() {
  }

}
