console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click')

}
function addJoke() {
  console.log('adding joke');
  let jokes = [];