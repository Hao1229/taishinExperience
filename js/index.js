/* history 大樓燈光換圖 */
setInterval(() => {
  $('.index__history').toggleClass('index__history-img-2');
}, 1000)

/* arrow path 換圖 */
setInterval(() => {
  $('.index__arrow-path').toggleClass('index__arrow-path__active');
}, 1000)

/* mist 動態 */
setInterval(() => {
  $('.index__history__mist').toggleClass('index__history__mist__active');
}, 1000)

/* 影片播放 */
const boradVideo = document.querySelector('.index__board__video')
boradVideo.play()

/* 影片 pop up */
const popupVideo = document.getElementById('film-one')
const popupVideoTwo = document.getElementById('film-two')
const popupVideoThree = document.getElementById('film-three')

$('#lifestyle-link').click(function (e) { 
  e.preventDefault()
  $('#video-popup').modal('show')
  $('.video-btn-one').addClass('video-btn-one__active')
  $('.video-btn-two').removeClass('video-btn-two__active')
  $('.video-btn-three').removeClass('video-btn-three__active')
  $('#film-one').css('display', 'block')
  $('#film-two').css('display', 'none')
  $('#film-three').css('display', 'none')
  setTimeout(() => {
    popupVideo.play()
  }, 1000)
})

$('#video-popup').modal({
  backdrop: 'static'
})
$('#video-popup').modal('hide')

$('#video-popup').on('hidden.bs.modal', function (e) {
  popupVideo.pause()
  popupVideo.load()
  popupVideoTwo.pause()
  popupVideoTwo.load()
  popupVideoThree.pause()
  popupVideoThree.load()
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

/* 輪播 */
function boardActive () {
  $('.index__intro').removeClass('index__intro__active');
  $('.index__board').addClass('index__board__active');
  $('.index__board__video').addClass('index__board__video__active');
  $('.index__board__light').addClass('index__board__light__active');
  setTimeout(() => {
    introActive()
  }, 2000)
}

function introActive () {
  $('.index__board').removeClass('index__board__active');
  $('.index__board__video').removeClass('index__board__video__active');
  $('.index__board__light').removeClass('index__board__light__active');
  $('.index__intro').addClass('index__intro__active');
  setTimeout(() => {
    boardActive()
  }, 2000)
}

boardActive()