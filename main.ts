function goBackward () {
    servos.P0.run(speed)
}
function goForward () {
    servos.P0.run(speed)
}
input.onButtonPressed(Button.A, function () {
    turn_left()
})
function callStopTurn () {
    servos.P0.stop()
    servos.P1.stop()
}
function turn_left () {
    servos.P1.setAngle(179)
}
function init () {
    servos.P0.run(1)
}
function callStop () {
    servos.P0.stop()
    servos.P1.stop()
}
function turn () {
    servos.P1.setAngle(angle)
}
input.onButtonPressed(Button.AB, function () {
    beep()
    callStop()
})
input.onButtonPressed(Button.B, function () {
    turn_right()
})
radio.onReceivedValue(function (name, value) {
    if (name == "FB") {
        if (value >= 550) {
            speed = value - 550
            goForward()
        }
        if (value <= 450) {
            speed = value - 450
            goBackward()
        }
        if (value == 0) {
            callStop()
        }
    }
    if (name == "LR") {
        angle = (value - 124) / 777 * 180
        turn()
    }
})
function turn_right () {
    servos.P1.setAngle(1)
}
function beep () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
let angle = 0
let speed = 0
radio.setGroup(1)
servos.P1.setRange(0, 180)
servos.P1.setAngle(90)
led.setBrightness(100)
init()
servos.P0.stop()
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
