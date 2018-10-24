import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Relevepluie } from '../relevepluie';

@Component({
  selector: 'app-search-relevepluie',
  templateUrl: './search-relevepluie.component.html',
  styleUrls: ['./search-relevepluie.component.css']
})
export class SearchRelevepluieComponent implements OnInit {
  isDetailDivVisible: boolean = false;
  isSearchDivVisible: boolean = true;

  date: String
  relevepluie: Relevepluie[]
  lastvalue:any = [];
  message: string;
  
  constructor(private route: ActivatedRoute,public restService:RestService,private location: Location) { }

  relev; any = new Relevepluie();

  ngOnInit() {
    this.date = '';
    this.isDetailDivVisible=false;
  }

  getRelevepluieByDate() {
    this.restService.getRelevepluieByDate(this.date).subscribe(relevepluie => this.relevepluie = relevepluie)
    }

  updateRelevepluie() {
    this.restService.updateRelevepluie(this.relev)
      .subscribe(data => console.log(data), error => console.log(error));
      this.relev = new Relevepluie();
    }

   deleteRelevepluie() {
    // this.dataService.deleteRelevepluie(this.relevepluie.id).then(() => this.goBack());
    this.restService.deleteRelevepluie(this.relev.id)
    .subscribe(()=> this.message = "Relevepluie Supprimer avec Success!"),
    error => console.log(error);
    this.relev = new Relevepluie();
  }
   

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
  this.isSearchDivVisible= false;
  this.getRelevepluieByDate();
  this.isDetailDivVisible=true;
  }

  onupdate(){
    this.updateRelevepluie();
  }

  ondelete(){
    console.log(this.relev.id); 
    this.deleteRelevepluie();
  }

}

//http://pierreterrat.com/angular-6-tutorials-guide-complet-pour-la-base/
