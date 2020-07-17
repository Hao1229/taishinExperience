/***
 * 影片上下架分成主打影片跟影片總覽
 * 主打影片的 title 對應彈窗的三個主打影片按鈕文字, video 則對應所要播放的影片
 * 影片總覽可增減類別，每個類別底下包含 mainTitle 與 list，mainTitle 對應類別的大標題，list 底下是該類別的各影片縮圖
 * list 的 title 對應縮圖的影片名稱，img 對應該影片縮圖，video 對應該縮圖要播放的影片，time 則為要顯示在縮圖上的影片時間
***/


/* 主打影片 list */
const videoMainList = [
  {
    title: '啟動數位生活',
    video: './video/mainVideo/啟動數位生活.mp4',
  },
  {
    title: 'Open Bank',
    video: './video/mainVideo/OpenBank.mp4',
  },
  {
    title: 'Link Pay',
    video: './video/mainVideo/LinkPay.mp4',
  }
]

/* 螢幕保護程式影片 list */
const protectList = [
  {
    video: './video/mainVideo/啟動數位生活.mp4',
  },
  {
    video: './video/mainVideo/OpenBank.mp4',
  },
  {
    video: './video/mainVideo/LinkPay.mp4',
  }
]

/* 影片總覽編輯 */
const videoList = [
  {
    mainTitle: '數位生活',
    list: [
      {
        title: '啟動數位生活',
        img: './images/videoImg/啟動數位生活.png',
        video: './video/videoList/數位生活/啟動數位生活.mp4',
        time: '2:31'
      },
      {
        title: 'Open Bank',
        img: './images/videoImg/OpenBank.png',
        video: './video/videoList/數位生活/OpenBank.mp4',
        time: '1:38'
      }
    ]
  },
  {
    mainTitle: '多元支付',
    list: [
      {
        title: 'Link Pay',
        img: './images/videoImg/LinkPay.png',
        video: './video/videoList/多元支付/LinkPay.mp4',
        time: '1:38'
      },
      {
        title: '快速辦卡',
        img: './images/videoImg/快速辦卡.png',
        video: './video/videoList/多元支付/快速辦卡.mp4',
        time: '1:00'
      }
    ]
  },
  {
    mainTitle: '智慧理財',
    list: [
      {
        title: '信貸線上申請',
        img: './images/videoImg/shintai.png',
        video: './video/videoList/智慧理財/信貸線上申請.mp4',
        time: '0:30'
      },
      {
        title: '證券線上開戶',
        img: './images/videoImg/證券線上開戶.png',
        video: './video/videoList/智慧理財/證券線上開戶.mp4',
        time: '0:32'
      },
      {
        title: '網路投保智多新',
        img: './images/videoImg/網路投保智多新.png',
        video: './video/videoList/智慧理財/網路投保智多新.mp4',
        time: '1:08'
      }
    ]
  },
  {
    mainTitle: '自動化設備 - ATM',
    list: [
      {
        title: '刷臉提款',
        img: './images/videoImg/刷臉提款.png',
        video: './video/videoList/自動化設備-ATM/刷臉提款.mp4',
        time: '0:36'
      },
      {
        title: '外幣ATM',
        img: './images/videoImg/外幣ATM.png',
        video: './video/videoList/自動化設備-ATM/外幣ATM.mp4',
        time: '1:03'
      }
    ]
  }
]
