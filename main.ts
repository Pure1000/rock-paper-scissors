datalogger.onLogFull(function () {
    datalogger.mirrorToSerial(true)
    basic.showString("Data llena")
    basic.pause(1e+178)
})
input.onButtonPressed(Button.A, function () {
    datalogger.log(
    datalogger.createCV("shake", 0),
    datalogger.createCV("rock", 0),
    datalogger.createCV("paper", 0),
    datalogger.createCV("scissors", 0),
    datalogger.createCV("OnStart", 0),
    datalogger.createCV("YouLost", 0),
    datalogger.createCV("YouWin", 1)
    )
})
input.onButtonPressed(Button.B, function () {
    datalogger.log(
    datalogger.createCV("rock", 0),
    datalogger.createCV("OnStart", 0),
    datalogger.createCV("shake", 0),
    datalogger.createCV("paper", 0),
    datalogger.createCV("scissors", 0),
    datalogger.createCV("YouLost", 1),
    datalogger.createCV("YouWin", 0)
    )
})
input.onGesture(Gesture.Shake, function () {
    datalogger.log(
    datalogger.createCV("shake", 1),
    datalogger.createCV("rock", 0),
    datalogger.createCV("paper", 0),
    datalogger.createCV("scissors", 0),
    datalogger.createCV("OnStart", 0),
    datalogger.createCV("YouLost", 0),
    datalogger.createCV("YouWin", 0)
    )
    Hand = randint(1, 3)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Punchline), music.PlaybackMode.InBackground)
    if (Hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
        datalogger.log(
        datalogger.createCV("rock", 1),
        datalogger.createCV("OnStart", 0),
        datalogger.createCV("shake", 0),
        datalogger.createCV("paper", 0),
        datalogger.createCV("scissors", 0),
        datalogger.createCV("YouLost", 0),
        datalogger.createCV("YouWin", 0)
        )
    } else if (Hand == 2) {
        basic.showIcon(IconNames.Square)
        datalogger.log(
        datalogger.createCV("rock", 0),
        datalogger.createCV("OnStart", 0),
        datalogger.createCV("shake", 0),
        datalogger.createCV("paper", 0),
        datalogger.createCV("scissors", 0),
        datalogger.createCV("YouLost", 0),
        datalogger.createCV("YouWin", 0)
        )
    } else {
        basic.showIcon(IconNames.Scissors)
        datalogger.log(
        datalogger.createCV("rock", 0),
        datalogger.createCV("OnStart", 0),
        datalogger.createCV("shake", 0),
        datalogger.createCV("paper", 0),
        datalogger.createCV("scissors", 1),
        datalogger.createCV("YouLost", 0),
        datalogger.createCV("YouWin", 0)
        )
    }
})
let Hand = 0
datalogger.log(
datalogger.createCV("shake", 0),
datalogger.createCV("rock", 0),
datalogger.createCV("paper", 0),
datalogger.createCV("scissors", 0),
datalogger.createCV("OnStart", 0),
datalogger.createCV("YouLost", 0),
datalogger.createCV("YouWin", 0)
)
datalogger.log(
datalogger.createCV("shake", 0),
datalogger.createCV("rock", 0),
datalogger.createCV("paper", 0),
datalogger.createCV("scissors", 0),
datalogger.createCV("OnStart", 1),
datalogger.createCV("YouLost", 0),
datalogger.createCV("YouWin", 0)
)
