/* 介紹頁與首頁間跳轉處理 */
$('#introduce-link').click(function (e) { 
  e.preventDefault()
  setDefault()
  resetTimer(true)
  closeDoor('introduce')
})

function setDefault () {
  $('#index').css('display', 'flex')
  $('#introduce').css('display', 'none')
  $('.animation-mask').removeClass('animation-mask__show')
  $('.transition-space').css('display', 'none')
  $('.animation-mask-section').css('display', 'none')
  $('.time-part-wrapper').css('display', 'flex')
  $('.digit-wrapper').removeClass('digit-wrapper__active')
  $('.transition-column').removeClass('transition-column__active')
  $('.transition-number').removeClass('transition-number__active')
  $('.tens').removeClass('tens__active')
  $('.ones').removeClass('ones__active')
  $('.introduce__guide-line-mask').removeClass('introduce__guide-line-mask__active')
  isMaskEnd = false
  circleStop()
  /* 讓場館介紹回到 default 狀態 */
  whoActive = 'L-1'
  changeActive()
  changeBoard()
}

$('.introduce__back-btn').click(function (e) { 
  e.preventDefault()
  setDefault()
})

/* 閒置出現螢幕保護程式 */
const protectVideo = document.getElementById('protect-video')

let time

document.addEventListener('mousemove', resetTimer)
document.addEventListener('keypress', resetTimer)

function showProtect () {
  $('#index').css('display', 'none')
  $('#introduce').css('display', 'none')
  $('.animation-mask').removeClass('animation-mask__show')
  $('.transition-space').css('display', 'none')
  $('.animation-mask-section').css('display', 'none')
  $('.screen-protect').css('display', 'block')
  $('.screen-protect__video').css('display', 'block')
  protectVideo.play()
  document.removeEventListener('mousemove', resetTimer)
  document.removeEventListener('keypress', resetTimer)
  protectVideo.addEventListener('ended', removeProtect)
}

function resetTimer (clear) {
  clearTimeout(time)
  if (typeof(clear) === 'object') {
    clear = false
  }
  if (!clear) {
    time = setTimeout(showProtect, 10000)
  }
}

resetTimer()

function removeProtect () {
  $('#index').css('display', 'flex')
  $('#introduce').css('display', 'none')
  $('.screen-protect').css('display', 'none')
  $('.screen-protect__video').css('display', 'none')
  protectVideo.pause()
  protectVideo.load()
  document.addEventListener('mousemove', resetTimer)
  document.addEventListener('keypress', resetTimer)
  resetTimer()
}

$('.screen-protect').click(function (e) { 
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
  }, 1000)
}

function openDoor (target) {
  // const video = document.querySelector('.transition-video')
  // video.load()
  $('.right-door').removeClass('right-door__active')
  $('.left-door').removeClass('left-door__active')
  $('.transition-space').css('display', 'block')
  $('.animation-mask-section').css('display', 'flex')
  // video.play()
  setTimeout(() => {
    $('.transition-circle-1').addClass('transition-circle-1__active')
    $('.time-part-wrapper').addClass('time-part-wrapper__active')
    setTimeout(() => {
      $('.transition-circle-2').addClass('transition-circle-2__active')
      $('.transition-circle-3').addClass('transition-circle-3__active')
      $('.transition-circle-4').addClass('transition-circle-4__active')
      $('.transition-circle-5').addClass('transition-circle-5__active')
      setTimeout(() => {
        timerRun()
        $('.transition-column').addClass('transition-column__active')
        $('.transition-number').addClass('transition-number__active')
      }, 2000)
    }, 2000)
  }, 2000)
}

let isMaskEnd = false

function watchTranslate () {
  const translate = document.querySelector('.animation-mask__show')
  translate.addEventListener('animationend', (() => {
    if (!isMaskEnd) {
      circleRotate()
      resetTimer()
      guideChange()
      isMaskEnd = true
    }
  }))
}

function timerRun () {
  $('.digit-wrapper').addClass('digit-wrapper__active')
  $('.tens').addClass('tens__active')
  $('.ones').addClass('ones__active')
  watchTimerEnd()
}

function watchTimerEnd () {
  const timer = document.querySelector('.tens')
  timer.addEventListener('animationend', (() => {
    setTimeout(() => {
      $('.time-part-wrapper').css('display', 'none')
      $('.time-part-wrapper').removeClass('time-part-wrapper__active')
      $('.transition-circle-1').removeClass('transition-circle-1__active')
      $('.transition-circle-2').removeClass('transition-circle-2__active')
      $('.transition-circle-3').removeClass('transition-circle-3__active')
      $('.transition-circle-4').removeClass('transition-circle-4__active')
      $('.transition-circle-5').removeClass('transition-circle-5__active')
      setTimeout(() => {
        $('#introduce').css('display', 'block')
        $('.animation-mask').addClass('animation-mask__show')
        watchTranslate()
      }, 1000)
    }, 1000)
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