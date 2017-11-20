import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-contactModal',
    templateUrl: 'contactModal.html'
})
export class ContactModal {
    constructor(public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController) {
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
