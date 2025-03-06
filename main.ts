enum RadioMessage {
    INICIAR = 120,
    BOTAO_A = 1598,
    BOTAO_A_B = 4412,
    DIREITA = 12197,
    ESQUERDA = 27293,
    DESLIGAR = 30426,
    BOTAO_B = 38770,
    message1 = 49434
}
radio.onReceivedMessage(RadioMessage.BOTAO_A, function () {
    pins.analogWritePin(AnalogPin.P0, 1)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1)
    pins.analogWritePin(AnalogPin.P3, 0)
})
radio.onReceivedMessage(RadioMessage.DIREITA, function () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1)
    pins.analogWritePin(AnalogPin.P3, 0)
})
radio.onReceivedMessage(RadioMessage.INICIAR, function () {
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P0, 1)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 1)
        pins.analogWritePin(AnalogPin.P3, 0)
    }
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1)
    pins.analogWritePin(AnalogPin.P3, 0)
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P0, 1)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 1)
        pins.analogWritePin(AnalogPin.P3, 0)
    }
    pins.analogWritePin(AnalogPin.P0, 1)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P3, 0)
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P0, 1)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 1)
        pins.analogWritePin(AnalogPin.P3, 0)
    }
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P0, 1)
        pins.analogWritePin(AnalogPin.P1, 1)
        pins.analogWritePin(AnalogPin.P2, 1)
        pins.analogWritePin(AnalogPin.P3, 1)
    }
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1)
    pins.analogWritePin(AnalogPin.P3, 0)
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P0, 1)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 1)
        pins.analogWritePin(AnalogPin.P3, 0)
    }
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P0, 1)
        pins.analogWritePin(AnalogPin.P1, 1)
        pins.analogWritePin(AnalogPin.P2, 1)
        pins.analogWritePin(AnalogPin.P3, 1)
    }
    for (let index = 0; index < 2; index++) {
        pins.analogWritePin(AnalogPin.P0, 1)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P3, 0)
    }
})
radio.onReceivedMessage(RadioMessage.BOTAO_B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 1)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P3, 1)
})
radio.onReceivedMessage(RadioMessage.DESLIGAR, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P3, 0)
})
radio.onReceivedMessage(RadioMessage.ESQUERDA, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P3, 0)
})
radio.onReceivedMessage(RadioMessage.BOTAO_A_B, function () {
    for (let index = 0; index < 5; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 1)
        pins.analogWritePin(AnalogPin.P3, 0)
        continue;
    }
})
radio.setGroup(55)
