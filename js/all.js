/* 過場跳轉處理 */
const url = window.location

$('#introduce-link').click(function (e) { 
  e.preventDefault()
  $('#index').css('display', 'none')
  setTimeout(() => {
    window.location.href = `${url.protocol}//${url.host}/pages/introduce.html`
  }, 1500)
})

$('.index-link').click(function (e) { 
  e.preventDefault()
  $('#introduce').css('display', 'none')
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