import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from './api.service';
import { Chart } from 'chart.js';

import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  orgUnits = [];
  entities = [];
  events = [];
  show = false;
  showChart = false;
  chart = [];

  selectedUnit = null;
  selectedEntity = null;

  notes = '';
  effects = '';

  // @ViewChild('chart') el: ElementRef;


  constructor(private api: ApiService) {

  }
  public ngOnInit(): void {
    // this.basicChart()
    this.api
      .getOrgUnits()
      .subscribe(
        (events) => {
          this.orgUnits = events;
        }
      );
  }

  getEntities() {
    this.entities = [];
    this.selectedEntity = null;
    this.api.getAllEntities(this.selectedUnit).subscribe((entities) => {
      const found = _.groupBy(entities, 'orgUnit');
      const finalData = found[this.selectedUnit];
      let data = [];

      _.forEach(finalData, (e) => {
        const displayName = _.result(_.find(e['attributes'], (a) => {
          return a.attribute === 'JId4vV2B6qC';
        }), 'value');
        data = [...data, {
          id: e['trackedEntityInstance'],
          displayName
        }];
      });
      this.entities = data;
    })
    this.show = true;
  }


  getData() {
    this.showChart = false;
    this.api.getAllEvents(this.selectedEntity).subscribe((events) => {
      const found = _.groupBy(events, 'trackedEntityInstance');
      const finalData = found[this.selectedEntity];

      if (finalData && finalData.length > 0) {
        this.showChart = true;
        const realData = finalData[0]['dataValues'];

        // Numarators
        const janNumarator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'wPUo59uvP1l';
        }), 'value');

        const febNumarator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'CrgUauarAep';
        }), 'value');

        const marNumarator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'oTOgPaJOA7o';
        }), 'value');

        const aprNumarator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'nlXqsYgtkS9';
        }), 'value');

        const mayNumarator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'gtZf7tI3zpZ';
        }), 'value');

        const junNumarator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'mGHksofP3Gn';
        }), 'value');

        const julNumarator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'JcoAloFWpHx';
        }), 'value');

        const augNumarator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'SclpBjs3gUQ';
        }), 'value');

        const sepNumarator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'vhmx6i16vrj';
        }), 'value');

        const octNumarator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'lxelVfkqdax';
        }), 'value');

        const novNumarator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'guljgJd4DVz';
        }), 'value');

        const decNumarator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'f3TA0gQTzjw';
        }), 'value');

        // Denominators

        const janDenominator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'hIBOOXLUPg1';
        }), 'value') || 0;

        const febDenominator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'tkfILmSxiKf';
        }), 'value');

        const marDenominator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'Ii4Lda8b2II';
        }), 'value');

        const aprDenominator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'YbsXhR3sMrh';
        }), 'value');

        const mayDenominator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'Nh8ewhSJi95';
        }), 'value');

        const junDenominator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'aBLcjEZNsMk';
        }), 'value');

        const julDenominator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'Epz38NKWmgG';
        }), 'value');

        const augDenominator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 't7os2xrbkbo';
        }), 'value');

        const sepDenominator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'MXGz9n1y951';
        }), 'value');

        const octDenominator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'BeymU6DKjqg';
        }), 'value');

        const novDenominator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'iIy5ap3gwhS';
        }), 'value');

        const decDenominator: number = _.result(_.find(realData, (a) => {
          return a.dataElement === 'AxiZg4I3oBF';
        }), 'value');

        this.notes = _.result(_.find(realData, (a) => {
          return a.dataElement === 'P76638kLSv3';
        }), 'value');

        this.effects = _.result(_.find(realData, (a) => {
          return a.dataElement === 'FBHoFaDSbs7';
        }), 'value');

        const numerators = [
          janNumarator,
          febNumarator,
          marNumarator,
          aprNumarator,
          mayNumarator,
          junNumarator,
          julNumarator,
          augNumarator,
          sepNumarator,
          octNumarator,
          novNumarator,
          decNumarator
        ];

        const denominators = [
          janDenominator,
          febDenominator,
          marDenominator,
          aprDenominator,
          mayDenominator,
          junDenominator,
          julDenominator,
          augDenominator,
          sepDenominator,
          octDenominator,
          novDenominator,
          decDenominator
        ];

        const indicators = [
          100 * janNumarator / janDenominator,
          100 * febNumarator / febDenominator,
          100 * marNumarator / marDenominator,
          100 * aprNumarator / aprDenominator,
          100 * mayNumarator / mayDenominator,
          100 * junNumarator / junDenominator,
          100 * julNumarator / julDenominator,
          100 * augNumarator / augDenominator,
          100 * sepNumarator / sepDenominator,
          100 * octNumarator / octDenominator,
          100 * novNumarator / novDenominator,
          100 * decNumarator / decDenominator
        ];

        const labels = ['Month1', 'Month2', 'Month3', 'Month4', 'Month5', 'Month6', 'Month7', 'Month8', 'Month9', 'Month10', 'Month11', 'Month12']

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              // {
              //   data: numerators,
              //   borderColor: "#3cba9f",
              //   fill: false,
              //   label: 'Numarator'
              // },
              // {
              //   data: denominators,
              //   borderColor: "#ffcc00",
              //   fill: false,
              //   label: 'Denominator'
              // },
              {
                data: indicators,
                borderColor: "#555555",
                fill: false,
                label: 'Indicator'
              },
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });
      } else {
        this.showChart = false;
      }
    })
  }
  // basicChart() {
  //   const element = this.el.nativeElement;
  //   const data = [
  //     {
  //       x: [1, 2, 3, 4, 5],
  //       y: [1, 2, 4, 8, 6]
  //     }
  //   ]
  //   const style = {
  //     margin: { t: 0 }
  //   }
  //   Plotly.plot(element, data, style)
  // }
}
