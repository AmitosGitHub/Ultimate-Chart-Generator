'use strict'

function onInit() {
  console.log('hjef')
  gSelcetedChart = null
  renderGalleryChart()
}

function onToggle() {
  document.querySelector('.container-generator').classList.toggle('hide')
  document.querySelector('.container-gallery').classList.toggle('hide')
}
