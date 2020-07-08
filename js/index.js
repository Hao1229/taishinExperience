/* 影片播放 */
const boradVideo = document.querySelector('.index__board__video')
boradVideo.play()

/* 影片 pop up */
const popupVideo = document.getElementById('film-one')
const popupVideoTwo = document.getElementById('film-two')
const popupVideoThree = document.getElementById('film-three')
const popupVideoFour = document.getElementById('film-four')

function videoPopDefault () {
  $('.video-btn-one').addClass('video-btn-one__active')
  $('.video-btn-two').removeClass('video-btn-two__active')
  $('.video-btn-three').removeClass('video-btn-three__active')
  document.querySelector('.index__video-popup__video-title').textContent = videoMainList[0].title
  $('#film-one').css('display', 'block')
  $('#film-two').css('display', 'none')
  $('#film-three').css('display', 'none')
  $('#film-four').css('display', 'none')
  setTimeout(() => {
    popupVideo.load()
    popupVideo.play()
    videoTitleShow()
    $('#video-popup').click(function (e) { 
      e.preventDefault()
      videoTitleShow()
    })
  }, 1000)
}

let hideTimer = null

function titleHideTimer () {
  hideTimer = setTimeout(() => {
    $('.index__video-popup__video-title-section').addClass('index__video-popup__video-title-section__hide')
  }, 3000)
}

function videoTitleShow () {
  clearTimeout(hideTimer)
  $('.index__video-popup__video-title-section').removeClass('index__video-popup__video-title-section__hide')
  titleHideTimer()
}

$('#lifestyle-link').click(function (e) { 
  e.preventDefault()
  clearTimeout(time)
  document.removeEventListener('mousemove', resetTimer)
  document.removeEventListener('keypress', resetTimer)
  $('#video-popup').modal('show')
  videoPopDefault()
})

$('#video-popup').modal({
  backdrop: 'static'
})
$('#video-popup').modal('hide')

$('#video-popup').on('hidden.bs.modal', function (e) {
  $('.index__video-popup__video-list-section').removeClass('index__video-popup__video-list-section__active')
  $('.index__video-popup__video-list-transform').removeClass('index__video-popup__video-list-transform__active')
  $('.index__video-popup__video-list__list__content').removeClass('index__video-popup__video-list__list__content__active')
  $('.index__video-popup__video-list__more-btn').removeClass('index__video-popup__video-list__more-btn__active')
  showList = false
  popupVideo.pause()
  popupVideo.load()
  popupVideoTwo.pause()
  popupVideoTwo.load()
  popupVideoThree.pause()
  popupVideoThree.load()
  popupVideoFour.pause()
  popupVideoFour.load()
  resetTimer()
  document.onmousemove = resetTimer
  document.onkeypress = resetTimer
})

$('.video-btn-one').click(function (e) {
  e.preventDefault()
  const btn = document.querySelector('.video-btn-one')
  document.querySelector('.index__video-popup__video-title').textContent = btn.textContent
  $(this).addClass('video-btn-one__active')
  $('.video-btn-two').removeClass('video-btn-two__active')
  $('.video-btn-three').removeClass('video-btn-three__active')
  $('#film-one').css('display', 'block')
  $('#film-two').css('display', 'none')
  $('#film-three').css('display', 'none')
  $('#film-four').css('display', 'none')
  popupVideoTwo.pause()
  popupVideoTwo.load()
  popupVideoThree.pause()
  popupVideoThree.load()
  popupVideo.load()
  popupVideo.play()
  popupVideoFour.pause()
  popupVideoFour.load()
})

$('.video-btn-two').click(function (e) { 
  e.preventDefault()
  const btn = document.querySelector('.video-btn-two')
  document.querySelector('.index__video-popup__video-title').textContent = btn.textContent
  $(this).addClass('video-btn-two__active')
  $('.video-btn-one').removeClass('video-btn-one__active')
  $('.video-btn-three').removeClass('video-btn-three__active')
  $('#film-one').css('display', 'none')
  $('#film-two').css('display', 'block')
  $('#film-three').css('display', 'none')
  $('#film-four').css('display', 'none')
  popupVideo.pause()
  popupVideo.load()
  popupVideoThree.pause()
  popupVideoThree.load()
  popupVideoTwo.load()
  popupVideoTwo.play()
  popupVideoFour.pause()
  popupVideoFour.load()
})

