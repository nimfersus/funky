radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        basic.setLedColor(0xffff00)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . . . .
        . . . . #
        . # . # .
        . . # . .
        . . . . .
        `)
})
radio.setGroup(74)
basic.forever(function () {
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.turnRgbLedOff()
})
