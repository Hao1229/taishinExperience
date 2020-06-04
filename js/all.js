/* 過場跳轉處理 */
const url = window.location

// $('.index-link').click(function (e) { 
//   e.preventDefault()
//   $('.transition-space').css('display', 'block')
//   setTimeout(() => {
//     window.location.href = `${url.protocol}//${url.host}/index.html`
//   }, 3000)
// })

$('#introduce-link').click(function (e) { 
  e.preventDefault()
  $('.transition-space').css('display', 'block')
  setTimeout(() => {
    window.location.href = `${url.protocol}//${url.host}/pages/introduce.html`
  }, 3000)
})

/* introduce page 閒置回首頁處理 */
if (url.pathname.indexOf('introduce') > -1) {
  // idleTimer()
}

function idleTimer () {
  let time
  window.onload = resetTimer

  document.onmousemove = resetTimer
  document.onkeypress = resetTimer

  function backIndex () {
    window.location.href = `${url.protocol}//${url.host}/index.html`
  }

  function resetTimer () {
    console.log('重置')
    clearTimeout(time)
    time = setTimeout(backIndex, 10000)
  }
}