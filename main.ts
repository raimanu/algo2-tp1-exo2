input.onButtonPressed(Button.A, function () {
    if (x > 0 && x <= 4) {
        led.unplot(x, y)
        led.plot(x - 1, y)
        x = x - 1
    } else if (x == 0 && y == 0) {
        led.unplot(x, y)
        led.plot(x + 4, y)
        x = 4
    } else {
        led.unplot(x, y)
        led.plot(x + 4, y)
        x = 4
    }
})
input.onButtonPressed(Button.B, function () {
    if (x >= 0 && x <= 3) {
        led.unplot(x, y)
        led.plot(x + 1, y)
        x = x + 1
    } else if (x == 4 && y == 4) {
        led.unplot(x, y)
        led.plot(x * 0, y)
        x = x + 1
    } else {
        led.unplot(x, y)
        led.plot(x * 0, y)
        x = 0
    }
})
let y = 0
let x = 0
x = 0
y = 0
led.plot(0, 0)
basic.pause(1000)
basic.forever(function () {
    if (y == 4) {
        while (y > 0) {
            led.unplot(x, y)
            led.plot(x, y - 1)
            y = y - 1
            basic.pause(1000)
        }
    } else {
        while (y >= 0 && y <= 3) {
            led.unplot(x, y)
            led.plot(x, y + 1)
            y = y + 1
            basic.pause(1000)
        }
    }
})
basic.forever(function () {
	
})
