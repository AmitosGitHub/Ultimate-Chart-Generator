'use strict'

function onInit() {
  gChartSelected = null
  gChartDefaults = createDefaultCharts()
  gChart = createChart('Default', gChartDefaults)
  createGalleryCharts()
  renderGalleryChart()

  gElCanvas = document.querySelector('#my-canvas')
  gCtx = gElCanvas.getContext('2d')
  drawBoardCanvas()
  window.addEventListener('resize', () => {
    resizeCanvas()
    renderCanvas()
  })
}

function onToggle() {
  document.querySelector('.container-generator').classList.toggle('hide')
  document.querySelector('.container-gallery').classList.toggle('hide')
}

function onToggleHamburger() {
  document.querySelector('.main-header-nav').classList.toggle('open-menu')
}
