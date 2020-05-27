/* 過場跳轉處理 */
const query = window.location.search
const url = window.location

console.log(url)

if (query.indexOf('introduce') > -1) {
  setTimeout(() => {
    window.location.href = `${url.protocol}//${url.host}/pages/introduce.html`
  }, 1500)
}
