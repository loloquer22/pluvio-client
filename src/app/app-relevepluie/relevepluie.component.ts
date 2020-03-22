import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Relevepluie } from '../models/relevepluie';
import { Color } from "ng2-charts";
import { Observable } from "rxjs";
@Component({
  selector: 'app-relevepluie',
  templateUrl: './relevepluie.component.html',
  styleUrls: ['./relevepluie.component.css']
})

export class RelevepluieComponent implements OnInit {
    annee: any;
    mois: any;

  lastvalue:any = [];

  relevepluie: Relevepluie = new Relevepluie();
  submitted = false;
  
  public labelsDay:any = [];
  dataValuesDay:Array<Number> = new Array();
  
  private chartDataDay: Array<any>;
  
  public barChartLabelsDay: any[] = this.labelsDay;
  public barChartTypeDay = 'bar';
  public barChartLegendDay = true;
  public barChartOptionsDay: any = {
            scales : {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  sugestedMax: 50
                }
              }]
            }
        };
  public chartHoveredDay = '';
  public chartClickedDay = '';
  public barChartColorsDay: Array<Color> = [{
      backgroundColor: '#00BFFF',
      hoverBackgroundColor: '#00008B'
  }];
  
  public barChartDataDay: any[] =     [
                                { dataValuesDay: this.dataValuesDay, label: 'Pluie par jour en mm' },
                            ];
  
 constructor(public restService:RestService, private route: ActivatedRoute, private router: Router) {
 }
 
  ngOnInit() {
    this.getLastValues();
  }
  
  
  searchByMonthByYear(annee, mois){
      this.barChartDataDay=[0];
//      this.barChartLabelsDay=[0];
      console.log("**** annee: " + annee + " mois: " + mois);
      this.listValueByDayForMonthByYear(annee, mois);
  }


  getLastValues() {
      this.lastvalue = [];
        this.restService.getLastValues().subscribe ((data: {}) => {
        console.log(data);
        this.lastvalue = data as Relevepluie;
        this.listValueByDayForMonthByYear(this.lastvalue.annee, this.lastvalue.mois);
      });
    }
  
  listValueByDayForMonthByYear(annee: any, mois: any){
      let resultData=[];
      this.restService.listValueByDayForMonthByYear(annee , mois).subscribe((resultData) => {
           console.log("**** getValueByDayForMonthByYear");
          for (let i = 0; i < resultData.length; i++) {
            this.dataValuesDay.push(resultData[i].valeur)
            this.labelsDay.push((resultData[i].jour))
            this.barChartDataDay.push([(resultData[i].jour), resultData[i].valeur]);
          }
          console.log("labelsDay :" + this.labelsDay);
          
            this.barChartLabelsDay = this.labelsDay;
              this.barChartDataDay = this.dataValuesDay;
      })
  }
 
  
}

   
 // https://www.concretepage.com/angular/angular-httpclient-post
  

