function spotify() {
  var difficulty = document.getElementById("difficulty").value / 100;
  var snippet_embedded = embed_snippet(snippet);
  challenge_embedded = generate_challenge(snippet_embedded, difficulty);
  challenge = debed_snippet(challenge_embedded);

  editor.setValue(challenge);
}

function check_it() {
  var errors = document.getElementById("errors");
  errors.innerHTML = "";

  var attempt = editor.getValue();
  var snippet_embedded = embed_snippet(snippet);
  var attempt_embed = embed_snippet(attempt);
  var feedback_embed = gen_fb(snippet_embedded, attempt_embed);

  if (feedback_embed instanceof Error) {
    errors.innerHTML = feedback_embed.message;
  } else {
    var feedback = debed_snippet(feedback_embed);
    editor.setValue(feedback);
  };
};
