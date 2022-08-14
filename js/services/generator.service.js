'use strict'

var gChart
var gChartValueSelect = 'percent'
var gChartDefaults
var isUserChart = false

function setBuildChart(title = 'Hello', terms) {
  gChart = {
    title: title,
    style: {
      font: 'Arial',
      fontSize: '45px',
      backgroundColor: 'transparent',
    },
    valueType: gChartValueSelect,
    terms: JSON.parse(JSON.stringify(terms)),
  }
  console.log(' gChart:', gChart)
}

function setChartValueSelect(val) {
  gChartValueSelect = val
}

function createDefaultCharts() {
  return [
    {
      label: 'Shabi',
      rate: 20,
      color: getRandomColor(),
    },
    {
      label: 'Uza',
      rate: 30,
      color: getRandomColor(),
    },
    {
      label: 'Batz',
      rate: 25,
      color: getRandomColor(),
    },
    {
      label: 'Puki',
      rate: 25,
      color: getRandomColor(),
    },
  ]
}
function getDefaultChart() {
  return gChartDefault
}
function setDeleteTerm(val) {
  const idx = val - 1
  gChart.terms.splice(idx, 1)
}
function setUpdateTerm(idx, dataInput) {
  gChart.terms[idx - 1]
  gChart.terms[idx - 1] = JSON.parse(JSON.stringify(dataInput))
}
function setAddTerm() {
  gChart.terms.push({ label: 'label', rate: 10, color: 'red' })
}

function createChart(title = 'Hello', newTerms) {
  return {
    title: title,
    style: {
      font: 'Arial',
      fontSize: '45px',
      backgroundColor: 'transparent',
    },
    valueType: gChartValueSelect,
    terms: JSON.parse(JSON.stringify(newTerms)),
  }
}

function getInputlName(term) {
  return isUserChart ? term.label : ''
}
function getInputlRate(term) {
  return isUserChart ? term.rate : ''
}
function getInputlColor(term) {
  return isUserChart ? term.color : ''
}
