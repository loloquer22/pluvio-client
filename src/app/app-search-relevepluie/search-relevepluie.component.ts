import { Component, OnInit , Input} from '@angular/core';
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

  relevepluie: Relevepluie;

  date: String;
  lastvalue:any = [];
  message: string;


  constructor(private route: ActivatedRoute,public restService:RestService,private location: Location) { }

  

  ngOnInit() {
    this.date = '';
    this.isDetailDivVisible=false;
  }

  getRelevepluieByDate() {
    this.restService.getRelevepluieByDate(this.date).subscribe(relevepluie => this.relevepluie = relevepluie)
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
    }

    

   deleteRelevepluie() {
    console.log(this.relevepluie.id);
         
    // this.dataService.deleteRelevepluie(this.relevepluie.id).then(() => this.goBack());
    this.restService.deleteRelevepluie(this.relevepluie.id)
    .subscribe(()=> this.message = "Relevepluie Supprimer avec Success!"),
    error => console.log(error);
    this.getRelevepluieByDate();
  }
   

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
  this.isSearchDivVisible= false;
  this.getRelevepluieByDate();
  this.isDetailDivVisible=true;
  }

 // onUpdate(){
 //   console.log(this.relevepluie); 
 //   this.updateRelevepluie();
 // }

 
  }

//http://pierreterrat.com/angular-6-tutorials-guide-complet-pour-la-base/
