let Suma = 0
DFRobotMaqueenPlusV2.I2CInit()
soundExpression.hello.play()
basic.showIcon(IconNames.SmallHeart)
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.SmallHeart)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showIcon(IconNames.Skull)
    Suma = 0
    while (Suma <= 100) {
        DFRobotMaqueenPlusV2.setBrightness(Suma)
        DFRobotMaqueenPlusV2.setIndexColor(0, 0xff0000)
        DFRobotMaqueenPlusV2.setIndexColor(1, 0xff0000)
        DFRobotMaqueenPlusV2.setIndexColor(2, 0xff0000)
        DFRobotMaqueenPlusV2.setIndexColor(3, 0xff0000)
        Suma = Suma + 1
    }
    Suma = 100
    while (Suma >= 0) {
        DFRobotMaqueenPlusV2.setBrightness(Suma)
        DFRobotMaqueenPlusV2.setIndexColor(0, 0xff0000)
        DFRobotMaqueenPlusV2.setIndexColor(1, 0xff0000)
        DFRobotMaqueenPlusV2.setIndexColor(2, 0xff0000)
        DFRobotMaqueenPlusV2.setIndexColor(3, 0xff0000)
        Suma = Suma - 1
    }
})
