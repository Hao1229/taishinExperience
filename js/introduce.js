/* 導覽地圖 active default 切換 */

let whoActive = 'L-1'

// 左 3
$('.introduce__map-land__left-section__three').click(function (e) {
  e.preventDefault()
  whoActive = 'L-3'
  changeActive()
})

$('.introduce__map-land__left-section__three').hover(function () {
    $('.introduce__map-land__left-section__three').css('z-index', '100')
  }, function () {
    $('.introduce__map-land__left-section__three').css('z-index', 'initial')
  }
)

// 左 2
$('.introduce__map-land__left-section__two').click(function (e) { 
  e.preventDefault()
  whoActive = 'L-2'
  changeActive()
})

$('.introduce__map-land__left-section__two').hover(function () {
    $('.introduce__map-land__left-section__two').css('z-index', '100')
  }, function () {
    $('.introduce__map-land__left-section__two').css('z-index', 'initial')
  }
)

// 左 1
$('.introduce__map-land__left-section__one').click(function (e) { 
  e.preventDefault()
  whoActive = 'L-1'
  changeActive()
})

$('.introduce__map-land__left-section__one').hover(function () {
    $('.introduce__map-land__left-section__one').css('z-index', '100')
  }, function () {
    $('.introduce__map-land__left-section__one').css('z-index', 'initial')
  }
)

// 左 4
$('.introduce__map-land__left-section__four').click(function (e) { 
  e.preventDefault()
  whoActive = 'L-4'
  changeActive()
})

$('.introduce__map-land__left-section__four').hover(function () {
    $('.introduce__map-land__left-section__four').css('z-index', '100')
  }, function () {
    $('.introduce__map-land__left-section__four').css('z-index', 'initial')
  }
)

// 左 5
$('.introduce__map-land__left-section__five').click(function (e) { 
  e.preventDefault()
  whoActive = 'L-5'
  changeActive()
})

$('.introduce__map-land__left-section__five').hover(function () {
    $('.introduce__map-land__left-section__five').css('z-index', '100')
  }, function () {
    $('.introduce__map-land__left-section__five').css('z-index', 'initial')
  }
)

// 右 4
$('.introduce__map-land__right-section__four').click(function (e) { 
  e.preventDefault()
  whoActive = 'R-4'
  changeActive()
})

// 右 3
$('.introduce__map-land__right-section__three').click(function (e) { 
  e.preventDefault()
  whoActive = 'R-3'
  changeActive()
})

// 右 2
$('.introduce__map-land__right-section__two').click(function (e) { 
  e.preventDefault()
  whoActive = 'R-2'
  changeActive()
})

// 右 1
$('.introduce__map-land__right-section__one').click(function (e) { 
  e.preventDefault()
  whoActive = 'R-1'
  changeActive()
})

// 右 5
$('.introduce__map-land__right-section__five').click(function (e) { 
  e.preventDefault()
  whoActive = 'R-5'
  changeActive()
})

