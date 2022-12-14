'use strict'

var gChartSelected
var gChartNames = [
  { name: 'bar', col: 4, theme: 'rectangles' },
  { name: 'scatter', col: 4, theme: 'circle' },
  { name: 'bubble', col: 3, theme: 'circle' },
  { name: 'bar-Line', col: 4, theme: 'rectangles' },
  { name: 'full-screen', col: 3, theme: 'rectangles' },
  { name: 'line', col: 4, theme: 'line' },
  { name: 'pie', col: 4, theme: 'circle' },
  { name: 'area', col: 2, theme: 'area' },
  { name: 'circle', col: 3, theme: 'circle' },
  { name: 'pyramid', col: 3, theme: 'rectangles' },
]
var gGalleryCharts
var gFilterName
var isDoneSearch = true

function createGalleryCharts() {
  let charts = []
  for (let i = 0; i < gChartNames.length; i++) {
    const currChartName = gChartNames[i]
    const chart = createCardChart(currChartName)
    charts.push(chart)
  }
  gGalleryCharts = charts
}

function createCardChart(chartName) {
  return {
    id: makeId(),
    name: chartName.name,
    url: `${chartName.name}.png`,
    col: chartName.col,
    theme: chartName.theme,
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

function setFilter(chartName) {
  gFilterName = chartName
  setFilterByName()
}

function setFilterByName() {
  gGalleryCharts = gGalleryCharts.filter((chart) => chart.name === gFilterName)
}

function setFilterInputSearch(val) {
  gGalleryCharts = gGalleryCharts.filter(
    (chart) => chart.name.substring(0, val.length) === val
  )
}

function clearInputSearch() {
  const elInput = document.querySelector('#search')

  if (isDoneSearch || !elInput.value) {
    document.querySelector('#search').value = ''
    onAllGallery()
  }
}
