'use strict'

var gChart
var gChartValueSelect = 'precent'
var gChartDefault = [
  {
    label: 'Shabi',
    rate: 200,
    color: getRandomColor(),
  },
  {
    label: 'Uza',
    rate: 130,
    color: getRandomColor(),
  },
  {
    label: 'Batz',
    rate: 250,
    color: getRandomColor(),
  },
  {
    label: 'Puki',
    rate: 350,
    color: getRandomColor(),
  },
]

function clearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  drawLineCanvas()
}

function setBuildChart(title = 'Title', terms) {
  gChart = {
    title: title,
    style: {
      font: 'Arial',
      fontSize: '45px',
      backgroundColor: 'transparent',
    },
    valueType: 'percent/value',
    terms: JSON.parse(JSON.stringify(terms)),
  }
}

function setChartValueSelect(val) {
  gChartValueSelect = val
}

function getDefulateChart() {
  return gChartDefault
}
function stDeleteTerm(val) {
  const idx = val - 1
  gChart.terms.splice(idx, 1)
  console.log('gChart.terms:', gChart.terms)
}
function setAddTerm() {
  gChart.terms.push({ label: 'label', rate: 10, color: 'red' })
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
function drawLineCanvas(space = 50) {
  for (let i = 0; i < 10; i++) {
    const x = 0
    const y = i * space
    const xEnd = +gElCanvas.width
    const yEnd = i * space
    drawLine(x, y, xEnd, yEnd)
  }
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

function resizeCanvas() {
  var elContainer = document.querySelector('.container-canvas')
  gElCanvas.width = elContainer.offsetWidth - 10
}

function doDownload(elLink) {
  const data = gElCanvas.toDataURL()
  elLink.href = data
}
