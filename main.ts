radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        basic.setLedColor(0xffff00)
    }
    if (receivedNumber == 0) {
        basic.turnRgbLedOff()
    }
})
radio.setGroup(74)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . . . .
            . . . . #
            . # . # .
            . . # . .
            . . . . .
            `)
    } else {
        radio.sendNumber(0)
        basic.showLeds(`
            . # # # .
            # . # . #
            # . # . #
            # . . . #
            . # # # .
            `)
    }
})
