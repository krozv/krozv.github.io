const clock = document.querySelector("h2#clock");

// 시계 정보 업데이트
function ClockUpdate(){   
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // console.log(hours, minutes);
    return [hours, minutes, seconds];
}

// 시계 정보 출력
function minClock(){
    // console.log(ClockUpdate()[0]);
    clock.innerText = `${ClockUpdate()[0]}:${ClockUpdate()[1]}`;
    // console.log("minClock작동");
}

// 초 포함 시계 정보 출력
function secClock(){
    // ClockUpdate();
    clock.innerText = `${ClockUpdate()[0]}:${ClockUpdate()[1]}:${ClockUpdate()[2]}`;
    // console.log("secClock작동");
}

// MouseOver event 감지 및 secClock 함수 작동
function MouseOver(event){
    clearInterval(reClock);
    // ClockUpdate();
    secClock();
    reClock = setInterval(secClock,1000);
    // console.log("MouseOver작동");
}

// MouseOut event 감지 및 minClock 함수 작동
function MouseOut(event){
    clearInterval(reClock);
    minClock();
    reClock = setInterval(minClock, 1000)
    // console.log("MouseOut작동");
}

ClockUpdate();
minClock();
reClock = setInterval(minClock, 1000); // 시계 정보 출력

clock.addEventListener("mouseover", MouseOver)
clock.addEventListener("mouseout", MouseOut)
