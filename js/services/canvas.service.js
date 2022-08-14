'use strict'

// ********CANVAS**************

function drawCharts(charts = getDefaultChart()) {
  clearCanvas()
  gBarWidth = 50
  gBarSpace = 20
  gStartBar = 20
  charts.forEach((term, idx) => {
    const { color, rate } = term
    const convertRate =
      gChartValueSelect === 'percent'
        ? (gElCanvas.width * rate) / 100
        : gElCanvas.height * getConvertRateNum(rate)

    switchGraph(term, color, convertRate, idx)
  })
}

function switchGraph(term, color, convertRate, idx) {
  const type = gChartSelected.name
  console.log('gChartSelected.name:', gChartSelected.name)
  switch (type) {
    case 'bar':
      drawGraphBar(term, color, convertRate, idx)
      break
    case 'full-screen':
      drawGraphFullScreen(term, color, convertRate, idx)
      break
    case 'scatter':
      drawGraphScatter(term, color, convertRate, idx)
      break
    case 'bubble':
      drawGraphBubble(term, color, convertRate, idx)
      break
    case 'bar-Line':
      drawGraphBarLine(term, color, convertRate, idx)
      break
    default:
      drawGraphBar(term, color, convertRate, idx)
  }
}

//***function draw graph on canvas */
function drawGraphBar(term, color, convertRate, idx) {
  term.y = gElCanvas.height - convertRate
  term.x = idx * (gBarSpace + gBarWidth)
  gCtx.fillStyle = color
  gCtx.fillRect(term.x, term.y, gBarWidth, convertRate)
}

function drawGraphFullScreen(term, color, convertRate, idx) {
  console.log('convertRate:', convertRate)
  gBarSpace = 0
  term.y = 0
  term.x = gStartBar === 20 ? 0 : gStartBar
  gCtx.fillStyle = color
  gCtx.fillRect(term.x, term.y, convertRate, gElCanvas.height)
  gStartBar += convertRate
}

function drawGraphScatter(term, color, convertRate, idx) {
  gBarWidth = 10
  gBarSpace = 50
  term.y = gElCanvas.height - convertRate
  term.x = idx * (gBarSpace + gBarWidth)
  term.x = term.x === 0 ? 10 : term.x
  gCtx.fillStyle = color
  drawArc(term.x, term.y)
}

function drawGraphBubble(term, color, convertRate, idx) {
  gBarWidth = convertRate / 2
  gStartBar += gBarWidth
  gCtx.fillStyle = color
  drawArc(gStartBar, gElCanvas.height / 2)
  gStartBar = gStartBar + gBarWidth
}

function drawGraphBarLine(term, color, convertRate, idx) {
  drawGraphBar(term, color, convertRate, idx)
  drawGraphScatter(term, color, convertRate, idx)
}

function getConvertRateNum(rate) {
  let sumRateTerm = 0
  const countTerm = gChart ? gChart.terms.length : gChartSelected.col
  //TODO reduce()
  for (let i = 0; i < countTerm; i++) {
    gChart.terms[i].rate
    console.log('gChart.terms[i].rate:', gChart.terms[i].rate)
    sumRateTerm += +gChart.terms[i].rate
  }
  console.log('sumRateTerm:', sumRateTerm)
  console.log('rate / sumRateTerm:', rate / sumRateTerm)
  return rate / sumRateTerm
}

function clearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  drawBoardCanvas()
}
// ***build line canvas**
function drawLine(x, y, xEnd = 250, yEnd = 250) {
  gCtx.beginPath()
  gCtx.lineWidth = 1
  gCtx.moveTo(x, y)
  gCtx.lineTo(xEnd, yEnd)
  gCtx.strokeStyle = 'gray'
  gCtx.stroke()
  gCtx.closePath()
}
function drawBoardCanvas(space = 50) {
  for (let i = 0; i < 10; i++) {
    const x = 0
    const y = i * space
    const xEnd = +gElCanvas.width
    const yEnd = i * space
    drawLine(x, y, xEnd, yEnd)
    drawLine(y, x, yEnd, gElCanvas.height)
  }
}
function drawRect(x, y) {
  gCtx.beginPath()
  gCtx.rect(x, y, 200, 60)
  // gCtx.fillStyle = 'green';
  // gCtx.fillRect(x, y, 200, 200);
  gCtx.strokeStyle = 'black'
  gCtx.stroke()
  gCtx.closePath()
}

function drawArc(x, y) {
  gCtx.beginPath()
  gCtx.lineWidth = 1
  gCtx.arc(x, y, gBarWidth, 0, 2 * Math.PI)

  gCtx.fill()
  gCtx.strokeStyle = 'black'
  gCtx.stroke()
  gCtx.closePath()
}
function drawText(txt, x, y) {
  gCtx.beginPath()
  gCtx.textBaseline = 'middle'
  gCtx.textAlign = 'center'
  gCtx.lineWidth = 1
  gCtx.font = '40px david'
  // gCtx.fontSize = '50px'
  gCtx.fillStyle = 'black'
  gCtx.fillText(txt, x, y)
  gCtx.strokeStyle = 'black'
  gCtx.strokeText(txt, x, y)
  gCtx.closePath()
}
function DrawLabelText(txt) {
  const measureWidthText = gCtx.measureText(txt).width

  if (measureWidthText >= 200) {
    alert('too long!!!')
    return
  }
  renderCanvas()
  const heightText = 60
  drawRect(70, 30)
  drawText(txt, 170, heightText)
}

function resizeCanvas() {
  var elContainer = document.querySelector('.container-canvas')
  gElCanvas.width = elContainer.offsetWidth - 10
}

function doDownload(elLink) {
  const data = gElCanvas.toDataURL()
  elLink.href = data
}
// The next 2 functions handle IMAGE UPLOADING to img tag from file system:
function onImgInput(ev) {
  loadImageFromInput(ev, renderImg)
}

function loadImageFromInput(ev, onImageReady) {
  document.querySelector('.share-container').innerHTML = ''

  var reader = new FileReader()

  reader.onload = (event) => {
    var img = new Image()
    img.src = event.target.result
    img.onload = onImageReady.bind(null, img)
  }
  reader.readAsDataURL(ev.target.files[0])
}

function renderImg(img) {
  gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}
// *** Upload a picture to the canvas. ***
function uploadImg() {
  const imgDataUrl = gElCanvas.toDataURL('image/jpeg')

  // A function to be called if request succeeds
  function onSuccess(uploadedImgUrl) {
    const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
    document.querySelector(
      '.user-msg'
    ).innerText = `Your photo is available here: ${uploadedImgUrl}`

    document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
  }
  doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
  const formData = new FormData()
  formData.append('img', imgDataUrl)

  fetch('//ca-upload.com/here/upload.php', {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.text())
    .then((url) => {
      console.log('Got back live url:', url)
      onSuccess(url)
    })
    .catch((err) => {
      console.error(err)
    })
}
