import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventModel } from '../../models/event.model';

@Component({
  selector: 'page-event-interactive-section',
  templateUrl: 'event-interactive-section.html',
})
export class EventInteractiveSectionPage {

  public event: EventModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = this.navParams.get('event');
  }
}
