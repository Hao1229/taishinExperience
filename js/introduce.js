/* 導覽地圖 active default 切換 */

let whoActive = 'L-1'

// 左 3
$('.introduce__map-land__left-section__three__click-section, .introduce__map-land__left-section__three__title').click(function (e) {
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
$('.introduce__map-land__left-section__two__click-section, .introduce__map-land__left-section__two__title').click(function (e) { 
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
$('.introduce__map-land__left-section__one__click-section, .introduce__map-land__left-section__one__title').click(function (e) { 
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
$('.introduce__map-land__left-section__four__click-section, .introduce__map-land__left-section__four__title').click(function (e) { 
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
$('.introduce__map-land__left-section__five__click-section, .introduce__map-land__left-section__five__title').click(function (e) { 
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
$('.introduce__map-land__right-section__four__click-section, .introduce__map-land__right-section__four__title').click(function (e) { 
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
$('.introduce__map-land__right-section__three__click-section, .introduce__map-land__right-section__three__title').click(function (e) { 
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
$('.introduce__map-land__right-section__two__click-section, .introduce__map-land__right-section__two__title').click(function (e) { 
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
$('.introduce__map-land__right-section__one__click-section, .introduce__map-land__right-section__one__click-section-2, .introduce__map-land__right-section__one__click-section-3, .introduce__map-land__right-section__one__title').click(function (e) { 
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
$('.introduce__map-land__right-section__five__click-section, .introduce__map-land__right-section__five__click-section-2, .introduce__map-land__right-section__five__click-section-3, .introduce__map-land__right-section__five__title').click(function (e) { 
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
    $('#left-link-3 .introduce__map-name-section__left-section__content__part__number').addClass('introduce__map-name-section__left-section__content__part__number__active')
    $('#left-link-3 .introduce__map-name-section__left-section__content__part__text').addClass('introduce__map-name-section__left-section__content__part__text__active')
  } else {
    $('.introduce__map-land__left-section__three').removeClass('introduce__map-land__left-section__three__active')
    $('.introduce__map-land__left-section__three__title').removeClass('introduce__map-land__left-section__three__title__active')
    $('#left-link-3 .introduce__map-name-section__left-section__content__part__text').removeClass('introduce__map-name-section__left-section__content__part__text__active')
    $('#left-link-3 .introduce__map-name-section__left-section__content__part__number').removeClass('introduce__map-name-section__left-section__content__part__number__active')
  }

  if (whoActive === 'L-2') {
    $('.introduce__map-land__left-section__two').addClass('introduce__map-land__left-section__two__active')
    $('.introduce__map-land__left-section__two__title').addClass('introduce__map-land__left-section__two__title__active')
    $('#left-link-2 .introduce__map-name-section__left-section__content__part__number').addClass('introduce__map-name-section__left-section__content__part__number__active')
    $('#left-link-2 .introduce__map-name-section__left-section__content__part__text').addClass('introduce__map-name-section__left-section__content__part__text__active')
  } else {
    $('.introduce__map-land__left-section__two').removeClass('introduce__map-land__left-section__two__active')
    $('.introduce__map-land__left-section__two__title').removeClass('introduce__map-land__left-section__two__title__active')
    $('#left-link-2 .introduce__map-name-section__left-section__content__part__number').removeClass('introduce__map-name-section__left-section__content__part__number__active')
    $('#left-link-2 .introduce__map-name-section__left-section__content__part__text').removeClass('introduce__map-name-section__left-section__content__part__text__active')
  }

  if (whoActive === 'L-1') {
    $('.introduce__map-land__left-section__one').addClass('introduce__map-land__left-section__one__active')
    $('.introduce__map-land__left-section__one__title').addClass('introduce__map-land__left-section__one__title__active')
    $('#left-link-1 .introduce__map-name-section__left-section__content__part__number').addClass('introduce__map-name-section__left-section__content__part__number__active')
    $('#left-link-1 .introduce__map-name-section__left-section__content__part__text').addClass('introduce__map-name-section__left-section__content__part__text__active')
  } else {
    $('.introduce__map-land__left-section__one').removeClass('introduce__map-land__left-section__one__active')
    $('.introduce__map-land__left-section__one__title').removeClass('introduce__map-land__left-section__one__title__active')
    $('#left-link-1 .introduce__map-name-section__left-section__content__part__number').removeClass('introduce__map-name-section__left-section__content__part__number__active')
    $('#left-link-1 .introduce__map-name-section__left-section__content__part__text').removeClass('introduce__map-name-section__left-section__content__part__text__active')
  }

  if (whoActive === 'L-4') {
    $('.introduce__map-land__left-section__four').addClass('introduce__map-land__left-section__four__active')
    $('.introduce__map-land__left-section__four__title').addClass('introduce__map-land__left-section__four__title__active')
    $('#left-link-4 .introduce__map-name-section__left-section__content__part__number').addClass('introduce__map-name-section__left-section__content__part__number__active')
    $('#left-link-4 .introduce__map-name-section__left-section__content__part__text').addClass('introduce__map-name-section__left-section__content__part__text__left-four-active')
  } else {
    $('.introduce__map-land__left-section__four').removeClass('introduce__map-land__left-section__four__active')
    $('.introduce__map-land__left-section__four__title').removeClass('introduce__map-land__left-section__four__title__active')
    $('#left-link-4 .introduce__map-name-section__left-section__content__part__number').removeClass('introduce__map-name-section__left-section__content__part__number__active')
    $('#left-link-4 .introduce__map-name-section__left-section__content__part__text').removeClass('introduce__map-name-section__left-section__content__part__text__left-four-active')
  }

  if (whoActive === 'L-5') {
    $('.introduce__map-land__left-section__five').addClass('introduce__map-land__left-section__five__active')
    $('.introduce__map-land__left-section__five__title').addClass('introduce__map-land__left-section__five__title__active')
    $('#left-link-5 .introduce__map-name-section__left-section__content__part__number').addClass('introduce__map-name-section__left-section__content__part__number__active')
    $('#left-link-5 .introduce__map-name-section__left-section__content__part__text').addClass('introduce__map-name-section__left-section__content__part__text__active')
  } else {
    $('.introduce__map-land__left-section__five').removeClass('introduce__map-land__left-section__five__active')
    $('.introduce__map-land__left-section__five__title').removeClass('introduce__map-land__left-section__five__title__active')
    $('#left-link-5 .introduce__map-name-section__left-section__content__part__number').removeClass('introduce__map-name-section__left-section__content__part__number__active')
    $('#left-link-5 .introduce__map-name-section__left-section__content__part__text').removeClass('introduce__map-name-section__left-section__content__part__text__active')
  }

  if (whoActive === 'R-4') {
    $('.introduce__map-land__right-section__four').addClass('introduce__map-land__right-section__four__active')
    $('.introduce__map-land__right-section__four__title').addClass('introduce__map-land__right-section__four__title__active')
    $('#right-link-4 .introduce__map-name-section__right-section__content__part__number').addClass('introduce__map-name-section__right-section__content__part__number__active')
    $('#right-link-4 .introduce__map-name-section__right-section__content__part__text').addClass('introduce__map-name-section__right-section__content__part__text__active')
  } else {
    $('.introduce__map-land__right-section__four').removeClass('introduce__map-land__right-section__four__active')
    $('.introduce__map-land__right-section__four__title').removeClass('introduce__map-land__right-section__four__title__active')
    $('#right-link-4 .introduce__map-name-section__right-section__content__part__number').removeClass('introduce__map-name-section__right-section__content__part__number__active')
    $('#right-link-4 .introduce__map-name-section__right-section__content__part__text').removeClass('introduce__map-name-section__right-section__content__part__text__active')
  }

  if (whoActive === 'R-3') {
    $('.introduce__map-land__right-section__three').addClass('introduce__map-land__right-section__three__active')
    $('.introduce__map-land__right-section__three__title').addClass('introduce__map-land__right-section__three__title__active')
    $('#right-link-3 .introduce__map-name-section__right-section__content__part__number').addClass('introduce__map-name-section__right-section__content__part__number__active')
    $('#right-link-3 .introduce__map-name-section__right-section__content__part__text').addClass('introduce__map-name-section__right-section__content__part__text__active')
  } else {
    $('.introduce__map-land__right-section__three').removeClass('introduce__map-land__right-section__three__active')
    $('.introduce__map-land__right-section__three__title').removeClass('introduce__map-land__right-section__three__title__active')
    $('#right-link-3 .introduce__map-name-section__right-section__content__part__number').removeClass('introduce__map-name-section__right-section__content__part__number__active')
    $('#right-link-3 .introduce__map-name-section__right-section__content__part__text').removeClass('introduce__map-name-section__right-section__content__part__text__active')
  }

  if (whoActive === 'R-2') {
    $('.introduce__map-land__right-section__two').addClass('introduce__map-land__right-section__two__active')
    $('.introduce__map-land__right-section__two__title').addClass('introduce__map-land__right-section__two__title__active')
    $('#right-link-2 .introduce__map-name-section__right-section__content__part__number').addClass('introduce__map-name-section__right-section__content__part__number__active')
    $('#right-link-2 .introduce__map-name-section__right-section__content__part__text').addClass('introduce__map-name-section__right-section__content__part__text__active')
  } else {
    $('.introduce__map-land__right-section__two').removeClass('introduce__map-land__right-section__two__active')
    $('.introduce__map-land__right-section__two__title').removeClass('introduce__map-land__right-section__two__title__active')
    $('#right-link-2 .introduce__map-name-section__right-section__content__part__number').removeClass('introduce__map-name-section__right-section__content__part__number__active')
    $('#right-link-2 .introduce__map-name-section__right-section__content__part__text').removeClass('introduce__map-name-section__right-section__content__part__text__active')
  }

  if (whoActive === 'R-1') {
    $('.introduce__map-land__right-section__one').addClass('introduce__map-land__right-section__one__active')
    $('.introduce__map-land__right-section__one__title').addClass('introduce__map-land__right-section__one__title__active')
    $('#right-link-1 .introduce__map-name-section__right-section__content__part__number').addClass('introduce__map-name-section__right-section__content__part__number__active')
    $('#right-link-1 .introduce__map-name-section__right-section__content__part__text').addClass('introduce__map-name-section__right-section__content__part__text__active')
  } else {
    $('.introduce__map-land__right-section__one').removeClass('introduce__map-land__right-section__one__active')
    $('.introduce__map-land__right-section__one__title').removeClass('introduce__map-land__right-section__one__title__active')
    $('#right-link-1 .introduce__map-name-section__right-section__content__part__number').removeClass('introduce__map-name-section__right-section__content__part__number__active')
    $('#right-link-1 .introduce__map-name-section__right-section__content__part__text').removeClass('introduce__map-name-section__right-section__content__part__text__active')
  }

  if (whoActive === 'R-5') {
    $('.introduce__map-land__right-section__five').addClass('introduce__map-land__right-section__five__active')
    $('.introduce__map-land__right-section__five__title').addClass('introduce__map-land__right-section__five__title__active')
    $('#right-link-5 .introduce__map-name-section__right-section__content__part__number').addClass('introduce__map-name-section__right-section__content__part__number__active')
    $('#right-link-5 .introduce__map-name-section__right-section__content__part__text').addClass('introduce__map-name-section__right-section__content__part__text__active')
  } else {
    $('.introduce__map-land__right-section__five').removeClass('introduce__map-land__right-section__five__active')
    $('.introduce__map-land__right-section__five__title').removeClass('introduce__map-land__right-section__five__title__active')
    $('#right-link-5 .introduce__map-name-section__right-section__content__part__number').removeClass('introduce__map-name-section__right-section__content__part__number__active')
    $('#right-link-5 .introduce__map-name-section__right-section__content__part__text').removeClass('introduce__map-name-section__right-section__content__part__text__active')
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
  const detailPartnerSection = document.querySelector('.introduce__board__partner')
  const detailPartner = document.createElement('span')
  const detailPartnerLine = document.createElement('div')

  while (detailTitleSection.firstChild) {
    detailTitleSection.removeChild(detailTitleSection.firstChild)
  }

  while (detailContentSection.firstChild) {
    detailContentSection.removeChild(detailContentSection.firstChild)
  }

  while (detailPartnerSection.firstChild) {
    detailPartnerSection.removeChild(detailPartnerSection.firstChild)
  }

  let num = null
  let title = null
  let content = null
  let partner = null
  let img = null
  let video = null
  const videoPay = document.querySelector('#video-pay')

  switch (whoActive) {
    case 'L-1':
      num = document.createTextNode('1')
      title = document.createTextNode('便捷•自動化服務')
      content = document.createTextNode('24小時ATM，自動化金融服務就在彈指之間！')
      partner = null
      img = './images/introduce/frameImg/left-section-one-frame.jpg'
      break
    case 'L-2':
      num = document.createTextNode('2')
      title = document.createTextNode('5G•VR商城')
      content = document.createTextNode('進入台新VR商場，宅在家也能身歷其境，一指購足')
      partner = document.createTextNode('協力夥伴: 亞太電信、時刻旅行')
      img = './images/introduce/frameImg/left-section-two-frame.jpg'
      break
    case 'L-3':
      num = document.createTextNode('3')
      title = document.createTextNode('AI智慧•居家金融')
      content = document.createTextNode('用聲音啟動金融智慧生活，用科技讓Richart成為您的帳務管理小幫手')
      partner = null
      img = './images/introduce/frameImg/left-section-three-frame.jpg'
      break
    case 'L-4':
      num = document.createTextNode('4')
      title = document.createTextNode('跨域•想像未來')
      content = document.createTextNode('台新邀請產業跨域合作打造生活金融生態圈，萬事達卡以便捷支付科技，跨國界點數整合，拓展對未來無限想像')
      partner = document.createTextNode('協力夥伴: Mastercard')
      video = './video/left-section-four-video.mp4'
      break
    case 'L-5':
      num = document.createTextNode('5')
      title = document.createTextNode('品味科技•全家咖啡')
      content = document.createTextNode('輕鬆掃碼，用一杯咖啡的時間，品味數位金融的全新體驗')
      partner = document.createTextNode('協力夥伴:全家便利')
      video = './video/left-section-five-video.mp4'
      break
    case 'R-1':
      num = document.createTextNode('1')
      title = document.createTextNode('探索•台新光影')
      content = document.createTextNode('領航數位金融先驅，台新光影與時俱進，攜手產業實現生活金融生態圈')
      partner = null
      img = './images/introduce/frameImg/right-section-one-frame.jpg'
      break
    case 'R-2':
      num = document.createTextNode('2')
      title = document.createTextNode('智慧•自在暢行')
      content = document.createTextNode('刷臉通行，自在暢行；你，就是智慧的支付方式')
      partner = document.createTextNode('協力夥伴:亞太電信')
      img = './images/introduce/frameImg/right-section-two-frame.jpg'
      break
    case 'R-3':
      num = document.createTextNode('3')
      title = document.createTextNode('數據•掌握先機')
      content = document.createTextNode('客戶的需求，台新都知道，行銷出擊一把罩')
      partner = null
      video = './video/right-section-three-video.mp4'
      break
    case 'R-4':
      num = document.createTextNode('4')
      title = document.createTextNode('科技•自助商店')
      content = document.createTextNode('24H服務不打烊，不管什麼PAY都速配')
      partner = null
      img = './images/introduce/frameImg/right-section-four-frame.jpg'
      break
    case 'R-5':
      num = document.createTextNode('5')
      title = document.createTextNode('整合•多元支付')
      content = document.createTextNode('點餐、付款、結帳一條龍，整合多元支付，台新滿足你我的需求')
      partner = document.createTextNode('協力夥伴:NEC、經貿聯網')
      video = './video/場館介紹_多元支付.mp4'
      break
  }

  detailNum.appendChild(num)
  detailNum.className = 'introduce__board__title__number'
  detailTitleSection.appendChild(detailNum)

  detailTitle.appendChild(title)
  detailTitleSection.appendChild(detailTitle)

  detailContent.appendChild(content)
  detailContentSection.appendChild(detailContent)

  if (whoActive === 'R-5' || whoActive === 'L-4' || whoActive === 'L-5' || whoActive === 'R-3') {
    $('.introduce__board__frame').css('display', 'none')
    $('.introduce__board__video').css('display', 'block')
    $('#video-pay > source').attr('src', video)
    videoPay.load()
    videoPay.play()
  } else {
    $('.introduce__board__frame').css('display', 'block')
    $('.introduce__board__frame').css('background-image', `url(${img})`)
    $('.introduce__board__video').css('display', 'none')
    videoPay.pause()
  }


  if (partner) {
    detailPartner.appendChild(partner)
    detailPartnerLine.className = 'introduce__board__partner__line'
    detailPartnerSection.appendChild(detailPartnerLine)
    detailPartnerSection.appendChild(detailPartner)
  }
}

changeBoard()

/* 按鈕切換 */
$('.introduce__board__btn-right').click(function (e) { 
  e.preventDefault()
  const sectionArray = ['L-1', 'L-2', 'L-3', 'L-4', 'L-5', 'R-1', 'R-2', 'R-3', 'R-4', 'R-5']

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
  const sectionArray = ['L-1', 'L-2', 'L-3', 'L-4', 'L-5', 'R-1', 'R-2', 'R-3', 'R-4', 'R-5']

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
      $('.introduce__guide-line').css('background-image', 'url("https://hao1229.github.io/images/introduce/guide/left-guide-1.png")')
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
      $('.introduce__guide-line').css('background-image', 'url("https://hao1229.github.io/images/introduce/guide/left-guide-2.png")')
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
      $('.introduce__guide-line').css('background-image', 'url("https://hao1229.github.io/images/introduce/guide/left-guide-3.png")')
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
      $('.introduce__guide-line').css('background-image', 'url("https://hao1229.github.io/images/introduce/guide/left-guide-4.png")')
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
      $('.introduce__guide-line').css('background-image', 'url("https://hao1229.github.io/images/introduce/guide/left-guide-5.png")')
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
      $('.introduce__guide-line').css('background-image', 'url("https://hao1229.github.io/images/introduce/guide/right-guide-1.png")')
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
      $('.introduce__guide-line').css('background-image', 'url("https://hao1229.github.io/images/introduce/guide/right-guide-2.png")')
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
      $('.introduce__guide-line').css('background-image', 'url("https://hao1229.github.io/images/introduce/guide/right-guide-3.png")')
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
      $('.introduce__guide-line').css('background-image', 'url("https://hao1229.github.io/images/introduce/guide/right-guide-4.png")')
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
      $('.introduce__guide-line').css('background-image', 'url("https://hao1229.github.io/images/introduce/guide/right-guide-5.png")')
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