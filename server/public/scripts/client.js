console.log('client.js sourced');

$(document).ready(onReady);

function onReady() {
  console.log('DOM ready');
  $('#addJokeButton').on('click', addJoke);
  getJokes();
}
function getJokes() {
  $.ajax({
    type: 'GET',
    url: '/jokes',
  }).then(function (response) {
    console.log(response);
    for (let joke of response) {
      $('#outputDiv').append(
        '<div><h4>' +
          joke.jokeQuestion +
          '</h4><p>' +
          joke.punchLine +
          '</p><p><i>' +
          joke.whoseJoke +
          '</i></p></div>'
      );
    }
  });
}

function addJoke() {
  let newJoke = {
    whoseJoke: $('#whoseJokeIn').val(),
    jokeQuestion: $('#questionIn').val(),
    punchLine: $('#punchlineIn').val(),
    
  
  };
console.log('joking', newJoke);

$.ajax({
  type: 'POST',
  url: '/addJokes',
  data: newJoke
}).then(function (response) {
  getJokes();
  console.log(response);
});
}