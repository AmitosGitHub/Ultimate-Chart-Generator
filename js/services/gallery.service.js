'use strict'

var gChartSelected
var gChartNames = [
  'Bar',
  'Line',
  'Pie',
  'Bar-Line',
  'Area',
  'Circle',
  'Pyramid',
]
var gGalleryCharts

function createCharts() {
  let charts = []
  for (let i = 0; i < 7; i++) {
    const currChartName = gChartNames[i]
    const chart = createChart(currChartName)
    charts.push(chart)
  }
  gGalleryCharts = charts
}

function createChart(chartName) {
  return {
    id: makeId(),
    name: chartName,
    url: `${chartName}.png`,
    col: 4,
  }
}

function setChartSelect(chartID) {
  const chart = getChartById(chartID)
  console.log('chart:', chart)
  gChartSelected = chart
}

function getChartById(chartID) {
  return gGalleryCharts.find((chart) => chart.id === chartID)
}

function getChart() {
  return gChartSelected
}
