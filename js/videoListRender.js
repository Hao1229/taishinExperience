/* 此 js 用來控制 videoList 的 render */
videoList.forEach((item, index) => {
  const mainListContent = `
    <section id="${item.mainTitle}" class="index__video-popup__video-list-sort">
      <p class="index__video-popup__video-list__title">
        ${item.mainTitle}
      </p>
      <div class="index__video-popup__video-list__list">
        <div class="index__video-popup__video-list__more-btn">
          <span></span>
        </div>
        <div id="listContent${index + 1}" class="index__video-popup__video-list__list__content d-flex"></div>
      </div>
    </section>
  `
  $('#videoList').append(mainListContent)

  $(`#${item.mainTitle} .index__video-popup__video-list__more-btn`).click(function (e) { 
    e.preventDefault()
    $(`#${item.mainTitle} .index__video-popup__video-list__list__content`).toggleClass('index__video-popup__video-list__list__content__active')
    $(`#${item.mainTitle} .index__video-popup__video-list__more-btn`).toggleClass('index__video-popup__video-list__more-btn__active')
  })

  item.list.forEach((content, contentIndex) => {
    let listContent

    if (contentIndex % 3 === 1) {
      listContent = `
        <div id="${content.title}" class="index__video-popup__video-list__list__content__item index__video-popup__video-list__list__content__item-space" style="background-image:url('${content.img}')">
          <p>${content.title}</p>
          <span>${content.time}</span>
        </div>
      `
    } else {
      listContent = `
        <div id="${content.title}" class="index__video-popup__video-list__list__content__item" style="background-image:url('${content.img}')">
          <p>${content.title}</p>
          <span>${content.time}</span>
        </div>
      `
    }

    $(`#listContent${index + 1}`).append(listContent)

    $(`#${content.title}`).click(function (e) { 
      e.preventDefault()
      changeHotSource(content.video, content.title)
    })
  })
})

function mainVideoRender () {
  $('#film-one > source').attr('src', videoMainList[0].video)
  $('#film-two > source').attr('src', videoMainList[1].video)
  $('#film-three > source').attr('src', videoMainList[2].video)
  $('.video-btn-one').text(videoMainList[0].title)
  $('.video-btn-two').text(videoMainList[1].title)
  $('.video-btn-three').text(videoMainList[2].title)
}

mainVideoRender()
