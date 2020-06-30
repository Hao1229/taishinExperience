/* 導覽地圖 active default 切換 */

let whoActive = 'R-1'

// 左 3
$('.introduce__map-land__left-section__three').click(function (e) {
  e.preventDefault()
  whoActive = 'L-3'
  changeActive()
  changeBoard()
  guideChange()
})

$('#left-link-3').click(function (e) {
  e.preventDefault()
  whoActive = 'L-3'
  changeActive()
  changeBoard()
  guideChange()
})

// 左 2
$('.introduce__map-land__left-section__two').click(function (e) { 
  e.preventDefault()
  whoActive = 'L-2'
  changeActive()
  changeBoard()
  guideChange()
})

$('#left-link-2').click(function (e) {
  e.preventDefault()
  whoActive = 'L-2'
  changeActive()
  changeBoard()
  guideChange()
})

// 左 1
$('.introduce__map-land__left-section__one').click(function (e) { 
  e.preventDefault()
  whoActive = 'L-1'
  changeActive()
  changeBoard()
  guideChange()
})

$('#left-link-1').click(function (e) {
  e.preventDefault()
  whoActive = 'L-1'
  changeActive()
  changeBoard()
  guideChange()
})

// 左 4
$('.introduce__map-land__left-section__four').click(function (e) { 
  e.preventDefault()
  whoActive = 'L-4'
  changeActive()
  changeBoard()
  guideChange()
})

$('#left-link-4').click(function (e) {
  e.preventDefault()
  whoActive = 'L-4'
  changeActive()
  changeBoard()
  guideChange()
})

// 左 5
$('.introduce__map-land__left-section__five').click(function (e) { 
  e.preventDefault()
  whoActive = 'L-5'
  changeActive()
  changeBoard()
  guideChange()
})

$('#left-link-5').click(function (e) {
  e.preventDefault()
  whoActive = 'L-5'
  changeActive()
  changeBoard()
  guideChange()
})

// 右 4
$('.introduce__map-land__right-section__four').click(function (e) { 
  e.preventDefault()
  whoActive = 'R-4'
  changeActive()
  changeBoard()
  guideChange()
})

$('#right-link-4').click(function (e) {
  e.preventDefault()
  whoActive = 'R-4'
  changeActive()
  changeBoard()
  guideChange()
})

// 右 3
$('.introduce__map-land__right-section__three').click(function (e) { 
  e.preventDefault()
  whoActive = 'R-3'
  changeActive()
  changeBoard()
  guideChange()
})

$('#right-link-3').click(function (e) {
  e.preventDefault()
  whoActive = 'R-3'
  changeActive()
  changeBoard()
  guideChange()
})

// 右 2
$('.introduce__map-land__right-section__two').click(function (e) { 
  e.preventDefault()
  whoActive = 'R-2'
  changeActive()
  changeBoard()
  guideChange()
})

$('#right-link-2').click(function (e) {
  e.preventDefault()
  whoActive = 'R-2'
  changeActive()
  changeBoard()
  guideChange()
})

// 右 1
$('.introduce__map-land__right-section__one').click(function (e) { 
  e.preventDefault()
  whoActive = 'R-1'
  changeActive()
  changeBoard()
  guideChange()
})

$('#right-link-1').click(function (e) {
  e.preventDefault()
  whoActive = 'R-1'
  changeActive()
  changeBoard()
  guideChange()
})

// 右 5
$('.introduce__map-land__right-section__five').click(function (e) { 
  e.preventDefault()
  whoActive = 'R-5'
  changeActive()
  changeBoard()
  guideChange()
})

