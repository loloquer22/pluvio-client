import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from "app/services/rest.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Color, BaseChartDirective } from "ng2-charts";
import { Observable } from "rxjs";
import { RelevepluieNbrDayRain } from "app/models/relevepluienbrdayrain";
import { Input } from "@angular/core";

@Component( {
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.css']
} )
export class StatComponent implements OnInit {
    moisRain: string;
    @ViewChild(BaseChartDirective) chart: BaseChartDirective;
      
    private productObservable: Observable<RestService>;
    
    moisYear: any;
    anneeYear: any;

public labels:any = [];
    
dataValues:Array<Number> = new Array();

public mois: number;
  
  private chartData: Array<any>;

public barChartLabels: any[] = this.labels;
  public barChartType = 'bar';
  public Day = false;
  public barChartOptions: any = {
          scales : {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
      };
  public chartHovered = '';
  public chartClicked = '';
  public barChartLegend= 'true';
  public barChartColors: Array<Color> = [{
      backgroundColor: '#00BFFF',
      hoverBackgroundColor: '#00008B'
  }];

  public barChartData: any[] = [
                                
      { dataValues: this.dataValues, label: this.moisRain + ' Nombre de jour de pluie par mois' },
  ];
  

  
  public labelsDay:any = [];
  dataValuesDay:Array<Number> = new Array();
  private barchartDataDay: Array<any> =[];
  
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
  ChartOptions = {}
//  public chartHoveredDay = '';
//  public chartClickedDay = '';
  // events
  public chartClickedDay(e: any): void {
    console.log(e);
  }

  public chartHoveredDay(e: any): void {
    console.log(e);
  }
  public barChartColorsDay: Array<Color> = [{
      backgroundColor: '#00BFFF',
      hoverBackgroundColor: '#00008B'
  }];
  
  
  
  public barChartDataDay: any[] =     [
                                { dataValuesDay: this.dataValuesDay, label: 'Pluie par jour en mm' },
                            ];

constructor(public restService:RestService, private route: ActivatedRoute, private router: Router) {}

ngOnInit() {
//    this.getValuesByYear(0);
//    this.getNbrDayRain(this.mois);
//    setInterval(() => {
//        this.searchByMonthByYear();
 //       this.chart.chart.update();
//    }, 5000);
    
//    this.getNbrDayRain( this.mois );
}



getNbrDayRain( moisRain ) {
    console.log("**==** mois " + moisRain);
//this.restService.getNbreDayRain(moisRain).subscribe (( result) => {
//    console.log("**** valuesByYear " + result);
//      this.chartData = [];
//      for (let i = 0; i < result.length; i++) {
//        this.dataValues.push(result[i].nbrdays)
//        this.labels.push((result[i].annee))
//        this.chartData.push([(result[i].annee), result[i].nbrdays]);
//      }
//      
//        this.barChartLabels = this.labels;
//          this.barChartData = this.dataValues;
//  })
}

searchByMonthByYear(annee: any, mois: any){
    this.dataValuesDay=[];
    console.log(" * annee: " + annee + " * mois: " + mois);
    
//    this.restService.listValueByDayForMonthByYear(annee , mois).subscribe((resultData) => {
//        for (let i = 0; i < resultData.length; i++) {
//          this.dataValuesDay.push(resultData[i].valeur)
//          this.labelsDay.push((resultData[i].jour))
//          this.barChartDataDay.push([(resultData[i].jour), resultData[i].valeur]);
//        }
//            this.refreshChart(this.labelsDay,this.dataValuesDay );
//    })
}

clearRain(){
    this.labels=[];
    this.dataValues=[];
    
        console.log(" ** barChartLabels :" + this.labels);
        console.log(" ** barChartDataDay :" + this.dataValues);
          this.barChartLabels = this.labels;
            this.barChartData = [
                                   { dataValues: 0, label:' Nombre de jour de pluie par mois' },
                               ]
            this.moisRain = "mois";

  }

clear(){
    this.labelsDay=[];
    this.dataValuesDay=[];
          this.barChartLabelsDay = this.labelsDay;
          this.barChartDataDay = [{ dataValuesDay: 0 , label: 'Pluie par jour en mm' },
];
            this.moisYear = "Mois";
            this.anneeYear = "Année";

  }



refreshChart(labelsDay, dataValuesDay){
          this.barChartLabelsDay = this.labelsDay;
            this.barChartDataDay = this.dataValuesDay;
            
            
            this.chart.chart.update();
//    })
}
}