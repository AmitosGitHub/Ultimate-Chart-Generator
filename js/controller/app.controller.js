'use strict'

function onInit() {
  console.log('hjef')
  gChartSelected = null
  createCharts()
  renderGalleryChart()
  gElCanvas = document.querySelector('#my-canvas')
  gCtx = gElCanvas.getContext('2d')
}

function onToggle() {
  document.querySelector('.container-generator').classList.toggle('hide')
  document.querySelector('.container-gallery').classList.toggle('hide')
}
