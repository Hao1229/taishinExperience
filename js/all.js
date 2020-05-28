/* 過場跳轉處理 */
const url = window.location
const doodle = document.querySelector('css-doodle')

if (url.pathname.indexOf('pages') > -1) {
  doodle.use = 'var(--rule)'
  setTimeout(() => {
    $('.transition-animate').css('z-index', '-1')
  }, 1500)
}

$('.index-link').click(function (e) { 
  e.preventDefault()
  doodle.use = 'var(--rule)'
  $('.transition-animate').css('z-index', '99999')
  setTimeout(() => {
    window.location.href = `${url.protocol}//${url.host}/index.html`
  }, 1500)
})

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