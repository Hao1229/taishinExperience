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
    $('.transition-space').css('display', 'block')
    openDoor(target)
  }, 500)
}

function openDoor (target) {
  $('.right-door').removeClass('right-door__active')
  $('.left-door').removeClass('left-door__active')
  setTimeout(() => {
    window.location.href = `${url.protocol}//${url.host}/pages/${target}.html`
  }, 500)
}

if (url.pathname.indexOf('introduce') > -1) {
  setTimeout(() => {
    $('.transition-space').addClass('transition-space__none')
    watchTranslate()
  }, 3000)
}

// if (url.pathname.indexOf('index') > -1) { // 避免跳轉回首頁會出現門
//   $('.right-door').css('opacity', '0')
//   $('.left-door').css('opacity', '0')
//   setTimeout(() => {
//     $('.right-door').css('opacity', '1')
//     $('.left-door').css('opacity', '1')
//   }, 2000)
// }

function watchTranslate () {
  const translate = document.querySelector('.transition-space__none')
  translate.addEventListener('animationend', (() => {
    $('.transition-space__none').css('display', 'none')
  }))
}