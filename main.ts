namespace SpriteKind {
    export const Button = SpriteKind.create()
    export const Virus = SpriteKind.create()
    export const Text = SpriteKind.create()
    export const StatusBar = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Mouse.overlapsWith(Button2)) {
        music_played = game.askForNumber("What number music do you want to play (in number 1 to 9)", 1)
        if (music_played == 1) {
            music.playMelody("C5 B A G F E D C ", 120)
        }
        if (music_played == 2) {
            music.playMelody("C D E F G A B C5 ", 120)
        }
        if (music_played == 3) {
            music.playMelody("E B C5 A B G A F ", 120)
        }
        if (music_played == 4) {
            music.playMelody("A F E F D G E F ", 120)
        }
        if (music_played == 5) {
            music.playMelody("C5 A B G A F G E ", 120)
        }
        if (music_played == 6) {
            music.playMelody("G B A G C5 B A B ", 120)
        }
        if (music_played == 7) {
            music.playMelody("B A G A G F A C5 ", 120)
        }
        if (music_played == 8) {
            music.playMelody("G F G A - F E D ", 120)
        }
        if (music_played == 9) {
            music.playMelody("E D G F B A C5 B ", 120)
        }
        if (music_played == 0) {
            music.playMelody("C5 G B A F A C5 B ", 120)
        }
    }
    if (Mouse.overlapsWith(Button1)) {
        time = game.askForNumber("How much time passes before your timer rings?", 10)
        time_for = game.askForString("Timer for what? enter nothing to cancel", 24)
        if (!(time_for == "")) {
            timer.after(time, function () {
                music.playMelody("G A B C5 B A G G ", 400)
                music.playMelody("G A B C5 B A G G ", 400)
                Button2.sayText("Timer " + time_for + " Has ended!", 5000, false)
            })
        }
    }
    if (Mouse.overlapsWith(Button3)) {
        for (let index = 0; index < 50; index++) {
            Virus_sprite = sprites.create(assets.image`Virus`, SpriteKind.Virus)
            Virus_sprite.setPosition(randint(0, 160), randint(0, 120))
            pause(100)
        }
        sprites.destroyAllSpritesOfKind(SpriteKind.Virus)
        sprites.destroyAllSpritesOfKind(SpriteKind.Button)
        Mouse.destroy()
        scene.setBackgroundImage(assets.image`RSOD`)
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
    }
    if (Mouse.overlapsWith(Button4)) {
        story.showPlayerChoices("Write new document (if you do this on a document that has data it overwrites it)", "Cancel", "Open document")
        if (story.checkLastAnswer("Write new document (if you do this on a document that has data it overwrites it)")) {
            Document1text = game.askForString("Your document will contain...", 24)
            doc_text_to_add_to_doc = game.askForNumber("What document do you want to add this text to?", 1)
            if (doc_text_to_add_to_doc == 1) {
                blockSettings.writeString("Doc1text", Document1text)
            }
            if (doc_text_to_add_to_doc == 2) {
                blockSettings.writeString("Doc1text", Document1text)
            }
        }
        if (story.checkLastAnswer("Remove document")) {
            Remove_document = game.askForNumber("What document do you want to remove", 1)
            if (Remove_document == 1) {
                blockSettings.remove("Doc1text")
            }
            if (Remove_document == 2) {
                blockSettings.remove("Doc2text")
            }
            if (Remove_document == 3) {
                blockSettings.remove("Doc3text")
            }
            if (Remove_document == 4) {
                blockSettings.remove("Doc4text")
            }
            if (Remove_document == 5) {
                blockSettings.remove("Doc5text")
            }
            if (Remove_document == 6) {
                blockSettings.remove("Doc6text")
            }
            if (Remove_document == 7) {
                blockSettings.remove("Doc7text")
            }
            if (Remove_document == 8) {
                blockSettings.remove("Doc8text")
            }
            if (Remove_document == 9) {
                blockSettings.remove("Doc9text")
            }
        }
        if (story.checkLastAnswer("Open document")) {
            Open_document = game.askForNumber("What document do you want to open?", 1)
            if (blockSettings.exists("Doc" + Open_document + "text")) {
                story.printText(blockSettings.readString("Doc" + Open_document + "text"), 60, 40)
            } else {
                story.printText("Error doc does not have data!", 60, 40)
            }
        }
    }
    if (Mouse.overlapsWith(Button5)) {
        game.showLongText("Help manual: STEP 1: Using the math app: When you are using the math app move you mouse too the math button and press B. Then use up and down to select your math type then type the two numbers to calculate. STEP 2: Using the Clock app: Move your mouse to the clock app and press B. then select when you timer ring (in milliseconds) the type in your timer name then when the time is up the timer will ring making a noise and saying it is ready. STEP 3: Using the music app: Move your mouse to the music app and press B. then type in (from 0 to 9) your music disk and when you enter it in it will play. STEP 4: Using the documents app: Move your mouse to the document's app and press B. the to write a document select the write a document option then write in what you want it to contain then save it in a slot. then if you want to open it select open a document then select the slot you saved it in. STEP 5: How to use the virus's app: don't open or it will destroy your system", DialogLayout.Full)
    }
    if (Mouse.overlapsWith(Button6)) {
        story.showPlayerChoices(". + .", ". - .", ". * .", ". / .")
        if (story.checkLastAnswer(". + .")) {
            _1 = game.askForNumber("enter number 1 to calculate")
            _2 = game.askForNumber("enter number 2 to calculate")
            answer_to_math_problem = _1 + _2
            story.printText("The answer is " + answer_to_math_problem, 60, 10)
        }
        if (story.checkLastAnswer(". - .")) {
            _1 = game.askForNumber("enter number 1 to calculate")
            _2 = game.askForNumber("enter number 2 to calculate")
            answer_to_math_problem = _1 - _2
            story.printText("The answer is " + answer_to_math_problem, 60, 10)
        }
        if (story.checkLastAnswer(". * .")) {
            _1 = game.askForNumber("enter number 1 to calculate")
            _2 = game.askForNumber("enter number 2 to calculate")
            answer_to_math_problem = _1 * _2
            story.printText("The answer is " + answer_to_math_problem, 60, 10)
        }
        if (story.checkLastAnswer(". / .")) {
            _1 = game.askForNumber("enter number 1 to calculate")
            _2 = game.askForNumber("enter number 2 to calculate")
            answer_to_math_problem = _1 / _2
            story.printText("The answer is " + answer_to_math_problem, 60, 10)
        }
    }
    if (Mouse.overlapsWith(Button7)) {
        story.printText("Here's a joke for you! " + Jokes[randint(1, 23)], 60, 10, 8, 1, story.TextSpeed.Slow)
    }
})
function clear_disk () {
    blockSettings.clear()
}
function Write_down_jokes_list () {
    Jokes = [
    "Whats the best way to carve wood?  Whittle by whittle.",
    "What do you call Batman when he skips church? Chistian Bale!",
    "What does a clock do when its hungry?  It goes back four seconds!",
    "Why cant Irishmen ever be attorneys?  They can never make it past the bar!",
    "Why did the cowboy buy a weiner dog?  To get along little doggy!",
    "What do rappers use in their laundry?  Bleeee-otch!",
    "What did the Leper tell the prostitute?  Keep the Tip!",
    "What do you call a cow with no legs?  Ground beef",
    "How did the frog die?  He Kermit suicide!",
    "You hear the one about the three holes in the ground filled with water? No?  Well, well, well....",
    "What is a zebra?  26 sizes larger than an \"A\" bra.",
    "A ham sandwich walks into a bar and orders a beer.  Bartender says, Sorry we dont serve food here.",
    "What do you call cheese that isnt yours?  Nacho Cheese.",
    "I broke my arm in two places, you know what the doctor said?  Stay out of those places!",
    "What is the best time to go to the dentist?  Tooth Hurty!",
    "What time did the man go to the dentist?  Tooth hurt-y.",
    "A friend of mine died recently after drinking a gallon of varnish.  It was a horrible end, but a lovely finish.",
    "What do you call a belt made out of watches?  A waist of time!",
    "What did the pony say when he sang with a sore throat?  Sorry, Im just a little hoarse!",
    "Whats the difference between ignorance and Apathy?  I dont know and I dont care.",
    "How can you tell if a groom is Polish?  He would be the one with the clean bowling shirt.",
    "Whats the difference between bird flu and swine flu?  If you have bird flu, you need tweetment. If you have swine flu, you need oink-ment.",
    "What did the girl melon say to the boy melon when he proposed to her?  Were too young... we cantaloupe!",
    "What did Kim Jong Un say when his father died?  His korea is over!"
    ]
}
sprites.onCreated(SpriteKind.Button, function (sprite) {
    sprite.startEffect(effects.coolRadial, 500)
})
controller.combos.attachCombo("A+B+u", function () {
    clear_disk()
})
let Jokes: string[] = []
let answer_to_math_problem = 0
let _2 = 0
let _1 = 0
let Open_document = 0
let Remove_document = 0
let doc_text_to_add_to_doc = 0
let Document1text = ""
let Virus_sprite: Sprite = null
let time_for = ""
let time = 0
let music_played = 0
let Mouse: Sprite = null
let Button7: Sprite = null
let Button6: Sprite = null
let Button5: Sprite = null
let Button4: Sprite = null
let Button3: Sprite = null
let Button2: Sprite = null
let Button1: Sprite = null
let mouse_type = 0
let Name = ""
pause(2000)
music.jumpUp.play()
scene.setBackgroundImage(assets.image`Intro`)
pause(2000)
scene.setBackgroundImage(assets.image`BG image`)
pause(2000)
let Loading = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
Loading,
assets.animation`Loading wheel`,
50,
true
)
pause(5000)
Loading.destroy(effects.coolRadial, 1000)
if (!(blockSettings.exists("USERNAME"))) {
    story.printText("Hello welcome to master OS this is our setup screen enter in the following information", 60, 10)
    Name = game.askForString("Name your OS")
} else {
    story.printText("Welcome Back " + blockSettings.readString("USERNAME") + "!", 60, 40)
}
if (blockSettings.exists("Mouse type")) {
    mouse_type = blockSettings.readNumber("Mouse type")
} else {
    story.showPlayerChoices("Black cursor", "White cursor")
    if (story.checkLastAnswer("Black cursor")) {
        mouse_type = 2
    }
    if (story.checkLastAnswer("White cursor")) {
        mouse_type = 1
    }
    story.printText("Thank you, the information is saved press help for more info on how this OS will work", 60, 10)
    blockSettings.writeString("USERNAME", Name)
    blockSettings.writeNumber("Mouse type", mouse_type)
}
Loading = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
Loading,
assets.animation`Loading wheel`,
50,
true
)
pause(5000)
Loading.destroy(effects.coolRadial, 1000)
scene.setBackgroundImage(assets.image`BG image`)
Button1 = sprites.create(assets.image`Clock`, SpriteKind.Button)
Button2 = sprites.create(assets.image`music`, SpriteKind.Button)
Button3 = sprites.create(assets.image`Viruses`, SpriteKind.Button)
Button4 = sprites.create(assets.image`Documents`, SpriteKind.Button)
Button5 = sprites.create(assets.image`Help`, SpriteKind.Button)
Button6 = sprites.create(assets.image`Math`, SpriteKind.Button)
Button7 = sprites.create(assets.image`Jokes`, SpriteKind.Button)
let SUN = sprites.create(assets.image`SUN`, SpriteKind.Player)
Button1.setPosition(142, 101)
Button2.setPosition(74, 101)
Button3.setPosition(36, 101)
Button4.setPosition(108, 101)
Button5.setPosition(143, 11)
Button6.setPosition(149, 43)
Button7.setPosition(146, 71)
SUN.setPosition(22, 26)
SUN.startEffect(effects.warmRadial)
Mouse = sprites.create(assets.image`Mouse2`, SpriteKind.Player)
Mouse.setStayInScreen(true)
if (mouse_type == 2) {
    Mouse.setImage(assets.image`Mouse2`)
}
if (mouse_type == 1) {
    Mouse.setImage(assets.image`Mouse0`)
}
controller.moveSprite(Mouse)
Write_down_jokes_list()
