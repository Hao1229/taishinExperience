/* 過場跳轉處理 */
const url = window.location

$('#introduce-link').click(function (e) { 
  e.preventDefault()
  closeDoor('introduce')
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

/* 過場動畫-門 */
function closeDoor (target) {
  $('.right-door').addClass('right-door__active')
  $('.left-door').addClass('left-door__active')

  setTimeout(() => {
    window.location.href = `${url.protocol}//${url.host}/pages/${target}.html`
  }, 2000)
}

function openDoor () {
  $('.right-door').removeClass('right-door__active')
  $('.left-door').removeClass('left-door__active')
}

if (url.pathname.indexOf('introduce') > -1) {
  setTimeout(() => {
    openDoor()
  }, 500)
  setTimeout(() => {
    $('.transition-space').css('display', 'none')
  }, 3000)
}