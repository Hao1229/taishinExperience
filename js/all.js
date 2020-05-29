/* 過場跳轉處理 */
const url = window.location

$('.index-link').click(function (e) { 
  e.preventDefault()
  $('.transition-space').css('display', 'block')
  setTimeout(() => {
    window.location.href = `${url.protocol}//${url.host}/index.html`
  }, 3000)
})

$('#introduce-link').click(function (e) { 
  e.preventDefault()
  $('.transition-space').css('display', 'block')
  setTimeout(() => {
    window.location.href = `${url.protocol}//${url.host}/pages/introduce.html`
  }, 3000)
})

/* index 大樓燈光換圖 */
setInterval(() => {
  $('.index__history').toggleClass('index__history-img-2');
}, 1000)

/* introduce page 閒置 pop up 處理 */
if (url.pathname.indexOf('introduce') > -1) {
  idleTimer()
}

function idleTimer () {
  let time
  window.onload = resetTimer

  document.onmousemove = resetTimer
  document.onkeypress = resetTimer

  function popupShow () {
    $('#backModal').modal('show')
  }

  function resetTimer () {
    clearTimeout(time)
    time = setTimeout(popupShow, 5000)
  }
}