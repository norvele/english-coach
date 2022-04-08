const { Game } = require('./game')

const stdin = process.stdin;
stdin.resume();
stdin.setEncoding( 'utf8' );

const game = new Game()
game.start()

stdin.on( 'data', (key) => {
    // ctrl-c ( end of text )
    if ( key === '\u0003' ) {
        process.exit();
    }
    game.nextStep()
});