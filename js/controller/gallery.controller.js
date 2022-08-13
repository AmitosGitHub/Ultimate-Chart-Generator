'use strict'

function renderGalleryChart() {
  const strHTMLs = gGalleryCharts.map(
    (chart) =>
      // `
      //   <div class="card" onclick="onChartSelect('${chart.id}')">
      //   <img src="style/img/gallery/${chart.url}" />
      //   </div>`
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
