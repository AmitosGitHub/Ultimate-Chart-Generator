'use strict'

var gChart
var gChartValueSelect = 'precent'
var gChartDefulate = [
  {
    label: 'Shabi',
    rate: 200,
    color: getRandomColor(),
  },
  {
    label: 'Uza',
    rate: 130,
    color: getRandomColor(),
  },
  {
    label: 'Batz',
    rate: 250,
    color: getRandomColor(),
  },
  {
    label: 'Puki',
    rate: 350,
    color: getRandomColor(),
  },
]

function clearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function setBuildeChart(title = 'Title', terms) {
  //TODO dip copy line 42
  gChart = {
    title: title,
    style: {
      font: 'Arial',
      fontSize: '45px',
      backgroundColor: 'transparent',
    },
    valueType: 'percent/value',
    terms: JSON.parse(JSON.stringify(terms)),
  }
}

function setChartValueSelect(val) {
  gChartValueSelect = val
}

function getDefulateChart() {
  return gChartDefulate
}
