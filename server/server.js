console.log('look ma, I\'m a server');
// Import Express
const express = require('express');

// Create our express app
const app = express();

let games = [
    {
        name: 'Halo Infinite',
        releaseDate: 2022,
        funLevel: 9.2
    }
]

//Share my client side files with the public(anyone that wants them)
app.use(express.static('server/public'));

app.get('/games', (req, res) => {
    //This code is run when someone asks to get games
    //i.e. goes to http://localchost:3000/games
    console.log('in/games');
    // Send the games back to the client
    res.send(games);

});

// Listen for internet requests
app.listen(4000, () => {
console.log('I\'m listening.....');
});