$('#right-link-5').click(function (e) {
  e.preventDefault()
  whoActive = 'R-5'
  changeActive()
  changeBoard()
  guideChange()
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

/* detail board 內容切換 */
function changeBoard () {
  const detailTitleSection = document.querySelector('.introduce__board__title')
  const detailNum = document.createElement('span')
  const detailTitle = document.createElement('span')
  const detailContentSection = document.querySelector('.introduce__board__text')
  const detailContent = document.createElement('p')

  while (detailTitleSection.firstChild) {
    detailTitleSection.removeChild(detailTitleSection.firstChild)
  }

  while (detailContentSection.firstChild) {
    detailContentSection.removeChild(detailContentSection.firstChild)
  }

  let num = null
  let title = null
  let content = null

  switch (whoActive) {
    case 'L-1':
      num = document.createTextNode('1')
      title = document.createTextNode('自動化服務區')
      content = document.createTextNode('喚醒居家智能客服，即時匯率、個人化數位金融都有小幫手為你服務 喚醒居家智能客服，即時匯率、個人化數位金融都有小幫手為你服務 喚醒居家智能客服，即時匯率、個人化數位金融都有小幫手為你服務')
      break
    case 'L-2':
      num = document.createTextNode('2')
      title = document.createTextNode('VR體驗區')
      content = document.createTextNode('這是VR體驗區')
      break
    case 'L-3':
      num = document.createTextNode('3')
      title = document.createTextNode('居家場景')
      content = document.createTextNode('這是居家場景')
      break
    case 'L-4':
      num = document.createTextNode('4')
      title = document.createTextNode('Master Card 區')
      content = document.createTextNode('這是Master Card 區')
      break
    case 'L-5':
      num = document.createTextNode('5')
      title = document.createTextNode('全家導客區')
      content = document.createTextNode('這是全家導客區')
      break
    case 'R-1':
      num = document.createTextNode('1')
      title = document.createTextNode('導覽說明區')
      content = document.createTextNode('這是導覽說明區')
      break
    case 'R-2':
      num = document.createTextNode('2')
      title = document.createTextNode('交通場景')
      content = document.createTextNode('這是交通場景')
      break
    case 'R-3':
      num = document.createTextNode('3')
      title = document.createTextNode('分行迎賓')
      content = document.createTextNode('這是分行迎賓')
      break
    case 'R-4':
      num = document.createTextNode('4')
      title = document.createTextNode('無人商店')
      content = document.createTextNode('這是無人商店')
      break
    case 'R-5':
      num = document.createTextNode('5')
      title = document.createTextNode('餐廳零售場景')
      content = document.createTextNode('這是餐廳零售場景')
      break
  }

  detailNum.appendChild(num)
  detailNum.className = 'introduce__board__title__number'
  detailTitleSection.appendChild(detailNum)

  detailTitle.appendChild(title)
  detailTitleSection.appendChild(detailTitle)

  detailContent.appendChild(content)
  detailContentSection.appendChild(detailContent)
}

changeBoard()

/* 按鈕切換 */
$('.introduce__board__btn-right').click(function (e) { 
  e.preventDefault()
  let sectionArray = []

  if (whoActive.indexOf('R') > -1) {
    sectionArray = ['R-1', 'R-2', 'R-3', 'R-4', 'R-5']
  } else {
    sectionArray = ['L-1', 'L-2', 'L-3', 'L-4', 'L-5']
  }

  if (whoActive !== sectionArray[sectionArray.length - 1]) {
    const index = sectionArray.indexOf(whoActive)
    whoActive = sectionArray[index + 1]
    changeActive()
    changeBoard()
    guideChange()
  } else {
    whoActive = sectionArray[0]
    changeActive()
    changeBoard()
    guideChange()
  }
})

$('.introduce__board__btn-left').click(function (e) { 
  e.preventDefault()
  let sectionArray = []

  if (whoActive.indexOf('R') > -1) {
    sectionArray = ['R-1', 'R-2', 'R-3', 'R-4', 'R-5']
  } else {
    sectionArray = ['L-1', 'L-2', 'L-3', 'L-4', 'L-5']
  }

  if (whoActive !== sectionArray[0]) {
    const index = sectionArray.indexOf(whoActive)
    whoActive = sectionArray[index - 1]
    changeActive()
    changeBoard()
    guideChange()
  } else {
    whoActive = sectionArray[sectionArray.length - 1]
    changeActive()
    changeBoard()
    guideChange()
  }
})

/* 導引線切換 */
function guideChange () {
  switch (whoActive) {
    case 'L-1':
      $('.introduce__guide-line-mask').removeClass('introduce__guide-line-mask__active')
      $('.introduce__guide-line').css('background-image', 'url("../images/introduce/guide/left-guide-1.png")')
      $('.introduce__guide-line').css('width', '37.95vw')
      $('.introduce__guide-line').css('height', '16.13vh')
      $('.introduce__guide-line-section').css('width', '37.95vw')
      $('.introduce__guide-line-section').css('height', '16.13vh')
      $('.introduce__guide-line-section').css('right', '38.28vw')
      $('.introduce__guide-line-section').css('bottom', '34.491vh')
      setTimeout(() => {
        $('.introduce__guide-line-mask').addClass('introduce__guide-line-mask__active')
      }, 300)
      break
    case 'L-2':
      $('.introduce__guide-line-mask').removeClass('introduce__guide-line-mask__active')
      $('.introduce__guide-line').css('background-image', 'url("../images/introduce/guide/left-guide-2.png")')
      $('.introduce__guide-line').css('width', '45.58vw')
      $('.introduce__guide-line').css('height', '11.89vh')
      $('.introduce__guide-line-section').css('width', '45.58vw')
      $('.introduce__guide-line-section').css('height', '11.89vh')
      $('.introduce__guide-line-section').css('right', '38.16vw')
      $('.introduce__guide-line-section').css('bottom', '34.491vh')
      setTimeout(() => {
        $('.introduce__guide-line-mask').addClass('introduce__guide-line-mask__active')
      }, 300)
      break
    case 'L-3':
      $('.introduce__guide-line-mask').removeClass('introduce__guide-line-mask__active')
      $('.introduce__guide-line').css('background-image', 'url("../images/introduce/guide/left-guide-3.png")')
      $('.introduce__guide-line').css('width', '52.09vw')
      $('.introduce__guide-line').css('height', '9.491vh')
      $('.introduce__guide-line-section').css('width', '52.09vw')
      $('.introduce__guide-line-section').css('height', '9.491vh')
      $('.introduce__guide-line-section').css('right', '38.29vw')
      $('.introduce__guide-line-section').css('bottom', '33.491vh')
      setTimeout(() => {
        $('.introduce__guide-line-mask').addClass('introduce__guide-line-mask__active')
      }, 300)
      break
    case 'L-4':
      $('.introduce__guide-line-mask').removeClass('introduce__guide-line-mask__active')
      $('.introduce__guide-line').css('background-image', 'url("../images/introduce/guide/left-guide-4.png")')
      $('.introduce__guide-line').css('width', '46.875vw')
      $('.introduce__guide-line').css('height', '3.2vh')
      $('.introduce__guide-line-section').css('width', '46.875vw')
      $('.introduce__guide-line-section').css('height', '3.2vh')
      $('.introduce__guide-line-section').css('right', '38.29vw')
      $('.introduce__guide-line-section').css('bottom', '30.491vh')
      setTimeout(() => {
        $('.introduce__guide-line-mask').addClass('introduce__guide-line-mask__active')
      }, 300)
      break
    case 'L-5':
      $('.introduce__guide-line-mask').removeClass('introduce__guide-line-mask__active')
      $('.introduce__guide-line').css('background-image', 'url("../images/introduce/guide/left-guide-5.png")')
      $('.introduce__guide-line').css('width', '39.85vw')
      $('.introduce__guide-line').css('height', '1.44vh')
      $('.introduce__guide-line-section').css('width', '39.85vw')
      $('.introduce__guide-line-section').css('height', '1.44vh')
      $('.introduce__guide-line-section').css('right', '38.55vw')
      $('.introduce__guide-line-section').css('bottom', '36.12vh')
      setTimeout(() => {
        $('.introduce__guide-line-mask').addClass('introduce__guide-line-mask__active')
      }, 300)
      break
    case 'R-1':
      $('.introduce__guide-line-mask').removeClass('introduce__guide-line-mask__active')
      $('.introduce__guide-line').css('background-image', 'url("../images/introduce/guide/right-guide-1.png")')
      $('.introduce__guide-line').css('width', '17.54vw')
      $('.introduce__guide-line').css('height', '1.436vh')
      $('.introduce__guide-line-section').css('width', '17.54vw')
      $('.introduce__guide-line-section').css('height', '1.436vh')
      $('.introduce__guide-line-section').css('right', '37.76vw')
      $('.introduce__guide-line-section').css('bottom', '46.3vh')
      setTimeout(() => {
        $('.introduce__guide-line-mask').addClass('introduce__guide-line-mask__active')
      }, 300)
      break
    case 'R-2':
      $('.introduce__guide-line-mask').removeClass('introduce__guide-line-mask__active')
      $('.introduce__guide-line').css('background-image', 'url("../images/introduce/guide/right-guide-2.png")')
      $('.introduce__guide-line').css('width', '23.27vw')
      $('.introduce__guide-line').css('height', '5.80vh')
      $('.introduce__guide-line-section').css('width', '23.27vw')
      $('.introduce__guide-line-section').css('height', '5.80vh')
      $('.introduce__guide-line-section').css('right', '37.76vw')
      $('.introduce__guide-line-section').css('bottom', '46.3vh')
      setTimeout(() => {
        $('.introduce__guide-line-mask').addClass('introduce__guide-line-mask__active')
      }, 300)
      break
    case 'R-3':
      $('.introduce__guide-line-mask').removeClass('introduce__guide-line-mask__active')
      $('.introduce__guide-line').css('background-image', 'url("../images/introduce/guide/right-guide-3.png")')
      $('.introduce__guide-line').css('width', '25.65vw')
      $('.introduce__guide-line').css('height', '9.19vh')
      $('.introduce__guide-line-section').css('width', '25.65vw')
      $('.introduce__guide-line-section').css('height', '9.19vh')
      $('.introduce__guide-line-section').css('right', '37.76vw')
      $('.introduce__guide-line-section').css('bottom', '46.3vh')
      setTimeout(() => {
        $('.introduce__guide-line-mask').addClass('introduce__guide-line-mask__active')
      }, 300)
      break
    case 'R-4':
      $('.introduce__guide-line-mask').removeClass('introduce__guide-line-mask__active')
      $('.introduce__guide-line').css('background-image', 'url("../images/introduce/guide/right-guide-4.png")')
      $('.introduce__guide-line').css('width', '25.65vw')
      $('.introduce__guide-line').css('height', '13.28vh')
      $('.introduce__guide-line-section').css('width', '25.65vw')
      $('.introduce__guide-line-section').css('height', '13.28vh')
      $('.introduce__guide-line-section').css('right', '37.76vw')
      $('.introduce__guide-line-section').css('bottom', '46.3vh')
      setTimeout(() => {
        $('.introduce__guide-line-mask').addClass('introduce__guide-line-mask__active')
      }, 300)
      break
    case 'R-5':
      $('.introduce__guide-line-mask').removeClass('introduce__guide-line-mask__active')
      $('.introduce__guide-line').css('background-image', 'url("../images/introduce/guide/right-guide-5.png")')
      $('.introduce__guide-line').css('width', '7.28vw')
      $('.introduce__guide-line').css('height', '7.68vh')
      $('.introduce__guide-line-section').css('width', '7.28vw')
      $('.introduce__guide-line-section').css('height', '7.68vh')
      $('.introduce__guide-line-section').css('right', '38.26vw')
      $('.introduce__guide-line-section').css('bottom', '46.3vh')
      setTimeout(() => {
        $('.introduce__guide-line-mask').addClass('introduce__guide-line-mask__active')
      }, 300)
      break
  }
}

/* 介紹頁右上角圓圈旋轉會遇到奇怪錯誤，第二次進入頁面，圖片會變模糊，因此改用動態加入動畫的方式讓其旋轉 */
function circleRotate () {
  $('.introduce__frame__circle-group__circle').addClass('introduce__frame__circle-group__circle__rotate')
  $('.introduce__frame__circle-group__circle2').addClass('introduce__frame__circle-group__circle__rotate')
  $('.introduce__frame__circle-group__circle3').addClass('introduce__frame__circle-group__circle__rotate')
}

function circleStop () {
  $('.introduce__frame__circle-group__circle').removeClass('introduce__frame__circle-group__circle__rotate')
  $('.introduce__frame__circle-group__circle2').removeClass('introduce__frame__circle-group__circle__rotate')
  $('.introduce__frame__circle-group__circle3').removeClass('introduce__frame__circle-group__circle__rotate')
}

circleRotate()
guideChange()