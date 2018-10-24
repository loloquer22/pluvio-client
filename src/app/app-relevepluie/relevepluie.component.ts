import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Relevepluie } from '../relevepluie';

//import { Relevepluie } from '../relevepluie';

@Component({
  selector: 'app-relevepluie',
  templateUrl: './relevepluie.component.html',
  styleUrls: ['./relevepluie.component.css']
})

export class RelevepluieComponent implements OnInit {
  
  lastvalue:any = [];

  relevepluie: Relevepluie = new Relevepluie();
  submitted = false;
 
 constructor(public restService:RestService, private route: ActivatedRoute, private router: Router) { }
 
  getLastValues() {
    this.lastvalue = [];
      this.restService.getLastValues().subscribe ((data: {}) => {
      console.log(data);
      this.lastvalue = data;
    });
  }

  ngOnInit() {
    this.getLastValues();
  }

  newRelevepluie(): void {
    this.submitted = false;
    this.relevepluie = new Relevepluie();
    this.getLastValues();
  }

  addRelevepluie() {
    this.restService.addRelevepluie(this.relevepluie)
      .subscribe(data => console.log(data), error => console.log(error));
    this.relevepluie = new Relevepluie();
  }

  onSubmit() {
    this.submitted = true;
    this.addRelevepluie();
  }
}

   
 // https://www.concretepage.com/angular/angular-httpclient-post
  

