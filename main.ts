input.onButtonPressed(Button.A, function () {
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("I'll NEVER Stop!")
})
input.onButtonPressed(Button.B, function () {
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
})
let item = 0
maqueenPlusV2.I2CInit()
maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
basic.forever(function () {
    music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.LoopingInBackground)
})
basic.forever(function () {
    serial.writeLine("" + (maqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14)))
})
basic.forever(function () {
    item = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P14,
    PingUnit.Centimeters
    )
    if (true) {
        basic.showNumber(10)
        basic.pause(100)
    }
})
