import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './app-header/header.component';
import { FooterComponent } from './app-footer/footer.component';
import { HomeComponent } from './app-home/home.component';
import { GraphComponent } from './app-graph/graph.component';
import { RelevepluieComponent } from './app-relevepluie/relevepluie.component';
import { StatComponent } from './app-stat/stat.component';
import { PhotosComponent } from './app-photos/photos.component';

import { SearchRelevepluieComponent } from './app-search-relevepluie/search-relevepluie.component';
import { AddRelevepluieComponent } from './app-add-relevepluie/add-relevepluie.component';


const routes: Routes = [
    { path: "", redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: HomeComponent },
    { path: "graph", component: GraphComponent },
    { path: "relevepluie", component: RelevepluieComponent },
    { path: "stat", component: StatComponent },
    { path: "photos", component: PhotosComponent },
    { path: 'relevepluie/search', component: SearchRelevepluieComponent },
    { path: 'relevepluie/add', component: AddRelevepluieComponent }
];

@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule]
} )

@NgModule( {
    imports: [
        CommonModule
    ],
    declarations: []
} )
export class AppRoutingModule { }
