import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

/**
 * @title Dialog elements
 */
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openLogoutDialog() {
    this.dialog.open(DialogElementsLogout, {
      height: '100px',
      width: '520px',
    });
  }

  openCreditDebitDialog() {
    this.dialog.open(DialogCreditDebitCardDetails, {
      height: '600px',
      width: '600px',
    });
  }

  openUserAccessRightsDialog() {
    this.dialog.open(DialogUserAccessrights, {
      height: '600px',
      width: '600px',
    });
  }

  openApiAccessRightsDialog() {
    this.dialog.open(DialogApiAccessrights, {
      height: '600px',
      width: '600px',
    });
  }

  openEditPaymentsDialog() {
    this.dialog.open(DialogEditPaymentDetails, {
      height: '600px',
      width: '600px',
    });
  }


  ngOnInit() {
  }

}


@Component({
  selector: 'dialog-elements-logout',
  templateUrl: './modals-html/dialog-element-logout.html',
})
export class DialogElementsLogout { }


@Component({
  selector: 'credit-debit-card-details',
  templateUrl: './modals-html/credit-debit-card-details.html',
})
export class DialogCreditDebitCardDetails { }


@Component({
  selector: 'user-access-rights',
  templateUrl: './modals-html/user-access-rights.html',
})
export class DialogUserAccessrights { }


@Component({
  selector: 'api-access-rights',
  templateUrl: './modals-html/api-access-rights.html',
})
export class DialogApiAccessrights { }

@Component({
  selector: 'edit-receiving-payment-details',
  templateUrl: './modals-html/edit-receiving-payment-details.html',
})
export class DialogEditPaymentDetails { }