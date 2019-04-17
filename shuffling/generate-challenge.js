// arrppet -> array of charcodes
// probs -> number from 0 to 1
function generate_challenge(arrppet, probs) {
  var challenge = [];
  var next_entry = {};

  for (var i = 0; i < arrppet.length; i++) {
    if (arrppet[i].type === "quizzable") {
      var challengified = shuffle(arrppet[i].value, probs);
      next_entry = {type: "quizzable", value:challengified};
      challenge.push(next_entry);
    } else {
      var chunk_copy = JSON.parse(JSON.stringify(arrppet[i].value));
      next_entry = {type: "fixed", value: chunk_copy};
      challenge.push(next_entry);
    };
  };

  return challenge;
};

// https://blog.codinghorror.com/the-danger-of-naivete/
function shuffle(og_arr, probs) {
  var arr = JSON.parse(JSON.stringify(og_arr));

  if (probs === undefined) {
    probs = .2;
  };

  for (let i = arr.length - 1; i > 0; i--) {
    var next_rando = Math.random();
    if (next_rando < probs) {
      var n = Math.floor(Math.random() * arr.length);
      var temp = arr[i];
      arr[i] = arr[n];
      arr[n] = temp; 
    }
  }
  return arr;
};
