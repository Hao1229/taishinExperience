/* 主打影片 list */
const videoMainList = [
  {
    title: '台新主打一',
    img: './images/videoImg/popup-demo-1.jpeg',
    video: './video/mainVideo/mov_bbb.mp4',
  },
  {
    title: '台新主打二',
    img: './images/videoImg/popup-demo-2.jpeg',
    video: './video/mainVideo/trailer.mp4',
  },
  {
    title: '台新主打三',
    img: './images/videoImg/popup-demo-3.jpeg',
    video: './video/mainVideo/View_From_A_Blue_Moon_Trailer-576p.mp4',
  }
]

/* 熱門影片 list */
const videoHotList = [
  {
    title: '台新公司簡介',
    img: './images/videoImg/popup-demo-1.jpeg',
    video: './video/videoList/mov_bbb.mp4',
    time: '7:30'
  },
  {
    title: '台新公司簡介2',
    img: './images/videoImg/popup-demo-2.jpeg',
    video: './video/videoList/trailer.mp4',
    time: '7:30'
  },
  {
    title: '台新公司簡介3',
    img: './images/videoImg/popup-demo-3.jpeg',
    video: './video/videoList/View_From_A_Blue_Moon_Trailer-576p.mp4',
    time: '7:30'
  },
  {
    title: '台新公司簡介4',
    img: './images/videoImg/popup-demo-1.jpeg',
    video: './video/videoList/mov_bbb.mp4',
    time: '10:30'
  },
  {
    title: '台新公司簡介5',
    img: './images/videoImg/popup-demo-2.jpeg',
    video: './video/videoList/trailer.mp4',
    time: '10:30'
  },
  {
    title: '台新公司簡介6',
    img: './images/videoImg/popup-demo-3.jpeg',
    video: './video/videoList/View_From_A_Blue_Moon_Trailer-576p.mp4',
    time: '10:30'
  },
  {
    title: '台新公司簡介7',
    img: './images/videoImg/popup-demo-1.jpeg',
    video: './video/videoList/mov_bbb.mp4',
    time: '3:30'
  },
  {
    title: '台新公司簡介8',
    img: './images/videoImg/popup-demo-2.jpeg',
    video: './video/videoList/trailer.mp4',
    time: '3:30'
  },
  {
    title: '台新公司簡介9',
    img: './images/videoImg/popup-demo-3.jpeg',
    video: './video/videoList/View_From_A_Blue_Moon_Trailer-576p.mp4',
    time: '3:30'
  },
]

/* 活動影片 list */
const videoActivityList = [
  {
    title: '台新活動影片',
    img: './images/videoImg/popup-demo-1.jpeg',
    video: './video/videoList/mov_bbb.mp4',
    time: '7:30'
  },
  {
    title: '台新活動影片2',
    img: './images/videoImg/popup-demo-2.jpeg',
    video: './video/videoList/trailer.mp4',
    time: '7:30'
  },
  {
    title: '台新活動影片3',
    img: './images/videoImg/popup-demo-3.jpeg',
    video: './video/videoList/View_From_A_Blue_Moon_Trailer-576p.mp4',
    time: '7:30'
  },
  {
    title: '台新活動影片4',
    img: './images/videoImg/popup-demo-1.jpeg',
    video: './video/videoList/mov_bbb.mp4',
    time: '10:30'
  },
  {
    title: '台新活動影片5',
    img: './images/videoImg/popup-demo-2.jpeg',
    video: './video/videoList/trailer.mp4',
    time: '10:30'
  },
  {
    title: '台新活動影片6',
    img: './images/videoImg/popup-demo-3.jpeg',
    video: './video/videoList/View_From_A_Blue_Moon_Trailer-576p.mp4',
    time: '10:30'
  },
  {
    title: '台新活動影片7',
    img: './images/videoImg/popup-demo-1.jpeg',
    video: './video/videoList/mov_bbb.mp4',
    time: '3:30'
  },
  {
    title: '台新活動影片8',
    img: './images/videoImg/popup-demo-2.jpeg',
    video: './video/videoList/trailer.mp4',
    time: '3:30'
  },
  {
    title: '台新活動影片9',
    img: './images/videoImg/popup-demo-3.jpeg',
    video: './video/videoList/View_From_A_Blue_Moon_Trailer-576p.mp4',
    time: '3:30'
  },
]


videoHotList.forEach((item, index) => {
  const listContent = `
    <div id="hotFilm${index + 1}" class="index__video-popup__video-list__list__content__item" style="background-image:url('${item.img}')">
      <p>${item.title}</p>
      <span>${item.time}</span>
    </div>
  `
  $('#hotList').append(listContent)

  $(`#hotFilm${index + 1}`).click(function (e) { 
    e.preventDefault()
    changeHotSource(item.video, item.title)
  })
})

videoActivityList.forEach((item, index) => {
  const listContent = `
    <div id="activityFilm${index + 1}" class="index__video-popup__video-list__list__content__item" style="background-image:url('${item.img}')">
      <p>${item.title}</p>
      <span>${item.time}</span>
    </div>
  `
  $('#activityList').append(listContent)

  $(`#activityFilm${index + 1}`).click(function (e) { 
    e.preventDefault()
    changeHotSource(item.video, item.title)
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