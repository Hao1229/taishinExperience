/***
 * 影片上下架分成主打影片跟影片總覽
 * 主打影片的 title 對應彈窗的三個主打影片按鈕文字, video 則對應所要播放的影片
 * 影片總覽可增減類別，每個類別底下包含 mainTitle 與 list，mainTitle 對應類別的大標題，list 底下是該類別的各影片縮圖
 * list 的 title 對應縮圖的影片名稱，img 對應該影片縮圖，video 對應該縮圖要播放的影片，time 則為要顯示在縮圖上的影片時間
***/


/* 主打影片 list */
const videoMainList = [
  {
    title: '台新主打一',
    video: './video/mainVideo/mov_bbb.mp4',
  },
  {
    title: '台新主打二',
    video: './video/mainVideo/trailer.mp4',
  },
  {
    title: '台新主打三',
    video: './video/mainVideo/View_From_A_Blue_Moon_Trailer-576p.mp4',
  }
]

/* 影片總覽編輯 */
const videoList = [
  {
    mainTitle: '熱門影片',
    list: [
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
      }
    ]
  },
  {
    mainTitle: '活動影片',
    list: [
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
      }
    ]
  },
  {
    mainTitle: '宣傳影片',
    list: [
      {
        title: '台新宣傳影片',
        img: './images/videoImg/popup-demo-1.jpeg',
        video: './video/videoList/mov_bbb.mp4',
        time: '7:30'
      },
      {
        title: '台新宣傳影片2',
        img: './images/videoImg/popup-demo-2.jpeg',
        video: './video/videoList/trailer.mp4',
        time: '7:30'
      },
      {
        title: '台新宣傳影片3',
        img: './images/videoImg/popup-demo-3.jpeg',
        video: './video/videoList/View_From_A_Blue_Moon_Trailer-576p.mp4',
        time: '7:30'
      },
      {
        title: '台新宣傳影片4',
        img: './images/videoImg/popup-demo-1.jpeg',
        video: './video/videoList/mov_bbb.mp4',
        time: '10:30'
      },
      {
        title: '台新宣傳影片5',
        img: './images/videoImg/popup-demo-2.jpeg',
        video: './video/videoList/trailer.mp4',
        time: '10:30'
      },
      {
        title: '台新宣傳影片6',
        img: './images/videoImg/popup-demo-3.jpeg',
        video: './video/videoList/View_From_A_Blue_Moon_Trailer-576p.mp4',
        time: '10:30'
      },
      {
        title: '台新宣傳影片7',
        img: './images/videoImg/popup-demo-1.jpeg',
        video: './video/videoList/mov_bbb.mp4',
        time: '3:30'
      },
      {
        title: '台新宣傳影片8',
        img: './images/videoImg/popup-demo-2.jpeg',
        video: './video/videoList/trailer.mp4',
        time: '3:30'
      },
      {
        title: '台新宣傳影片9',
        img: './images/videoImg/popup-demo-3.jpeg',
        video: './video/videoList/View_From_A_Blue_Moon_Trailer-576p.mp4',
        time: '3:30'
      },
    ]
  }
]
