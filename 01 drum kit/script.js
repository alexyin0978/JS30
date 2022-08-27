function playSound(e){
  //e -> e.keyCode

  //根據keyCode抓到相對應audio & div tag
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  //don't trigger playSound if keydown is not one of we want
  if(!audio) return;

  //每次keydown都將音樂重置
  audio.currentTime = 0;

  //播放audio
  audio.play();

  //新增class到key
  key.classList.add('playing');
}

function removePlayingStyle(e, key) {
  
  //e會一次抓到border、boxshadow、transform的變化
  //我們只需要抓到一次就夠了, 就選擇trnasform
  if(e.propertyName !== 'transform') return; //其他e不做變化

  //移除'playing'
  this.classList.remove('playing')
}

//移除'playing' style, 當transitionend的時候
const keys = document.querySelectorAll('.key'); //return a node lists
keys.forEach(key => key.addEventListener('transitionend', removePlayingStyle))

window.addEventListener('keydown', playSound);
