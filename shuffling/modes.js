function spot_mode() {
  mode = "spot";

  snippet = editor.getValue();
  var snippet_embed = embed_snippet(snippet);
  var challenge_embed = generate_challenge(snippet_embed, 50); 
  var challenge = debed_snippet(challenge_embed);

  spot_mode_view();

  init_modal(snippet);

}

function spot_mode_view() {
  var controls = document.getElementById("controls");
  while(controls.firstChild){
    controls.removeChild(controls.firstChild);
  };

  var errors = document.createElement("p");
  errors.id = "errors";

  var difficulty = document.createElement("a");
  difficulty.innerHTML = "difficulty:";
  var slider = document.createElement("input");
  slider.id = "difficulty";
  slider.type = "range";
  slider.min = "0";
  slider.max = "100";
  slider.value = "50";
  var spotify_button = document.createElement("button");
  spotify_button.onclick = spotify;
  spotify_button.innerHTML = "shuffle";
  var check_it_button = document.createElement("button");
  check_it_button.onclick = check_it;
  check_it_button.innerHTML = "check your guess";
  check_it_button.onclick = function(){
                              save_guess();
                              check_it();
                            };

  var modal_link = document.createElement("a");
  modal_link.style = "text-decoration: none; color: black;";
  modal_link.href = "#guesses-history";
  modal_link.setAttribute("data-modal-open", "");
  modal_link.innerHTML = "Review Guesses";
  var history_button = document.createElement("button");
  history_button.onclick = update_modal;
  history_button.appendChild(modal_link);

  var spotting = document.createElement("div");
  spotting.appendChild(difficulty);
  spotting.appendChild(slider);
  spotting.appendChild(spotify_button);
  spotting.appendChild(document.createElement("br"));
  spotting.appendChild(check_it_button);
  spotting.appendChild(history_button);

  var goto_change_mode = document.createElement("button");
  goto_change_mode.innerHTML = "change snippet";
  goto_change_mode.onclick = change_mode;

  controls.appendChild(errors);
  controls.appendChild(spotting);
  controls.appendChild(goto_change_mode);
}

function change_mode() {
  mode = "change";

  editor.setValue(snippet);

  var controls = document.getElementById("controls");
  while(controls.firstChild){
    controls.removeChild(controls.firstChild);
  };

  var spot_snippet = document.createElement("button");
  spot_snippet.innerHTML = "study this snippet";
  spot_snippet.onclick = spot_mode;

  controls.appendChild(document.createElement("br"));
  controls.appendChild(spot_snippet);
  controls.appendChild(document.createElement("br"));
  controls.appendChild(document.createElement("br"));
  controls.appendChild(document.createElement("br"));

}



