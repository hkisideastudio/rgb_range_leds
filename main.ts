input.onButtonPressed(Button.A, function () {
    seg1.showColor(neopixel.colors(NeoPixelColors.Red))
    seg2.showColor(neopixel.colors(NeoPixelColors.White))
    seg3.showColor(neopixel.colors(NeoPixelColors.Blue))
    seg1.rotate(1)
    strip.show()
})
input.onButtonPressed(Button.AB, function () {
    strip.showRainbow(1, 360)
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
let seg3: neopixel.Strip = null
let seg2: neopixel.Strip = null
let seg1: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
seg1 = strip.range(0, 10)
seg2 = strip.range(10, 19)
seg3 = strip.range(20, 29)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
	
})
