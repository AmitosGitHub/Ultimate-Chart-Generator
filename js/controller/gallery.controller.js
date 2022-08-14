'use strict'

function renderGalleryChart() {
  const strHTMLs = gGalleryCharts.map(
    (chart) =>
      `
        <img src="style/img/gallery/${chart.url}" onclick="onChartSelect('${chart.id}')" class="card"/>
        `
  )
  const elGallery = document.querySelector('.content-gallery')
  elGallery.innerHTML = strHTMLs.join('')
}

function onChartSelect(chartID) {
  setChartSelect(chartID)
  isDoneSearch = true
  clearInputSearch()
  renderCanvas()
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

function onInputSearch(val) {
  isDoneSearch = false
  setFilterInputSearch(val)
  renderGalleryChart()
  clearInputSearch()
}
