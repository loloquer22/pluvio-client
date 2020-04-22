import { Component, OnInit , Input} from '@angular/core';
import {Location} from '@angular/common';
import { RestService } from '../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Relevepluie } from '../models/relevepluie';
import { Color } from "ng2-charts";

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
    
    constructor(private route: ActivatedRoute,public restService:RestService,private location: Location) { }

  ngOnInit() {
      this.getLastValues();
  }
  getLastValues() {
      this.lastvalue = [];
        this.restService.getLastValues().subscribe ((data: {}) => {
        console.log(data);
        this.lastvalue = data as Relevepluie;
        this.getValueByDayForMonthByYear(this.lastvalue.annee, this.lastvalue.mois);
      });
    }
  
  addRelevepluie(relev: Relevepluie) {
      this.restService.addRelevepluie(relev)
        .subscribe(data => console.log(data), error => console.log(error));
      this.submitted = false;
      this.location.back();
    }
  
  searchByMonthByYear(){
      this.barChartDataDay= [];
      this.barChartLabelsDay=[];
  }
  
  getValueByDayForMonthByYear(annee: any, mois: any){
      this.restService.listValueByDayForMonthByYear(annee , mois).subscribe((resultData) => {
          console.log("getValueByDayForMonthByYear");
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
  
  goBack(): void {
      this.location.back();
    }
  
  onAdd(buttonType) {
      if(buttonType==="Added") {
          this.submitted = true;
          console.log(buttonType);
          this.getLastValues();
      }
  }

}
