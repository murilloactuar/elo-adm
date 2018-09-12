import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { Environment } from '../environment/environment';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { EventMenuPage } from '../pages/event-menu/event-menu';
import { EventInfoPage } from '../pages/event-info/event-info';
import { EventInteractiveSectionPage } from '../pages/event-interactive-section/event-interactive-section';
import { EventSchedulePage } from '../pages/event-schedule/event-schedule';
import { EventSpeakerPage } from '../pages/event-speaker/event-speaker';
import { EventSponsorPage } from '../pages/event-sponsor/event-sponsor';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    EventMenuPage,
    EventInfoPage,
    EventInteractiveSectionPage,
    EventSchedulePage,
    EventSpeakerPage,
    EventSponsorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(Environment.firebase),
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    EventMenuPage,
    EventInfoPage,
    EventInteractiveSectionPage,
    EventSchedulePage,
    EventSpeakerPage,
    EventSponsorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
