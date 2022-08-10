'use strict'

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
