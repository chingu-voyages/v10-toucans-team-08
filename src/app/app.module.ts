import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Section1Component } from './section1/section1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Icon1Component } from './icon1/icon1.component';
import { Icon2Component } from './icon2/icon2.component';
import { Icon3Component } from './icon3/icon3.component';
import { Icon4Component } from './icon4/icon4.component';
import { IconComponent } from './icon/icon.component';
import { ScrollSectionBtnComponent } from './scroll-section-btn/scroll-section-btn.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    Icon1Component,
    Icon2Component,
    Icon3Component,
    Icon4Component,
    IconComponent,
    AppComponent,
    ScrollSectionBtnComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
