'use strict'

var gStartPos

const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

// function onAddTxtLabel() {
//   const elInputTxt = document.querySelector('#inputText')
//   const txt = elInputTxt.value
//   const measureWidthText = gCtx.measureText(txt).width
//   const txtHeight = 60
//   setAddTxtLabel(txt, measureWidthText, txtHeight)
//   elInputTxt.value = ''
// }
// function renderCanvas() {
//   gCtx.fillStyle = 'black'
//   gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
//   renderCircle()
// }

// function renderCircle() {
//   const circle = getCircle()
//   const { pos, color, size } = circle
//   drawArc(pos.x, pos.y, size, color)
// }

function addListeners() {
  addMouseListeners()
  addTouchListeners()
  window.addEventListener('resize', () => {
    resizeCanvas()
    renderCanvas()
  })
}

function addMouseListeners() {
  gElCanvas.addEventListener('mousemove', onMove)
  gElCanvas.addEventListener('mousedown', onDown)
  gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
  gElCanvas.addEventListener('touchmove', onMove)
  gElCanvas.addEventListener('touchstart', onDown)
  gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
  console.log('onDown(ev):', onDown(ev))
  //   // Getting the clicked position
  //   const pos = getEvPos(ev)
  //   // { x: 15, y : 15 }
  //   if (!isCircleClicked(pos)) return
  //   setCircleDrag(true)
  //   gStartPos = pos
  //   document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
  console.log('onMove(ev):', onMove(ev))
  //   const circle = getCircle()
  //   if (!circle.isDrag) return
  //   const pos = getEvPos(ev)
  //   const dx = pos.x - gStartPos.x
  //   const dy = pos.y - gStartPos.y
  //   moveCircle(dx, dy)
  //   gStartPos = pos
  //   renderCanvas()
}

function onUp() {
  console.log('onUp():', onUp())
  //   setCircleDrag(false)
  //   document.body.style.cursor = 'grab'
}

function getEvPos(ev) {
  var pos = {
    x: ev.offsetX,
    y: ev.offsetY,
  }
  // const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
  if (gTouchEvs.includes(ev.type)) {
    ev.preventDefault()
    ev = ev.changedTouches[0]
    pos = {
      x: ev.pageX - ev.target.offsetLeft,
      y: ev.pageY - ev.target.offsetTop,
    }
  }
  return pos
}
