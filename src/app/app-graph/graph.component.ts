import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Listyear } from '../models/listYear';
import { Totalbymonthbyyear } from '../models/totalByMonthByYear';

@Component( {
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.css']
} )
export class GraphComponent implements OnInit {

    [x: string]: any;
    listTotalByMonthByYears: Totalbymonthbyyear[];
    listYears: Listyear[];
    year: any;
    data2020: Array<any> = new Array();
    data2019: Array<any> = new Array();
    data2018: Array<any> = new Array();
    data2017: Array<any> = new Array();
    data2016: Array<any> = new Array();
    data2015: Array<any> = new Array();
    data2014: Array<any> = new Array();
    data2013: Array<any> = new Array();
    data2012: Array<any> = new Array();
    data2011: Array<any> = new Array();
    data2010: Array<any> = new Array();
    data2009: Array<any> = new Array();
    data2008: Array<any> = new Array();
    data2007: Array<any> = new Array();
    result: any;


    // lineChart
    public lineChartData2020: Array<any> = [
        { data: this.data2020, label: 'Series 2020' },
    ];
    public lineChartData2019: Array<any> = [
        { data: this.data2019, label: 'Series 2019' },
    ];
    public lineChartData2018: Array<any> = [
        { data: this.data2018, label: 'Series 2018' },
    ];

    public lineChartData2017: Array<any> = [
        { data: this.data2017, label: 'Series 2017' },
    ];

    public lineChartData2016: Array<any> = [
        { data: this.data2016, label: 'Series 2016' },
    ];

    public lineChartData2015: Array<any> = [
        { data: this.data2015, label: 'Series 2015' },
    ];

    public lineChartData2014: Array<any> = [
        { data: this.data2014, label: 'Series 2014' },
    ];

    public lineChartData2013: Array<any> = [
        { data: this.data2013, label: 'Series 2013' },
    ];

    public lineChartData2012: Array<any> = [
        { data: this.data2012, label: 'Series 2012' },
    ];

    public lineChartData2011: Array<any> = [
        { data: this.data2011, label: 'Series 2011' },
    ];

    public lineChartData2010: Array<any> = [
        { data: this.data2010, label: 'Series 2010' },
    ];

    public lineChartData2009: Array<any> = [
        { data: this.data2009, label: 'Series 2009' },
    ];

    public lineChartData2008: Array<any> = [
        { data: this.data2008, label: 'Series 2008' },
    ];

    public lineChartData2007: Array<any> = [
        { data: this.data2007, label: 'Series 2007' },
    ];

    public lineChartLabels: Array<any> = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    public lineChartOptions: any = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    public lineChartColors: Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';

    //    values: ListYears[];

    constructor( private restService: RestService ) { }

    getListYears() {
        this.restService.getListYear().subscribe( listYears => {
            for ( let i = 0; i < listYears.length; i++ ) {
                //                console.log( '****values ', listYears[i].annee );
                this.year = listYears[i].annee;
                this.getTotalByMonthByYear( this.year );
            }
        } );
    }

    getTotalByMonthByYear( year ) {

        this.restService.getTotalByMonthByYear( this.year ).subscribe( listTotalByMonthByYears => {
            //            listTotalByMonthByYears.forEach(listTotalByMonthByYears, function (value, key) {
            //            console.log( year, listTotalByMonthByYears );
            if ( 2020 === year ) {
                for ( let i = 0; i < listTotalByMonthByYears.length; i++ ) {
                    this.data2020.push( listTotalByMonthByYears[i].valeur );
                }
            }
            if ( 2019 === year ) {
                for ( let i = 0; i < listTotalByMonthByYears.length; i++ ) {
                    this.data2019.push( listTotalByMonthByYears[i].valeur );
//                    console.log( ' *****' + this.data2017 );

                }
            }
            if ( 2018 === year ) {
                for ( let i = 0; i < listTotalByMonthByYears.length; i++ ) {
                    this.data2018.push( listTotalByMonthByYears[i].valeur );
                }
            }
            if ( 2017 === year ) {
                for ( let i = 0; i < listTotalByMonthByYears.length; i++ ) {
                    this.data2017.push( listTotalByMonthByYears[i].valeur );
                }
            }
            if ( 2016 === year ) {
                for ( let i = 0; i < listTotalByMonthByYears.length; i++ ) {
                    this.data2016.push( listTotalByMonthByYears[i].valeur );
                }
            }
            if ( 2015 === year ) {
                for ( let i = 0; i < listTotalByMonthByYears.length; i++ ) {
                    this.data2015.push( listTotalByMonthByYears[i].valeur );
                }
            }
            if ( 2014 === year ) {
                for ( let i = 0; i < listTotalByMonthByYears.length; i++ ) {
                    this.data2014.push( listTotalByMonthByYears[i].valeur );
                }
            }
            if ( 2013 === year ) {
                for ( let i = 0; i < listTotalByMonthByYears.length; i++ ) {
                    this.data2013.push( listTotalByMonthByYears[i].valeur );
                }
            }
            if ( 2012 === year ) {
                for ( let i = 0; i < listTotalByMonthByYears.length; i++ ) {
                    this.data2012.push( listTotalByMonthByYears[i].valeur );
                }
            }
            if ( 2011 === year ) {
                for ( let i = 0; i < listTotalByMonthByYears.length; i++ ) {
                    this.data2011.push( listTotalByMonthByYears[i].valeur );
                }
            }
            if ( 2010 === year ) {
                for ( let i = 0; i < listTotalByMonthByYears.length; i++ ) {
                    this.data2010.push( listTotalByMonthByYears[i].valeur );
                }
            }
            if ( 2009 === year ) {
                for ( let i = 0; i < listTotalByMonthByYears.length; i++ ) {
                    this.data2009.push( listTotalByMonthByYears[i].valeur );
                }
            } if ( 2008 === year ) {
                for ( let i = 0; i < listTotalByMonthByYears.length; i++ ) {
                    this.data2008.push( listTotalByMonthByYears[i].valeur );
                }
            } if ( 2007 === year ) {
                for ( let i = 0; i < listTotalByMonthByYears.length; i++ ) {
                    this.data2007.push( listTotalByMonthByYears[i].valeur );
                }
            }
        } );

    }

    ngOnInit() {
        this.getListYears();
        //   this.getTotalByMonthByYear( this.year );
    }
    // events
    public chartClicked( e: any ): void {
        console.log( e );
    }

    public chartHovered( e: any ): void {
        console.log( e );
    }
}
