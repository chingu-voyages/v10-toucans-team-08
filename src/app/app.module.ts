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
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    Icon1Component,
    Icon2Component,
    Icon3Component,
    Icon4Component,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
