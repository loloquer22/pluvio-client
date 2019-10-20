import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {ChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './app-main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HeaderComponent } from './app-header/header.component';
import { FooterComponent } from './app-footer/footer.component';
import { HomeComponent } from './app-home/home.component';
import { GraphComponent } from './app-graph/graph.component';
import { RelevepluieComponent } from './app-relevepluie/relevepluie.component';
import { PhotosComponent } from './app-photos/photos.component';
import { AppRoutingModule } from './/app-routing.module';
import { SearchRelevepluieComponent } from './app-search-relevepluie/search-relevepluie.component';
import { AddRelevepluieComponent } from './app-add-relevepluie/add-relevepluie.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GraphComponent,
    RelevepluieComponent,
    PhotosComponent,
    SearchRelevepluieComponent,
    AddRelevepluieComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
export class AppModule { }
