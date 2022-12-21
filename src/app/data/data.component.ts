// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-data',
//   templateUrl: './data.component.html',
//   styleUrls: ['./data.component.css']
// })
// export class DataComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit, ViewChild, } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { Date } from 'core-js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  constructor(){
  }
  ngOnInit(): void {
  
    console.log(this.daa);
  }
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },

    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [

  ];

  public barChartData: ChartData<'bar'> = {
    labels: ['2022 JAN', '2022 FEB', '2022 MAR', '2022 APR', '2022 MAY', '2022 JUN', '2022 JUL', '2022 AUG', '2022 SEP', '2022 OCT'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40, 35, 59, 80], label: 'Sales Volume' },
      { data: [28, 48, 40, 19, 86, 27, 90, 75, 48, 40], label: 'Sales Value' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40];


    this.chart?.update();
  }
  maxDate: any = "2022-11-22";
  tomaxDate: any = "2022-11-21";
  // futureDateDisable(){
  //   var date:date = new Date()
  //   console.log(date)
  // }
  // weakly charts **************************************
  public barChartOp: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },

    }
  };
 
  dates: any = ["2022-11-14", "2022-11-15", "2022-11-16", "2022-11-17", "2022-11-18", "2022-11-19", "2022-11-20"]
  daa: any = [];
  
  datapoints: any = [Math.round(Math.random() * 100), Math.round(Math.random() * 100), 16, 29, Math.round(Math.random() * 100), 23, Math.round(Math.random() * 100)];
  public barChartDat: ChartData<'line'> = {
    labels: this.daa,
    datasets: [
      { data: this.datapoints, label: 'Weekly Sales' },
    ]
  };
  filterData() {
    const dates2: any = [...this.dates];
    // console.log(dates2);
    const startdate: any = document.querySelector('#startdate');
    const enddate: any = document.querySelector('#enddate');
    const indexstartdate = dates2.indexOf(startdate.value);
    // console.log(indexstartdate);
    const indexenddate = dates2.indexOf(enddate.value);
    // console.log(indexenddate);
    //dates arry slicing ..................
    const filterdata = dates2.slice(indexstartdate, indexenddate + 1);
    //replace the lables in the charts.............
    // this.barChartDat.labels = filterdata;
    // this.dates = filterdata;
    this.daa = filterdata;
    console.log(this.daa);
  }
}



