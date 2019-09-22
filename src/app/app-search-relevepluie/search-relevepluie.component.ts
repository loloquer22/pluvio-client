import { Component, OnInit , Input} from '@angular/core';
import {Location} from '@angular/common';
import { RestService } from '../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Relevepluie } from '../models/relevepluie';

@Component({
  selector: 'app-search-relevepluie',
  templateUrl: './search-relevepluie.component.html',
  styleUrls: ['./search-relevepluie.component.css']
})
export class SearchRelevepluieComponent implements OnInit {
  isDetailDivVisible: boolean = false;
  isSearchDivVisible: boolean = true;

  deleted = false;
  updated = false;
  
  relevepluie: Relevepluie;

  date: String;
  lastvalue:any = [];
  message: string;


  constructor(private route: ActivatedRoute,public restService:RestService,private location: Location) { }

  

  ngOnInit() {
    this.date = '';
    this.isDetailDivVisible=false;
  }

  getRelevepluieByDate(date) {
    this.restService.getRelevepluieByDate(this.date).subscribe(relevepluie => this.relevepluie = relevepluie)
    this.isDetailDivVisible=true;
    this.isSearchDivVisible=false;
  }

  //  newUpdaterelevepluie(): void {
    //  this.relevepluie = new Relevepluie();
  //}
  
  updateRelevepluie(relev: Relevepluie) {
    console.log(this.relevepluie.id);
    console.log(this.relevepluie.valeur);
       
        this.restService.updateRelevepluie(  {id: relev.id ,date: relev.date, valeur: relev.valeur})
      .subscribe(data => {
        console.log(data), 
      this.relevepluie = data as Relevepluie;},
      error => console.log(error));
      this.location.back();
    }

    

   deleteRelevepluie(id) {
    console.log(this.relevepluie.id);
         
    // this.dataService.deleteRelevepluie(this.relevepluie.id).then(() => this.goBack());
    this.restService.deleteRelevepluie(this.relevepluie.id)
    .subscribe(()=> this.message = "Relevepluie Supprimer avec Success!"),
    error => console.log(error);
    this.deleted = false;
    this.location.back();
  }
   

  goBack(): void {
    this.location.back();
  }

  onDelete(buttonType) {
      if(buttonType==="Deleted") {
          this.deleted = true;
          console.log(buttonType);
      }
  }

  onUpdate(buttonType){
      if(buttonType==="Updated") {
          this.updated = true;
          console.log(buttonType);
      }
  }

 
  }

//http://pierreterrat.com/angular-6-tutorials-guide-complet-pour-la-base/
