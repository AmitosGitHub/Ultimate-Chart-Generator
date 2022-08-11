'use strict'

var gElCanvas
var gCtx
var gBarWidth = 50
var gBarSpace = 20

function drawCharts(charts = getDefulateChart()) {
  charts.forEach((term, idx) => {
    const { color, rate } = term
    gCtx.fillStyle = color
    term.y = gElCanvas.height - rate
    term.x = idx * (gBarSpace + gBarWidth)
    gCtx.fillRect(term.x, term.y, gBarWidth, rate)
  })
}

function canvasClicked(ev) {
  // TODO: find out if the user clicked a star's bar
  let clickedTerm = null
  const currTerms = gChart ? gChart.terms : gChartDefulate
  clickedTerm = currTerms.find((term) => {
    return (
      ev.offsetX >= term.x &&
      ev.offsetX <= term.x + gBarWidth &&
      ev.offsetY >= term.y &&
      ev.offsetY <= term.y + term.rate
    )
  })

  if (clickedTerm) {
    const { label, rate } = clickedTerm
    openModal(label, rate, ev.clientX, ev.clientY)
  } else closeModal()
}

function openModal(termName, termRate, x, y) {
  const elModal = document.querySelector('.modal-term')
  const msg = `${termName} is ${termRate}`
  elModal.style.left = `${x}px`
  elModal.style.top = `${y}px`
  elModal.innerText = msg
  elModal.hidden = false
}

function closeModal() {
  const elModal = document.querySelector('.modal-term')
  elModal.hidden = true
}

function onClearCanvas() {
  clearCanvas()
}

function onChartValueSelect(val) {
  console.log(val)
  setChartValueSelect(val)
}

function onPreview(ev) {
  console.log('ev:', ev)
  ev.preventDefault()
  const elTitle = document.querySelector('#title')
  const terms = []
  const countCol = gChartSelected.col
  for (let i = 0; i < countCol; i++) {
    const elName = document.querySelector(
      `.term.term${i + 1} #nameTerm${i + 1}`
    ).value
    const elRate = document.querySelector(
      `.term.term${i + 1}  #rateTerm${i + 1}`
    ).value
    const elColor = document.querySelector(
      `.term.term${i + 1} #colorTerm${i + 1}`
    ).value

    console.log(elColor, elName, elRate)
    terms.push({ label: elName, rate: elRate, color: elColor })
  }
  console.log('terms:', terms)

  setBuildeChart(elTitle, terms)
  renderCanvas()
}

//render
function renderCanvas() {
  clearCanvas()
  console.log('gChart.terms:', gChart.terms)
  drawCharts(gChart.terms)
}

function renderEditor() {
  const countTerm = gChartSelected.col
  let strHTML = ''
  for (let i = 0; i < countTerm; i++) {
    strHTML += `
    <div class="term term${i + 1} border-editor">
        <label for="colorTerm${i + 1}">
        <img class="editor-img" src="style/img/icon/brush.webp"/>
        </label>
        <input type="color" id="colorTerm${i + 1}" hidden />

        <label for="nameTerm${i + 1}"></label>
         <input type="name" id="nameTerm${
           i + 1
         }" placeholder="The name of term..."/>
       
         <label for="rateTerm${i + 1}"></label>
         <input type="number" id="rateTerm${
           i + 1
         }" name="value-term" class="value-term" placeholder="value"/>
       
        <button class="btn-delete" onclick="onRemoveTerm(event,'${
          i + 1
        }')"> X </button>
    </div>
    `
  }
  console.log(' strHTML:', strHTML)
  document.querySelector('form.editor .container-term').innerHTML = strHTML
}

function onDownload() {
  console.log('helllooo')
}

function onRemoveTerm(ev) {
  ev.stopPropagation()
  console.log('helllooo')
}

function onAddTerm(ev) {
  ev.preventDefault()
  console.log('helllooo')
}
