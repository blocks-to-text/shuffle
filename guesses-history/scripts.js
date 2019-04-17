function init_modal(new_challenge) {

  var pre = document.createElement('pre');
  pre.className = "prettyprint prettyprinted";
  pre.innerHTML = PR.prettyPrintOne(snippet, 'js', true);
  pre.style.width = "75%";
  var the_answer = document.getElementById("the-answer");
  while (the_answer.firstChild) {
    the_answer.removeChild(the_answer.firstChild);
  };
  the_answer.appendChild(pre);

  var the_guesses = document.getElementById("the-guesses");
  while (the_guesses.firstChild) {
    the_guesses.removeChild(the_guesses.firstChild);
  };

  guesses = [];
};

function update_modal() {
  var the_guesses = document.getElementById("the-guesses");
  while (the_guesses.firstChild) {
    the_guesses.removeChild(the_guesses.firstChild);
  };

  for (var i = 0; i < guesses.length; i++) {

    var next_font = document.createElement("font");
    if (guesses[i].success) {
      next_font.innerHTML = "yup";
      next_font.style = "color: green;";
    } else {
      next_font.innerHTML = "nope";
      next_font.style = "color: red;";
    };
    var next_message = document.createElement("p");
    next_message.innerHTML = i + 1 + ": ";
    next_message.appendChild(next_font);

    var next_guess = guesses[i].guess;
    var pre = document.createElement('pre');
    pre.className = "prettyprint prettyprinted";
    pre.innerHTML = PR.prettyPrintOne(next_guess, 'js', true);
    pre.style.width = "75%";

    var next_div = document.createElement("div");
    next_div.className = "sortable-code";
    next_div.appendChild(next_message);
    next_div.appendChild(pre);

    the_guesses.appendChild(next_div);
  };
};


// could be done smoother now with access to parsons_instance?
function save_guess() {

  var guess = editor.getValue();

  var is_correct = snippet === guess;

  guesses.push({guess: guess, success: is_correct});

};