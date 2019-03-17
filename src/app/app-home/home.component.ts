import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from 'ng2-charts';
import { Observable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
  public years:any = [];

  public labels:any = [];
  dataValues:Array<Number> = new Array();

    
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
    public barChartLegend= '';
    public barChartColors: Array<Color> = [{
        backgroundColor: '#00008B',
        hoverBackgroundColor: '#1E90FF'
    }];

    public barChartData: any[] = [
        { dataValues: this.dataValues, label: 'Pluie en mm' },
    ];
    


  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) {
  }
 
  ngOnInit() {
    this.getListYear();
    this.getValuesByYear();
  }

  getListYear(){
    this.years = [];
      this.rest.getListYear().subscribe ((data: {}) => {
      console.log(data);
      this.years = data;
    });
  }
 getValuesByYear(){
    this.rest.getValuesByYear().subscribe (( result) => {
      console.log("**** valuesByYear " + result);
        this.chartData = [];
        for (let i = 0; i < result.length; i++) {
          this.dataValues.push(result[i].valeur)
          this.labels.push((result[i].annee))
          this.chartData.push([(result[i].annee), result[i].valeur]);
        }
        
          this.barChartLabels = this.labels;
            this.barChartData = this.dataValues;
    })
  }
 
  

}
