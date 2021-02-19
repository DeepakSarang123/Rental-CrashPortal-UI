import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Router } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SentryErrorHandler } from './error.service';
import { Home2Component } from "./home2/home2.component";




/*
************************
USER COMPONENTS
************************
*/
import { HeaderComponent } from '../app/header/header.component';
import { FooterComponent } from '../app/footer/footer.component';
import { HomeComponent } from '../app/home/home.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SettingshttpService } from './settings/settingshttp.service';
import { MaterialModule } from '../app/materialModule';
import { ReportComponent } from './report/report.component';
import { APP_BASE_HREF } from '@angular/common';
import { PagesComponent } from './pages/pages.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PagesComponent,
    Home2Component,
    //ReportComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: SentryErrorHandler,
    },
    {
      provide: APP_BASE_HREF,
      useValue: '/crashPortal/'
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
