
const AnalogClock = $container => {

  // 시계 돔 생성
  const hourDOM = CreateDom('div', ['hand', 'hour']);
  const minuteDOM = CreateDom('div', ['hand', 'minute']);
  const secondDOM = CreateDom('div', ['hand', 'second']);

  //현재 시간 가져오기
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  //초침 분침 시침 그리기
  $container.appendChild(hourDOM);
  $container.appendChild(minuteDOM);
  $container.appendChild(secondDOM);

  rotate(hour, minute, second);

  // 현재 시간에 맞게 초분시침 배치
  function rotate(hour, minute, second) {
    hourDOM.style.cssText = "--deg : " + ((360 / 12) * (hour % 12) + (minute * 0.5));
    minuteDOM.style.cssText = "--deg : " + (360 / 60) * (minute % 60);
    secondDOM.style.cssText = "--deg : " + (360 / 60) * (second % 60);
  }

  //setInterval()로 1초마다 시간 가져와
  setInterval(function () {

    today = new Date();
    hour = today.getHours();
    minute = today.getMinutes();
    second = today.getSeconds();

    rotate(hour, minute, second);

  }, 1000);

  //<div class="time time1">... 넣기
  let time = Array();

  for (let i = 0; i < 12; i++) {
    time[i] = CreateDom('div', ['time', 'time' + (i + 1)]);
    time[i].textContent = "|";

    $container.appendChild(time[i]);
  }


};

// CreateDom() : 클래스 이름 추가해주기
function CreateDom(domType, name) {
  const dom = document.createElement(domType);
  const classArray = name;

  for (let i = 0; i < classArray.length; i++) {
    dom.classList.add(classArray[i]);
  }

  return dom;
}


export default AnalogClock;