function getClock() {

  var date = new Date
  var hr = date.getHours()
  var min = date.getMinutes()
  var sec = date.getSeconds()
  var am_pm = date.getHours() >= 12 ? "PM" : "AM";
  hr = (hr % 12) || 12
  hr = updateTime(hr);
  min = updateTime(min);
  sec = updateTime(sec);

  var clock = document.getElementById('clock')
  clock.innerText = hr + ': ' + min + ': ' + sec + ': ' + am_pm
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }

}

var ahsan = setInterval(getClock, 1000)

function stopBtn() {
  clearInterval(ahsan)
}

var stopButton = document.getElementById('myStop')
stopButton.addEventListener('click', stopBtn)

function startbtn() {
  ahsan = setInterval(getClock, 1000)
}

var startButton = document.getElementById('myStart')
startButton.addEventListener('click', startbtn)











var seconds = 00;
var tens = 00;
var mnt = 00;
var getSeconds = document.getElementById('seconds')
var getTens = document.getElementById('tens')
var getMnt = document.getElementById('mnt')
var buttonStart = document.getElementById('buttonStart')
var buttonStop = document.getElementById('buttonStop')
var buttonReset = document.getElementById('buttonReset')
var clear;

buttonStart.addEventListener('click', () => {
  clear = setInterval(myFunc, 10)
})
buttonStop.addEventListener('click', () => {
  clearInterval(clear)
})
buttonReset.addEventListener('click', () => {
  clearInterval(clear)
  seconds = 0;
  tens = 0;
  mnt = 0;
  getSeconds.innerHTML = '00';
  getTens.innerHTML = '00';
  getMnt.innerHTML = '00';
})

function myFunc() {
  tens++;
  if (tens <= 9) {
    getTens.innerHTML = '0' + tens
  }
  if (tens >= 9) {
    getTens.innerHTML = tens
  }
  if (tens > 99) {
    seconds++
    getSeconds.innerHTML = '0' + seconds
    tens = 0
    getTens.innerHTML = '0' + 0
  }
  if (seconds > 9) {
    getSeconds.innerHTML = seconds
  }
  if (seconds > 60) {
    mnt++
    getMnt.innerHTML = '0' + mnt
    seconds = 0
    getSeconds.innerHTML = '0' + 0
  }
  if (mnt > 9) {
    getMnt.innerHTML = mnt
  }
}