/* 判斷 active 區塊 */
function changeActive () {
  if (whoActive === 'L-3') {
    $('.introduce__map-land__left-section__three').addClass('introduce__map-land__left-section__three__active')
    $('.introduce__map-land__left-section__three__title').addClass('introduce__map-land__left-section__three__title__active')
  } else {
    $('.introduce__map-land__left-section__three').removeClass('introduce__map-land__left-section__three__active')
    $('.introduce__map-land__left-section__three__title').removeClass('introduce__map-land__left-section__three__title__active')
  }

  if (whoActive === 'L-2') {
    $('.introduce__map-land__left-section__two').addClass('introduce__map-land__left-section__two__active')
    $('.introduce__map-land__left-section__two__title').addClass('introduce__map-land__left-section__two__title__active')
  } else {
    $('.introduce__map-land__left-section__two').removeClass('introduce__map-land__left-section__two__active')
    $('.introduce__map-land__left-section__two__title').removeClass('introduce__map-land__left-section__two__title__active')
  }

  if (whoActive === 'L-1') {
    $('.introduce__map-land__left-section__one').addClass('introduce__map-land__left-section__one__active')
    $('.introduce__map-land__left-section__one__title').addClass('introduce__map-land__left-section__one__title__active')
  } else {
    $('.introduce__map-land__left-section__one').removeClass('introduce__map-land__left-section__one__active')
    $('.introduce__map-land__left-section__one__title').removeClass('introduce__map-land__left-section__one__title__active')
  }

  if (whoActive === 'L-4') {
    $('.introduce__map-land__left-section__four').addClass('introduce__map-land__left-section__four__active')
    $('.introduce__map-land__left-section__four__title').addClass('introduce__map-land__left-section__four__title__active')
  } else {
    $('.introduce__map-land__left-section__four').removeClass('introduce__map-land__left-section__four__active')
    $('.introduce__map-land__left-section__four__title').removeClass('introduce__map-land__left-section__four__title__active')
  }

  if (whoActive === 'L-5') {
    $('.introduce__map-land__left-section__five').addClass('introduce__map-land__left-section__five__active')
    $('.introduce__map-land__left-section__five__title').addClass('introduce__map-land__left-section__five__title__active')
  } else {
    $('.introduce__map-land__left-section__five').removeClass('introduce__map-land__left-section__five__active')
    $('.introduce__map-land__left-section__five__title').removeClass('introduce__map-land__left-section__five__title__active')
  }

  if (whoActive === 'R-4') {
    $('.introduce__map-land__right-section__four').addClass('introduce__map-land__right-section__four__active')
    $('.introduce__map-land__right-section__four__title').addClass('introduce__map-land__right-section__four__title__active')
  } else {
    $('.introduce__map-land__right-section__four').removeClass('introduce__map-land__right-section__four__active')
    $('.introduce__map-land__right-section__four__title').removeClass('introduce__map-land__right-section__four__title__active')
  }

  if (whoActive === 'R-3') {
    $('.introduce__map-land__right-section__three').addClass('introduce__map-land__right-section__three__active')
    $('.introduce__map-land__right-section__three__title').addClass('introduce__map-land__right-section__three__title__active')
  } else {
    $('.introduce__map-land__right-section__three').removeClass('introduce__map-land__right-section__three__active')
    $('.introduce__map-land__right-section__three__title').removeClass('introduce__map-land__right-section__three__title__active')
  }

  if (whoActive === 'R-2') {
    $('.introduce__map-land__right-section__two').addClass('introduce__map-land__right-section__two__active')
    $('.introduce__map-land__right-section__two__title').addClass('introduce__map-land__right-section__two__title__active')
  } else {
    $('.introduce__map-land__right-section__two').removeClass('introduce__map-land__right-section__two__active')
    $('.introduce__map-land__right-section__two__title').removeClass('introduce__map-land__right-section__two__title__active')
  }

  if (whoActive === 'R-1') {
    $('.introduce__map-land__right-section__one').addClass('introduce__map-land__right-section__one__active')
    $('.introduce__map-land__right-section__one__title').addClass('introduce__map-land__right-section__one__title__active')
  } else {
    $('.introduce__map-land__right-section__one').removeClass('introduce__map-land__right-section__one__active')
    $('.introduce__map-land__right-section__one__title').removeClass('introduce__map-land__right-section__one__title__active')
  }

  if (whoActive === 'R-5') {
    $('.introduce__map-land__right-section__five').addClass('introduce__map-land__right-section__five__active')
    $('.introduce__map-land__right-section__five__title').addClass('introduce__map-land__right-section__five__title__active')
  } else {
    $('.introduce__map-land__right-section__five').removeClass('introduce__map-land__right-section__five__active')
    $('.introduce__map-land__right-section__five__title').removeClass('introduce__map-land__right-section__five__title__active')
  }
}

changeActive()