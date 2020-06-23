/* 影片播放 */
const boradVideo = document.querySelector('.index__board__video')
boradVideo.play()

/* 影片 pop up */
const popupVideo = document.getElementById('film-one')
const popupVideoTwo = document.getElementById('film-two')
const popupVideoThree = document.getElementById('film-three')

function videoPopDefault () {
  $('.video-btn-one').addClass('video-btn-one__active')
  $('.video-btn-two').removeClass('video-btn-two__active')
  $('.video-btn-three').removeClass('video-btn-three__active')
  $('#film-one').css('display', 'block')
  $('#film-two').css('display', 'none')
  $('#film-three').css('display', 'none')
  setTimeout(() => {
    popupVideo.play()
  }, 1000)
}

$('#lifestyle-link').click(function (e) { 
  e.preventDefault()
  resetTimer(true)
  document.removeEventListener('mousemove', resetTimer)
  document.removeEventListener('keypress', resetTimer)
  $('#video-popup').modal('show')
  changeHotSource(1, 'default')
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
  resetTimer()
  document.onmousemove = resetTimer
  document.onkeypress = resetTimer
})

$('#video-popup').click(function (e) { 
  e.preventDefault()
  resetTimer(true)
})

$('.video-btn-one').click(function (e) { 
  e.preventDefault()
  $(this).addClass('video-btn-one__active')
  $('.video-btn-two').removeClass('video-btn-two__active')
  $('.video-btn-three').removeClass('video-btn-three__active')
  $('#film-one').css('display', 'block')
  $('#film-two').css('display', 'none')
  $('#film-three').css('display', 'none')
  popupVideoTwo.pause()
  popupVideoTwo.load()
  popupVideoThree.pause()
  popupVideoThree.load()
  popupVideo.load()
  popupVideo.play()
})

$('.video-btn-two').click(function (e) { 
  e.preventDefault()
  $(this).addClass('video-btn-two__active')
  $('.video-btn-one').removeClass('video-btn-one__active')
  $('.video-btn-three').removeClass('video-btn-three__active')
  $('#film-one').css('display', 'none')
  $('#film-two').css('display', 'block')
  $('#film-three').css('display', 'none')
  popupVideo.pause()
  popupVideo.load()
  popupVideoThree.pause()
  popupVideoThree.load()
  popupVideoTwo.load()
  popupVideoTwo.play()
})

$('.video-btn-three').click(function (e) { 
  e.preventDefault()
  $(this).addClass('video-btn-three__active')
  $('.video-btn-two').removeClass('video-btn-two__active')
  $('.video-btn-one').removeClass('video-btn-one__active')
  $('#film-one').css('display', 'none')
  $('#film-two').css('display', 'none')
  $('#film-three').css('display', 'block')
  popupVideo.pause()
  popupVideo.load()
  popupVideoTwo.pause()
  popupVideoTwo.load()
  popupVideoThree.load()
  popupVideoThree.play()
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

$('#hot-video .index__video-popup__video-list__more-btn').click(function (e) { 
  e.preventDefault()
  $('#hot-video .index__video-popup__video-list__list__content').toggleClass('index__video-popup__video-list__list__content__active')
  $('#hot-video .index__video-popup__video-list__more-btn').toggleClass('index__video-popup__video-list__more-btn__active')
})

$('#activity-video .index__video-popup__video-list__more-btn').click(function (e) { 
  e.preventDefault()
  $('#activity-video .index__video-popup__video-list__list__content').toggleClass('index__video-popup__video-list__list__content__active')
  $('#activity-video .index__video-popup__video-list__more-btn').toggleClass('index__video-popup__video-list__more-btn__active')
})

/* 影片總覽影片縮圖點擊換片 */
const hotFilmList = [
  'mov_bbb.mp4',
  'trailer.mp4',
  'View_From_A_Blue_Moon_Trailer-576p.mp4'
]

function changeHotSource (num, param) {
  $('#film-one > source').attr('src', `./video/${hotFilmList[num - 1]}`)

  if (num === hotFilmList.length) {
    $('#film-two > source').attr('src', `./video/${hotFilmList[0]}`)
    $('#film-three > source').attr('src', `./video/${hotFilmList[1]}`)
  } else if (num === hotFilmList.length - 1) {
    $('#film-two > source').attr('src', `./video/${hotFilmList[num]}`)
    $('#film-three > source').attr('src', `./video/${hotFilmList[0]}`)
  } else {
    $('#film-two > source').attr('src', `./video/${hotFilmList[num]}`)
    $('#film-three > source').attr('src', `./video/${hotFilmList[num + 1]}`)
  }
  popupVideo.pause()
  popupVideo.load()
  popupVideoTwo.pause()
  popupVideoTwo.load()
  popupVideoThree.pause()
  popupVideoThree.load()
  if (!param) {
    handlePopupList()
  }
  videoPopDefault()
}

$('#hot-video-1').click(function (e) {
  e.preventDefault()
  changeHotSource(1)
})

$('#hot-video-2').click(function (e) {
  e.preventDefault()
  changeHotSource(2)
})

$('#hot-video-3').click(function (e) {
  e.preventDefault()
  changeHotSource(3)
})




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