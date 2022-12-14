'use strict'

var gElCanvas
var gCtx
var gBarWidth = 50
var gBarSpace = 20
var gStartBar = 20

function canvasClicked(ev) {
  // TODO: find out if the user clicked a star's bar
  let clickedTerm = null
  const currTerms = gChart ? gChart.terms : gChartDefault
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

function onChartValueSelect(ev, val) {
  ev.stopPropagation()
  ev.preventDefault()

  toggleBtnValue(val)
  setChartValueSelect(val)

  //TODO add symboll % innertext input
  if (!gChart) return
  if (val === 'percent') {
    gChart.terms.forEach((term, idx) => {
      const InputTerm = getInput(idx)
      console.log('InputTerm:', InputTerm)
      const elRate = InputTerm.elRate
      console.log('elRate:', elRate)
      // elRate.value = `${elRate.value} $`
    })
  }
}
function toggleBtnValue(val) {
  if (val === 'percent') {
    document
      .querySelector('ul.btn-editor-list button.percent')
      .classList.add('border-value-btn')

    document
      .querySelector('ul.btn-editor-list button.number')
      .classList.remove('border-value-btn')
  } else {
    document
      .querySelector('ul.btn-editor-list button.number')
      .classList.add('border-value-btn')

    document
      .querySelector('ul.btn-editor-list button.percent')
      .classList.remove('border-value-btn')
  }
}
function onPreview(ev) {
  ev.preventDefault()
  const elTitle = document.querySelector('#title').value
  const terms = []
  const countTerm = gChart ? gChart.terms.length : gChartSelected.col
  for (let i = 0; i < countTerm; i++) {
    const dataTerm = getDatafromInput(i + 1)
    terms.push(dataTerm)
  }
  setBuildChart(elTitle, terms)
  renderCanvas()
}

//render
function renderCanvas() {
  clearCanvas()
  drawCharts(gChart.terms)
  drawText(gChart.title, 30, 30)
}

function renderEditor() {
  const strHTMLs = gChart.terms.map(
    (term, idx) =>
      `
        <div class="term term${idx + 1} border-editor">

            <label for="colorTerm${idx + 1}"></label>
            <input type="color" id="colorTerm${idx + 1}"  
            value="${getInputlColor(term)}"/>

            <label for="nameTerm${idx + 1}"></label>
             <input type="name" id="nameTerm${idx + 1}"
              placeholder="The name of term..."
              value="${getInputlName(term)}"/>
           
             <label for="rateTerm${idx + 1}"></label>
             <input type="number" id="rateTerm${idx + 1}"
              name="value-term" class="value-term" placeholder="value"
              value="${getInputlRate(term)}"/>
           
            <button class="btn-update" onclick="onUpdateTerm(event,'${
              idx + 1
            }')">
             Update
             </button>

            <button class="btn-delete" onclick="onRemoveTerm(event,'${
              idx + 1
            }')">
             X
             </button>

        </div>
        `
  )

  document.querySelector('form.editor .container-term').innerHTML =
    strHTMLs.join('')
}

function onDownloadCanvas(elLink) {
  doDownload(elLink)
}

function onRemoveTerm(ev, val) {
  // ev.stopPropagation()
  ev.preventDefault()
  setDeleteTerm(val)
  renderEditor()
  renderCanvas()
}

function onUpdateTerm(ev, idx) {
  ev.preventDefault()
  const dataInput = getDatafromInput(idx)
  setUpdateTerm(idx, dataInput)
  renderEditor()
  renderCanvas()
  flashMsg('modal-flash-msg', 'Update')
}

function onAddTerm(ev) {
  ev.preventDefault()
  setAddTerm()
  renderEditor()
  renderCanvas()
}

function onDrawLabelText(txt) {
  DrawLabelText(txt)
}

function getDatafromInput(idx) {
  const label = document.querySelector(`.term.term${idx} #nameTerm${idx}`).value
  const rate = document.querySelector(`.term.term${idx}  #rateTerm${idx}`).value
  const color = document.querySelector(
    `.term.term${idx} #colorTerm${idx}`
  ).value
  return { label, rate, color }
}
function getInput(idx) {
  const elLabel = document.querySelector(`.term.term${idx} #nameTerm${idx}`)
  const elRate = document.querySelector(`.term.term${idx}  #rateTerm${idx}`)
  const elColor = document.querySelector(`.term.term${idx} #colorTerm${idx}`)
  return { elLabel, elRate, elColor }
}
