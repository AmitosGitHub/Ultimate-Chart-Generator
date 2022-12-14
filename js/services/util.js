'use strict'

//---Random Int----without max-
function getRandomInt(min, max) {
  var min = Math.ceil(min)
  var max = Math.floor(max)
  var randNum = Math.floor(Math.random() * (max - min)) + min
  return randNum
}

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function makeId(length = 5) {
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var txt = ''
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}

function flashMsg(element, msg) {
  const elMsg = document.querySelector(`.${element}`)
  elMsg.innerText = msg
  elMsg.classList.add('open')
  setTimeout(() => {
    elMsg.classList.remove('open')
  }, 3000)
}
