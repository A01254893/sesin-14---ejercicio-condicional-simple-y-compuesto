let n1 = 0
let n2 = 0
let n3 = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    n1 = randint(3, 9)
    n2 = randint(3, 9)
    n3 = randint(3, 9)
    if (n1 != n2 && (n2 != n3 && n1 != n3)) {
        basic.showIcon(IconNames.Yes)
        basic.showNumber(n1)
        basic.showNumber(n2)
    } else {
        basic.showIcon(IconNames.No)
        n3 = 0
        n3 = 0
        n3 = 0
    }
})
