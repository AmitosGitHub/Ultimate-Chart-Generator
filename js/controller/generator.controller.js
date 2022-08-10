'use strict'

var gElCanvas
var gCtx
var gBarWidth = 50
var gBarSpace = 20

function drawCharts() {
  gChartDefulate.forEach((term, idx) => {
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
  clickedTerm = gChartDefulate.find((term) => {
    return (
      ev.offsetX >= term.x &&
      ev.offsetX <= term.x + gBarWidth &&
      ev.offsetY >= term.y &&
      ev.offsetY <= term.y + term.rate
    )
  })

  if (clickedTerm) {
    const { name, rate } = clickedTerm
    openModal(name, rate, ev.clientX, ev.clientY)
  } else closeModal()
}

function openModal(termName, termRate, x, y) {
  // TODO: open the modal with the given text in the given coordinates
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
