

function onBallClick(elBall) {
    var currWidthBall = elBall.offsetWidth
    var currHeightBall = elBall.offsetHeight

    var newWidthBall = currWidthBall + 50
    var newHeightBall = currHeightBall + 50

    elBall.style.width = newWidthBall + 'px'
    elBall.style.height = newHeightBall + 'px'

    console.log(newHeightBall)

    if (newHeightBall > 400 && newWidthBall > 400) {
        elBall.style.width = 100 + 'px'
        elBall.style.height = 100 + 'px'

    }


    elBall.innerText = newHeightBall

}