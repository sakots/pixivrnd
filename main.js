function swap(a, b) {
  var c = b;
  b = a;
  a = c;
}

function randomURL(minid, maxid) {
  if (minid < maxid) swap(minid, maxid);
  return 'https://www.pixiv.net/artworks/' + (Math.floor(Math.random() * (maxid + 1 - minid)) + minid);
}

// ==============以下スライダー設定===============

const minIdInput = document.getElementById('minID_range');
const maxIdInput = document.getElementById('maxID_range');
const minValueTarget = document.getElementById('current_minID_value');
const maxValueTarget = document.getElementById('current_maxID_value');

// 初期化
minValueTarget.innerHTML = minIdInput.value;
maxValueTarget.innerHTML = maxIdInput.value;

var rangeValue = function(source, target) {
  return function(evt) {
    target.innerHTML = source.value;
  }
}

// inputが何か動いたらそれに反応して値を書き換える
minIdInput.addEventListener('input', rangeValue(minIdInput, minValueTarget));
maxIdInput.addEventListener('input', rangeValue(maxIdInput, maxValueTarget));

// =============================================

function pixivrnd() {
  window.open(randomURL(Number(minIdInput.value), Number(maxIdInput.value)),'_blank');
}

function pixivrnd_10() {
  for (i = 0; i < 10; i++) {
    pixivrnd();
  }
}

function pixivrnd_bg() {
  window.open('index.html','_blank');
  window.open(randomURL(Number(minIdInput.value), Number(maxIdInput.value)),'_self');
}
