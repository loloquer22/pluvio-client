import { Component, OnInit , Input} from '@angular/core';
import {Location} from '@angular/common';
import { RestService } from '../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Relevepluie } from '../models/relevepluie';

@Component({
  selector: 'app-add-relevepluie',
  templateUrl: './add-relevepluie.component.html',
  styleUrls: ['./add-relevepluie.component.css']
})
export class AddRelevepluieComponent implements OnInit {
 
    isDetailDivVisible: boolean = false;
    relevepluie: Relevepluie = new Relevepluie();
    submitted = false;
    lastvalue:any = [];

    constructor(private route: ActivatedRoute,public restService:RestService,private location: Location) { }

  ngOnInit() {
      this.getLastValues();
  }
  getLastValues() {
      this.lastvalue = [];
        this.restService.getLastValues().subscribe ((data: {}) => {
        console.log(data);
        this.lastvalue = data as Relevepluie;
      });
    }
  
  addRelevepluie(relev: Relevepluie) {
      this.restService.addRelevepluie(relev)
        .subscribe(data => console.log(data), error => console.log(error));
      this.submitted = false;
      this.location.back();
    }
  
  goBack(): void {
      this.location.back();
    }
  
  onAdd(buttonType) {
      if(buttonType==="Added") {
          this.submitted = true;
          console.log(buttonType);
      }
  }

}
