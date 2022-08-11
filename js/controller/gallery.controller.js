'use strict'

function renderGalleryChart() {
  const strHTMLs = gGalleryCharts.map(
    (chart) =>
      `
        <div class="card" onclick="onChartSelect('${chart.id}')">
        <img src="style/img/gallery/${chart.url}" />
        </div>`
  )

  const elGallery = document.querySelector('.content-gallery')

  //   console.log(strHTMLs.join(''))
  elGallery.innerHTML = strHTMLs.join('')
}

function onChartSelect(chartID) {
  setChartSelect(chartID)
  drawCharts()
  renderEditor()
  onToggle()
}
