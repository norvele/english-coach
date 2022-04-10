const { Game } = require('./Game')
const { TaskBuilder } = require('./TaskBuilder')
const { View } = require('./View')
const { English } = require('./languages/English')

const stdin = process.stdin;
stdin.resume();
stdin.setEncoding( 'utf8' );

const view = new View()
const taskBuilder = new TaskBuilder()
const english = new English()
const game = new Game(view, taskBuilder, english)
game.start()

stdin.on( 'data', (key) => {
    // ctrl-c ( end of text )
    if ( key === '\u0003' ) {
        process.exit();
    }
    game.nextStep()
});