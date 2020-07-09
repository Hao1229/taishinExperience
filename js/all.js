/* 介紹頁與首頁間跳轉處理 */
$('#introduce-link').click(function (e) { 
  e.preventDefault()
  setDefault()
  clearTimeout(time)
  closeDoor('introduce')
})

function setDefault () {
  $('#index').css('display', 'flex')
  $('#introduce').css('display', 'none')
  $('.animation-mask').removeClass('animation-mask__show')
  $('.transition-space').css('display', 'none')
  $('.animation-mask-section').css('display', 'none')
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
let carouselCount = 0
let carouselOrder = 2

function protectCarousel () {
  switch (carouselCount) {
    case 0:
      $('#protect-video > source').attr('src', protectList[0].video)
      break
    case 1:
      $('#protect-video > source').attr('src', protectList[1].video)
      break
    case 2:
      $('#protect-video > source').attr('src', protectList[2].video)
      break
  }
}

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
  switch (carouselCount) {
    case 0:
      carouselOrder = 2
      break
    case 1:
      carouselOrder = 0
      break
    case 2:
      carouselOrder = 1
      break
  }
  protectCarousel()
  protectVideo.load()
  protectVideo.play()
  document.removeEventListener('mousemove', resetTimer)
  document.removeEventListener('keypress', resetTimer)
  protectVideo.addEventListener('ended', carouselChange)
}

function carouselChange () {
  if (carouselCount === carouselOrder) {
    carouselCount = 0
    carouselOrder = 2
    removeProtect()
  } else {
    carouselCount !== 2 ? carouselCount += 1 : carouselCount = 0
    protectCarousel()
    protectVideo.load()
    protectVideo.play()
    protectVideo.addEventListener('ended', carouselChange)
  }
}

function resetTimer () {
  clearTimeout(time)
  time = setTimeout(showProtect, 60000)
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
  // $('.transition-space').css('display', 'block')
  // video.play()
  watchTranslate()
  // setTimeout(() => {
  //   watchTranslate()
  // }, 10500)
}

function watchTranslate () {
  $('#introduce').css('display', 'block')
  circleRotate()
  resetTimer()
  guideChange()
  // $('.transition-space').css('display', 'none')
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

/* 鎖住右鍵 */
document.addEventListener('contextmenu', event => event.preventDefault())