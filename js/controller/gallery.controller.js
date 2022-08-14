'use strict'

function renderGalleryChart() {
  const strHTMLs = gGalleryCharts.map(
    (chart) =>
      `
        
        <img src="style/img/gallery/${chart.url}" onclick="onChartSelect('${chart.id}')" class="card"/>
        `
  )

  const elGallery = document.querySelector('.content-gallery')

  //   console.log(strHTMLs.join(''))
  elGallery.innerHTML = strHTMLs.join('')
}

function onChartSelect(chartID) {
  setChartSelect(chartID)
  drawCharts(gChart.terms)
  renderEditor()
  onToggle()
}

function onFilterByName(chartName) {
  setFilter(chartName)
  renderGalleryChart()
}

function onAllGallery() {
  createGalleryCharts()
  renderGalleryChart()
}
