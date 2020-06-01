import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-policy-admin-endpoint-edit',
  templateUrl: './policy-admin-endpoint-edit.component.html',
  styleUrls: ['./policy-admin-endpoint-edit.component.scss']
})
export class PolicyAdminEndpointEditComponent implements OnInit {

  @Input('canEdit') canEdit: boolean;
  public listUpdate1: boolean = false;
  public listUpdate2: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onEdit1() {
    this.listUpdate1 = true;
  }

  onEdit2() {
    this.listUpdate2 = true;
  }

  update1() {
    this.listUpdate1 = false;
  }

  update2() {
    this.listUpdate2 = false;
  }

}
