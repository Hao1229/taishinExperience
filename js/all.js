/* 過場跳轉處理 */
const query = window.location.search
const url = window.location

console.log(url)

if (query.indexOf('introduce') > -1) {
  setTimeout(() => {
    window.location.href = `${url.protocol}//${url.host}/pages/introduce.html`
  }, 1500)
}

if (query.indexOf('index') > -1) {
  setTimeout(() => {
    window.location.href = `${url.protocol}//${url.host}/index.html`
  }, 1500)
}

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