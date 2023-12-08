const dpTime = function () {
    const now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    let ampm = ''
    if (hours > 12) {
        hours -= 12
        ampm = '오후'
    } else {
        ampm = '오전'
    }
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    document.querySelector('#time').innerHTML = ampm + hours + ":" + minutes + ":" + seconds
}
setInterval(dpTime, 1000)  // 1초마다 함수 실행되도록 설정

