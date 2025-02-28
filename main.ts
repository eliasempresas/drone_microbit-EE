enum RadioMessage {
    message1 = 49434,
    INICIAR = 120,
    BOTAO_A = 1598,
    BOTAO_A_B = 4412,
    DIREITA = 12197,
    ESQUERDA = 27293,
    DESLIGAR = 30426,
    BOTAO_B = 38770
}
radio.onReceivedMessage(RadioMessage.BOTAO_A, function () {
    pins.analogWritePin(AnalogPin.P0, 1)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1)
    pins.analogWritePin(AnalogPin.P3, 0)
})
radio.onReceivedMessage(RadioMessage.DIREITA, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P3, 0)
})
radio.onReceivedMessage(RadioMessage.INICIAR, function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.analogWritePin(AnalogPin.P3, 1023)
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
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1)
    pins.analogWritePin(AnalogPin.P3, 0)
})
radio.onReceivedMessage(RadioMessage.BOTAO_A_B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.analogWritePin(AnalogPin.P3, 1023)
})
radio.setGroup(55)
