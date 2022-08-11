'use strict'

function onInit() {
  gChartSelected = null
  createCharts()
  renderGalleryChart()
  gElCanvas = document.querySelector('#my-canvas')
  gCtx = gElCanvas.getContext('2d')
  drawLineCanvas()
  window.addEventListener('resize', () => {
    resizeCanvas()

    if (!gChart) {
      drawCharts()
    } else {
      renderCanvas()
    }
  })
}

function onToggle() {
  document.querySelector('.container-generator').classList.toggle('hide')
  document.querySelector('.container-gallery').classList.toggle('hide')
}
