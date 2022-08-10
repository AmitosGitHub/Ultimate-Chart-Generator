'use strict'

var gSelcetedChart
var gGalleryCharts = [
  { id: '000', name: 'Bar', url: 'bar.png', rate: 0 },
  { id: '001', name: 'Line', url: 'line.png', rate: 0 },
  { id: '002', name: 'Pie', url: 'pie.png', rate: 0 },
  { id: '003', name: 'Bar-Line', url: 'bar-line.png', rate: 0 },
  { id: '004', name: 'Area', url: 'area.png', rate: 0 },
  { id: '005', name: 'Circle', url: 'circle.png', rate: 0 },
  { id: '006', name: 'Pyramid', url: 'pyramid.png', rate: 0 },
]

function setSelectedChart(chartID) {
  const chart = getChartById(chartID)
  console.log('chart:', chart)
  gSelcetedChart = chart
}

function getChartById(chartID) {
  return gGalleryCharts.find((chart) => chart.id === chartID)
}
