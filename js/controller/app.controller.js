'use strict'

function onInit() {
  gChartSelected = null
  gChartDefaults = createDefaultCharts()
  console.log(' gChartDefaults:', gChartDefaults)
  gChart = createChart('gChart', gChartDefaults)
  console.log('gChart:', gChart)
  createGalleryCharts()
  renderGalleryChart()
  gElCanvas = document.querySelector('#my-canvas')
  gCtx = gElCanvas.getContext('2d')
  drawBoardCanvas()
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
