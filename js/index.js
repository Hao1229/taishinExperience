/* history 大樓燈光換圖 */
// setInterval(() => {
//   $('.index__history').toggleClass('index__history-img-2');
// }, 1000)

/* arrow path 換圖 */
// setInterval(() => {
//   $('.index__arrow-path').toggleClass('index__arrow-path__active');
// }, 1000)

/* mist 動態 */
// setInterval(() => {
//   $('.index__history__mist').toggleClass('index__history__mist__active');
// }, 1000)

/* 影片播放 */
const boradVideo = document.querySelector('.index__board__video')
// boradVideo.play()

/* 影片 pop up */
const popupVideo = document.querySelector('.index__video-popup__video')

$('#lifestyle-link').click(function (e) { 
  e.preventDefault()
  $('#video-popup').modal('show')
  // setTimeout(() => {
  //   popupVideo.play()
  // }, 1000)
})

$('#video-popup').modal({
  backdrop: 'static'
})
$('#video-popup').modal('hide')

$('#video-popup').on('hidden.bs.modal', function (e) {
  popupVideo.pause()
  popupVideo.load()
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

// boardActive()