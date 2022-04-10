const { Game } = require('./Game')
const { TaskBuilder } = require('./TaskBuilder')

const stdin = process.stdin;
stdin.resume();
stdin.setEncoding( 'utf8' );

const taskBuilder = new TaskBuilder()
const game = new Game(taskBuilder)
game.start()

stdin.on( 'data', (key) => {
    // ctrl-c ( end of text )
    if ( key === '\u0003' ) {
        process.exit();
    }
    game.nextStep()
});