$('.video-btn-three').click(function (e) { 
  e.preventDefault()
  const btn = document.querySelector('.video-btn-three')
  document.querySelector('.index__video-popup__video-title').textContent = btn.textContent
  $(this).addClass('video-btn-three__active')
  $('.video-btn-two').removeClass('video-btn-two__active')
  $('.video-btn-one').removeClass('video-btn-one__active')
  $('#film-one').css('display', 'none')
  $('#film-two').css('display', 'none')
  $('#film-three').css('display', 'block')
  $('#film-four').css('display', 'none')
  popupVideo.pause()
  popupVideo.load()
  popupVideoTwo.pause()
  popupVideoTwo.load()
  popupVideoThree.load()
  popupVideoThree.play()
  popupVideoFour.pause()
  popupVideoFour.load()
})

/* 影片 list */
let showList = false

function handlePopupList () {
  if (!showList) {
    $('.index__video-popup__video-list-section').addClass('index__video-popup__video-list-section__active')
    setTimeout(() => {
      $('.index__video-popup__video-list-transform').addClass('index__video-popup__video-list-transform__active')
    }, 300)
    $('.index__video-popup__video-list').animate({ scrollTop: 0 }, 0)
    showList = true
  } else {
    $('.index__video-popup__video-list-transform').removeClass('index__video-popup__video-list-transform__active')
    setTimeout(() => {
      $('.index__video-popup__video-list-section').removeClass('index__video-popup__video-list-section__active')
    }, 500)
    showList = false
  }
}

$('.video-btn-list').click(function (e) { 
  e.preventDefault()
  $('.index__video-popup__video-list__list__content').removeClass('index__video-popup__video-list__list__content__active')
  $('.index__video-popup__video-list__more-btn').removeClass('index__video-popup__video-list__more-btn__active')
  handlePopupList()
})

$('.index__video-popup__video-list__collapse').click(function (e) { 
  e.preventDefault()
  handlePopupList()
})

/* 影片總覽影片縮圖點擊換片 */
function changeHotSource (video, title) {
  $('#film-four > source').attr('src', video)
  document.querySelector('.index__video-popup__video-title').textContent = title
  videoTitleShow()
  $('#film-one').css('display', 'none')
  $('#film-two').css('display', 'none')
  $('#film-three').css('display', 'none')
  $('#film-four').css('display', 'block')
  popupVideo.pause()
  popupVideo.load()
  popupVideoTwo.pause()
  popupVideoTwo.load()
  popupVideoThree.pause()
  popupVideoThree.load()
  popupVideoFour.pause()
  popupVideoFour.load()
  popupVideoFour.play()
  handlePopupList()
  $('.video-btn-one').removeClass('video-btn-one__active')
  $('.video-btn-two').removeClass('video-btn-two__active')
  $('.video-btn-three').removeClass('video-btn-three__active')
}

/* 輪播 */
function boardActive () {
  // $('.index__intro').removeClass('index__intro__active')
  $('.index__board').addClass('index__board__active')
  $('.index__board__video').addClass('index__board__video__active')
  $('.index__board__right-light-base').addClass('index__board__right-light-base__active')
  $('.index__board__right-light-head').addClass('index__board__right-light-head__active')
  setTimeout(() => {
    introActive()
  }, 2000)
}

function introActive () {
  $('.index__board').removeClass('index__board__active')
  $('.index__board__video').removeClass('index__board__video__active')
  $('.index__board__right-light-base').removeClass('index__board__right-light-base__active')
  $('.index__board__right-light-head').removeClass('index__board__right-light-head__active')
  // $('.index__intro').addClass('index__intro__active')
  setTimeout(() => {
    boardActive()
  }, 2000)
}

boardActive()