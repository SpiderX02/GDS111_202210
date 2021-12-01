var document = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var tracing = new Image()
tracing.src = "images/shapes.png"

tracing.onload = function () {
    ctx.drawImage(tracing, 0, 0, 800, 800)

    ctx.fillStyle = "rgba(255, 0, 0, 0.5)"
    ///draw rectangle
    ctx.fillRect(66, 80, 119, 541)

    ctx.beginPath()
    ctx.arc(421, 206, 86, 0 (2*Math.PI), false)
    ctx.lineTo(476, 141)
    ctx.closePath()
    ctx.fill()

    ctx.stokeStyle = "rgba(0,0,255,0.5)"

    ctx.moveTo(588,222)
    ctx.lineTo(702,68)
    ctx.stoke()

    ctx.fillStyle = "rgba(0, 0, 255, 0.5)"

    ctx.beginPath()
    ctx.moveTo()
    ctx.lineTo()
    ctx.lineTo(639)
    ctx.closePath()
    ctx.fill()
}