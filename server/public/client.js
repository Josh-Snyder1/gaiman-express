$(document).ready(onReady);

function onReady() {
    console.log('so ready! 🎈');

    $('body').append(`
        <h2>Hello, Gaiman</h2>
        <button id="clickMeBtn">Click Me!</button>
    
    `);

}//end onReady

console.log('in client.js');