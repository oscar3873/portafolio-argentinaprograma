import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataset, ChartType, Plugin } from 'chart.js';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

  doughnut:ChartType = "doughnut";

  data:ChartData[] = [{
    datasets: [{
        data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        backgroundColor: "#9496F7",
        borderColor:"#40416B",
    }],
},{
  datasets: [{
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      backgroundColor: "#9496F7",
      borderColor:"#40416B",
  }],
},{
  datasets: [{
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      backgroundColor: "#9496F7",
      borderColor:"#40416B",
  }],
},{
  datasets: [{
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      backgroundColor: "#9496F7",
      borderColor:"#40416B",
  }],
},{
  datasets: [{
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      backgroundColor: "#9496F7",
      borderColor:"#40416B",
  }],
},{
  datasets: [{
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      backgroundColor: "#9496F7",
      borderColor:"#40416B",
  }],
},{
  datasets: [{
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      backgroundColor: "#9496F7",
      borderColor:"#40416B",
  }],
},{
  datasets: [{
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      backgroundColor: "#9496F7",
      borderColor:"#40416B",
  }],
}]

  constructor() { }

  ngOnInit(): void {
  }

}
