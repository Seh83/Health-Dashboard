import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Chart } from '../interfaces/interfaces';

@Component({
  selector: 'app-graph-component',
  templateUrl: './graph-component.component.html',
  styleUrls: ['./graph-component.component.scss']
})
export class GraphComponentComponent implements OnInit {
  public _data: any;
  @Input() set selected_data(data) {
    this._data = data;
    this.createChartData(this._data);
  }

  // Default Chart When Onloading
  chart: Chart = {
    title: 'Health Data Breakdown For 2015',
    type: 'ColumnChart',
    data: [
      ["2012", 900],
      ["2013", 1000],
      ["2014", 1170],
      ["2015", 1250],
      ["2016", 1530]
    ],
    height: 535,
    width: 650
  }

  constructor() { }

  ngOnInit(): void { }

  createChartData(data) {
    if (data !== undefined) {
      this.chart.data = [];
      for (let key in data) {
        let arr = []
        arr.push(key.substring(0, 5) + data[key])
        arr.push(Math.floor(Math.random() * 200))
        this.chart.data.push(arr)
      }
    }
  }
}
