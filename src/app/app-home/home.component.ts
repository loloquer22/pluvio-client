import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public years:any = [];

  public labels:any = [];
  dataValues:Array<Number> = new Array();

    public labelsDay:any = [];
    dataValuesDay:Array<Number> = new Array();
    
    private chartData: Array<any>;
    private chartDataDay: Array<any>;

  public barChartLabels: any[] = this.labels;
    public barChartType = 'bar';
    public Day = false;
    public barChartOptions = '';
    public chartHovered = '';
    public chartClicked = '';
    public barChartColors: Array<Color> = [{
        backgroundColor: '#00008B',
        hoverBackgroundColor: '#1E90FF'
    }];

    public barChartData: any[] = [
        { dataValues: this.dataValues, label: 'Pluie en mm' },
    ];
    
    public barChartLabelsDay: any[] = this.labelsDay;
    public barChartTypeDay = 'bar';
    public barChartLegendDay = true;
    public barChartOptionsDay = '';
    public chartHoveredDay = '';
    public chartClickedDay = '';
    public barChartColorsDay: Array<Color> = [{
        backgroundColor: '#00BFFF',
        hoverBackgroundColor: '#00008B'
    }];
    
    public barChartDataDay: any[] = [
//                                  { labelsDay: this.labelsDay, label: 'Jour' },    
                                  { dataValuesDay: this.dataValuesDay, label: 'Pluie par jour en mm' },
                              ];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }
 
  ngOnInit() {
    this.getListYear();
    this.getValuesByYear();
    this.getValueByDayForMonthByYear();
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
      console.log(result);
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
  
  getValueByDayForMonthByYear(){
      this.rest.getvalueByDayForMonthByYear().subscribe((resultData) => {
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
