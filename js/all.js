/* 介紹頁與首頁間跳轉處理 */
const url = window.location

$('#introduce-link').click(function (e) { 
  e.preventDefault()
  closeDoor('introduce')
})

$('.introduce__back-btn').click(function (e) { 
  e.preventDefault()
  $('#index').css('display', 'flex')
  $('#introduce').css('display', 'none')
  $('.animation-mask').removeClass('animation-mask__show')
  $('.transition-space').css('display', 'none')
  $('.animation-mask-section').css('display', 'none')
  circleStop()
  /* 讓場館介紹回到 default 狀態 */
  whoActive = 'L-1'
  changeActive()
  changeBoard()
  guideChange()
})

/* 閒置出現螢幕保護程式 */
const protectVideo = document.getElementById('protect-video')

function idleTimer () {
  let time

  document.onmousemove = resetTimer
  document.onkeypress = resetTimer

  function showProtect () {
    $('#index').css('display', 'none')
    $('#introduce').css('display', 'none')
    $('.animation-mask').removeClass('animation-mask__show')
    $('.transition-space').css('display', 'none')
    $('.animation-mask-section').css('display', 'none')
    $('.screen-protect').css('display', 'block')
    $('.screen-protect__video').css('display', 'block')
    protectVideo.play()
    protectVideo.addEventListener('ended', removeProtect)
  }

  function resetTimer () {
    clearTimeout(time)
    time = setTimeout(showProtect, 10000)
  }

  resetTimer()
}

idleTimer()

function removeProtect () {
  $('#index').css('display', 'flex')
  $('#introduce').css('display', 'none')
  $('.screen-protect').css('display', 'none')
  $('.screen-protect__video').css('display', 'none')
  protectVideo.pause()
  protectVideo.load()
  idleTimer()
}

$('.screen-protect__back-btn').click(function (e) { 
  e.preventDefault()
  removeProtect()
})

/* 過場動畫 */
function closeDoor (target) {
  $('.right-door').addClass('right-door__active')
  $('.left-door').addClass('left-door__active')
  setTimeout(() => {
    $('#index').css('display', 'none')
    openDoor()
  }, 500)
}

function openDoor (target) {
  $('.right-door').removeClass('right-door__active')
  $('.left-door').removeClass('left-door__active')
  $('.transition-space').css('display', 'block')
  $('.animation-mask-section').css('display', 'flex')
  setTimeout(() => {
    $('#introduce').css('display', 'block')
    $('.animation-mask').addClass('animation-mask__show')
    watchTranslate()
  }, 4000)
}

function watchTranslate () {
  const translate = document.querySelector('.animation-mask__show')
  translate.addEventListener('animationend', (() => {
    circleRotate()
  }))
}

/* 介紹頁右上角圓圈旋轉會遇到奇怪錯誤，第二次進入頁面，圖片會變模糊，因此改用動態加入動畫的方式讓其旋轉 */
function circleRotate () {
  $('.introduce__frame__circle-group__circle').addClass('introduce__frame__circle-group__circle__rotate')
  $('.introduce__frame__circle-group__circle2').addClass('introduce__frame__circle-group__circle__rotate')
  $('.introduce__frame__circle-group__circle3').addClass('introduce__frame__circle-group__circle__rotate')
}

function circleStop () {
  $('.introduce__frame__circle-group__circle').removeClass('introduce__frame__circle-group__circle__rotate')
  $('.introduce__frame__circle-group__circle2').removeClass('introduce__frame__circle-group__circle__rotate')
  $('.introduce__frame__circle-group__circle3').removeClass('introduce__frame__circle-group__circle__rotate')
}