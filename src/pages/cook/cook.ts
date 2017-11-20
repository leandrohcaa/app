import {Component} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NavController, NavParams } from 'ionic-angular';

import * as moment from 'moment';
import * as $ from 'jquery';

@Component({
    selector: 'page-cook',
    templateUrl: 'cook.html',
    animations: [
        trigger('visibleState', [
            state("visible", style({ display: 'flex', opacity: 100 })),
            state("hidden", style({ display: 'none', opacity: 0 })),
            state("hiddenBySearch", style({ display: 'none', opacity: 0 })),
            transition('visible => hidden', animate('300ms ease')),
            transition('hidden => visible', animate('300ms ease'))
        ])
    ]
})
export class CookPage {
    selectedItem: any;
    items: Array<{
        id: number, visible: string, image: string, name: string, product: string,
        urgencia: string, date: string, hour: string
    }>;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.selectedItem = navParams.get('item');

        this.items = [];

        var id = 1;
        id = this.addItemFake(id);
        id = this.addItemFake(id);
        id = this.addItemFake(id);
        id = this.addItemFake(id);
        id = this.addItemFake(id);
        id = this.addItemFake(id);
        id = this.addItemFake(id);
    }

    addItemFake(id) {
        this.items.push({
            id: id,
            visible: "visible",
            image: 'assets/imgs/eu.png',
            name: 'Leandro Andrade ' + id,
            product: 'Mix Herbalife',
            urgencia: 'Alta',
            date: moment(new Date()).format('DD/MM/YY'),
            hour: moment(new Date()).format('hh:mm:ss')
        });
        return id + 1;
    }

    itemTapped(event, item) {
        alert();
    }

    swipeEvent(event, item) {
        if (event.deltaX > 0) {
            $.each(this.items, function (index, element) {
                if (element.id == item.id)
                    element.visible = "hidden";
            });
        }
    }

    getItems(ev) {
        var val = ev.target.value;
        $.each(this.items, function (index, element) {
            if (element.visible != 'hidden') {
                if (element.name.toLowerCase().indexOf(val.toLowerCase()) > -1)
                    element.visible = "visible";
                else
                    element.visible = "hiddenBySearch";
            }
        });
    }
}
