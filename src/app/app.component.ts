import { Component, ViewChild  } from '@angular/core';
import { Nav, Platform, Tabs, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CookPage } from '../pages/cook/cook';
import { PayPage } from '../pages/pay/pay';
import { ContactModal } from '../pages/contactModal/contactModal';

import * as moment from 'moment';
import * as $ from 'jquery';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    @ViewChild("footerTabs") footerTabs: Tabs;

    rootPage: any = CookPage;
    cookPage: any = CookPage;
    payPage: any = PayPage;

    pagesMenu: Array<{ title: string, component: any }>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
            public modalCtrl: ModalController    ) {
        this.initializeApp();

        this.pagesMenu = [
            { title: 'Contato', component: ContactModal },
            { title: 'Sair', component: 'Sair' }
        ];

        // Atualização de data e hora atual.
        //setInterval(function () {
        //    $('#actualDate').text(moment(new Date()).format('DD/MM/YYYY hh:mm:ss'));
        //}, 500);
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        if (page.component == 'Sair')
            alert('Sair');
        else if (page.component == ContactModal) {
            let modal = this.modalCtrl.create(ContactModal);
            modal.present();
        }
        else
            this.nav.setRoot(page.component);
    }

    onTabChange() {
        this.nav.setRoot(this.footerTabs.getSelected().root);
    }
}
