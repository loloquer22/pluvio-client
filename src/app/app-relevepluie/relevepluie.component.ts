import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Relevepluie } from '../relevepluie';
import { Color } from "ng2-charts";

@Component({
  selector: 'app-relevepluie',
  templateUrl: './relevepluie.component.html',
  styleUrls: ['./relevepluie.component.css']
})

export class RelevepluieComponent implements OnInit {
  
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
  
  public barChartDataDay: any[] = [
//                                { labelsDay: this.labelsDay, label: 'Jour' },    
                                { dataValuesDay: this.dataValuesDay, label: 'Pluie par jour en mm' },
                            ];
 
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
    this.getValueByDayForMonthByYear();
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
  
  getValueByDayForMonthByYear(){
      this.restService.getvalueByDayForMonthByYear().subscribe((resultData) => {
          console.log(resultData);
          this.chartDataDay = [];
          for (let i = 0; i < resultData.length; i++) {
            this.dataValuesDay.push(resultData[i].valeur)
            this.labelsDay.push((resultData[i].jour))
            this.chartDataDay.push([(resultData[i].jour), resultData[i].valeur]);
          }
          
            this.barChartLabelsDay = this.labelsDay;
              this.barChartDataDay = this.dataValuesDay;
      })
  }
}

   
 // https://www.concretepage.com/angular/angular-httpclient-post
  

