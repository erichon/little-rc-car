function goBackward () {
    servos.P0.run(10)
}
function goForward () {
    servos.P0.run(-10)
}
input.onButtonPressed(Button.A, function () {
    goForward()
})
function turn_left () {
    servos.P1.setAngle(179)
}
function init () {
    servos.P0.run(1)
}
input.onButtonPressed(Button.AB, function () {
    servos.P0.stop()
})
input.onButtonPressed(Button.B, function () {
    goBackward()
})
function turn_right () {
    servos.P1.setAngle(1)
}
servos.P1.setPulse(1500)
servos.P1.setRange(0, 180)
servos.P1.setStopOnNeutral(true)
servos.P0.setPulse(1500)
init()
servos.P0.stop()
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
