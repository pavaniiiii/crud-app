import React from "react";
import "./chart.css"
import * as ReactDOM from 'react-dom';
import ReactApexChart from "react-apexcharts";

export default class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
          name: "This Month",
          data:[1200, 1441, 362, 242, 1013, 1018, 1129, 1037, 1136, 951, 1132, 1135] 
        },
        {
          name: "This Week",
          data: [1100, 2200, 2034, 1182,1195, 1326, 4212, 2453, 3644, 3468, 3685, 3210]
        },
        {
          name: 'Today',
          data: [800, 757, 974, 199, 675, 238, 362, 117, 582, 656, 545, 847]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [5, 7, 5],
          curve: 'straight',
          width: [2, 2, 2],
          // dashArray: [0, 8, 5]
        },
        title: {
          text: 'Last 1 Year',
          align: 'left'
        },
        legend: {
          tooltipHoverFormatter: function(val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
          }
        },
        
        markers: {
          size: [4],
          hover: {
            sizeOffset: 1
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec'
          ],
        },
        yaxis:{
           title:{
            text:"Income"
           }
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + "&#8377"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val + " &#8377"
                }
              }
            },
            {
              title: {
                formatter: function (val) {
                  return val + "&#8377";
                }
              }
            }
          ]
        },
        grid: {
          borderColor: '#f1f1f1',
        }
      },
    
    
    };
  }



  render() {
    return (
      

<div className="chart">
<ReactApexChart options={this.state.options}   series={this.state.series} type="line" height={350} width="700" />
</div>


    );
  }
}

// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer);