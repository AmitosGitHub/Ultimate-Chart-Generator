'use strict'

var gChartValueSelect = 'precent'
var gChartDefulate = [
  {
    name: 'Shabi',
    rate: 200,
    color: getRandomColor(),
  },
  {
    name: 'Uza',
    rate: 130,
    color: getRandomColor(),
  },
  {
    name: 'Batz',
    rate: 250,
    color: getRandomColor(),
  },
  {
    name: 'Puki',
    rate: 350,
    color: getRandomColor(),
  },
]

function clearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function setBuildeChart(title, terms) {
  //TODO dip copy line 42
  gChart = {
    theme: 'rectangles',
    title: 'Elections Results',
    style: {
      font: 'Arial',
      fontSize: '45px',
      backgroundColor: 'transparent',
    },
    valueType: 'percent/value',
    terms: [
      {
        label: 'Puk',
        value: 50,
        color: 'pink',
      },

      {
        label: 'Muk',
        value: 50,
        color: 'green',
      },
    ],
  }
}

function setChartValueSelect(val) {
  gChartValueSelect = val
}
