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
    @ViewChild(BaseChartDirective) chart: BaseChartDirective;
      
    private productObservable: Observable<RestService>;
    
    moisYear: any;
    anneeYear: any;

public labels:any = [];
    moisLegend: string;
    
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
                                
      { dataValues: this.dataValues, label: this.moisLegend + ' Nombre de jour de pluie par mois' },
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
//                                       setTimeout(() => {
//                                           this.chart.chart.data.datasets[0].data = this.dataValuesDay
//                                           this.chart.chart.update()
//                                       }, 2000)
                                  {data: [], label: ''},      
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
    
}



getNbrDayRain( mois ) {
    console.log("**==** mois " + mois);
this.restService.getNbreDayRain(mois).subscribe (( result) => {
    console.log("**** valuesByYear " + result);
      this.chartData = [];
      for (let i = 0; i < result.length; i++) {
        this.dataValues.push(result[i].nbrdays)
        this.labels.push((result[i].annee))
        this.chartData.push([(result[i].annee), result[i].nbrdays]);
      }
      
        this.barChartLabels = this.labels;
          this.barChartData = this.dataValues;
          this.mois;
  })
}

searchByMonthByYear(annee: any, mois: any){
//    this.labelsDay=[0];
    this.dataValuesDay=[];
//    this.barChartLabelsDay = this.labelsDay;
//    this.barChartDataDay = this.dataValuesDay;
    console.log(" * annee: " + annee + " * mois: " + mois);
    
    this.restService.listValueByDayForMonthByYear(annee , mois).subscribe((resultData) => {
        console.log("getValueByDayForMonthByYear");
        for (let i = 0; i < resultData.length; i++) {
          this.dataValuesDay.push(resultData[i].valeur)
          this.labelsDay.push((resultData[i].jour))
          this.barChartDataDay.push([(resultData[i].jour), resultData[i].valeur]);
        }
        console.log(" * labelsDay :" + this.labelsDay);
        console.log(" * dataValuesDay :" + this.dataValuesDay);
//          this.barChartLabelsDay = this.labelsDay;
//            this.barChartDataDay = this.dataValuesDay;
            
//            this.chart.chart.update();
            this.refreshChart(this.labelsDay,this.dataValuesDay );
    })
//    setInterval(() => {
//    this.chart.chart.update();
//    }, 1000);
}

clear(){
    this.labelsDay=[0];
    this.dataValuesDay=[0];
    
//    this.restService.listValueByDayForMonthByYear(annee , mois).subscribe((resultData) => {
//        console.log("getValueByDayForMonthByYear");
//        for (let i = 0; i < resultData.length; i++) {
//          this.dataValuesDay.push(resultData[i].valeur)
//          this.labelsDay.push((resultData[i].jour))
//          this.barChartDataDay.push([(resultData[i].jour), resultData[i].valeur]);
//        }
        console.log(" ** barChartLabelsDay :" + this.labelsDay);
        console.log(" ** barChartDataDay :" + this.dataValuesDay);
          this.barChartLabelsDay = this.labelsDay;
            this.barChartDataDay = this.dataValuesDay;
            
            this.moisYear = "Mois";
            this.anneeYear = "Année";
            
//            this.chart.chart.update();
//            this.refreshChart(this.barChartLabelsDay,this.barChartDataDay );
            
    
//    this.barChartLabelsDay=[];
//    this.barChartDataDay=[];
//
//    this.chart.chart.data.datasets[0].data = this.barChartLabelsDay=[];;
//    this.chart.chart.data.datasets[0].data = this.barChartDataDay=[]
//    
//    this.chart.chart.update();
//    this.resultData;
//    this.chart.chart.update();
//    this.refreshChart();
//    setTimeout(() => {
//        this.chart.chart.data.datasets[0].data = this.dataValuesDay
//        this.chart.chart.update()
//    }, 2000);
  }



refreshChart(labelsDay, dataValuesDay){
//    this.labelsDay.show = false;
//    setTimeout(()=>{
//        this.labelsDay.show = true;
//    },1);
    console.log(" *** labelsDays :" + labelsDay);
    console.log(" *** dataValuesDay :" + dataValuesDay);
//        console.log(" *** barChartLabelsDay :" + this.barChartLabelsDay);
//        console.log(" *** barChartDataDay :" + this.barChartDataDay);
          this.barChartLabelsDay = this.labelsDay;
            this.barChartDataDay = this.dataValuesDay;
            
            
            this.chart.chart.update();
//    })
}
}