export default function setRem(baseWidth = 750) {
  const dpr = window.devicePixelRatio;
  const currentWidth = document.documentElement.clientWidth;
  let remSize = 0;
  let scale = 0;
  scale = currentWidth / baseWidth;
  remSize = baseWidth / 10;
  remSize = remSize * scale;
  document.documentElement.style.fontSize = remSize + 'px';
  document.documentElement.setAttribute('data-dpr', `${dpr}`);
}

// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}