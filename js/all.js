/* 過場跳轉處理 */
const url = window.location

$('#introduce-link').click(function (e) { 
  e.preventDefault()
  closeDoor('introduce')
})

$('.introduce__back-btn').click(function (e) { 
  e.preventDefault()
  $('#index').css('display', 'flex')
  $('#introduce').css('display', 'none')
  $('.transition-space').removeClass('transition-space__none')
  $('.transition-space').css('display', 'none')
  /* 讓場館介紹回到 default 狀態 */
  whoActive = 'L-1'
  changeActive()
  changeBoard()
  guideChange()
})

/* introduce page 閒置回首頁處理 */
if (url.pathname.indexOf('introduce') > -1) {
  // idleTimer()
}

function idleTimer () {
  let time
  window.onload = resetTimer

  document.onmousemove = resetTimer
  document.onkeypress = resetTimer

  function backIndex () {
    window.location.href = `${url.protocol}//${url.host}/index.html`
  }

  function resetTimer () {
    console.log('重置')
    clearTimeout(time)
    time = setTimeout(backIndex, 10000)
  }
}

/* 過場動畫 */
function closeDoor (target) {
  $('.right-door').addClass('right-door__active')
  $('.left-door').addClass('left-door__active')
  setTimeout(() => {
    $('#index').css('display', 'none')
    $('#introduce').css('display', 'block')
    openDoor()
  }, 500)
}

function openDoor (target) {
  $('.right-door').removeClass('right-door__active')
  $('.left-door').removeClass('left-door__active')
  $('.transition-space').css('display', 'block')
  setTimeout(() => {
    $('.transition-space').addClass('transition-space__none')
    watchTranslate()
  }, 4000)
}

function watchTranslate () {
  const translate = document.querySelector('.transition-space__none')
  translate.addEventListener('animationend', (() => {
    $('.transition-space__none').css('display', 'none')
  }))
}