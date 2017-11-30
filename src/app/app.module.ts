import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { GroupsPage } from '../pages/groups/groups';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SignupPage } from '../pages/signup/signup';
import { DevicesPage } from '../pages/devices/devices';
import { TypesPage } from '../pages/types/types';
import { CreateGroupPage } from '../pages/create-group/create-group';
import { GroupInfoPage } from '../pages/group-info/group-info';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    GroupsPage,
    HomePage,
    TabsPage,
    SignupPage,
    DevicesPage,
    TypesPage,
    CreateGroupPage,
    GroupInfoPage,
    EditProfilePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    GroupsPage,
    HomePage,
    TabsPage,
    SignupPage,
    DevicesPage,
    TypesPage,
    CreateGroupPage,
    GroupInfoPage,
    EditProfilePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SocialSharing
  ]
})
export class AppModule {}
