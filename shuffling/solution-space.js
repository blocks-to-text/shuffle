// var snippet = "adfoi45{}//'`-++34##$%44dioADC let a = var"
// var charrppet = to_char_arr(snippet); 
// var embedded_snippet = embed_snippet(charrppet);

function embed_snippet(strppet) {                          
  var arrppet = to_char_arr(strppet);
                                                             
  var embedded = [];                  
  var is_quizable = determine_quizzability(arrppet[0]);      
  var fix_or_quiz;                          
  if (is_quizable) {
    fix_or_quiz = "quizzable";
  } else {
    fix_or_quiz = "fixed";
  };                                                          
  var next_entry = {type: fix_or_quiz, value: []};            

  for (var i = 0; i < arrppet.length; i++) {                   
    if (is_quizable !== determine_quizzability(arrppet[i])) {
      is_quizable = !is_quizable;                               
      fix_or_quiz = update_type(fix_or_quiz);                   
      embedded.push(next_entry);                                
      next_entry = {type: fix_or_quiz, value: []}; 
    };
    next_entry.value.push(arrppet[i]);              
                                                           
  };

  embedded.push(next_entry);

  // return {embedded:embedded, log:log};
  return embedded;

};

function debed_snippet(snippet) {
  var debedded = "";

  for (var i = 0; i < snippet.length; i++) {
    var this_chunk = snippet[i].value;
    var chunk_as_string = from_char_arr(this_chunk);
    debedded += chunk_as_string;
  };

  return debedded;
};

function determine_quizzability(char_code) {      var log = {};
  var res;    
  if (char_code === 36) { // $
    res = true;                                   log.path = '$';

  } else if (char_code === 95) { // _
    res = true;                                   log.path = '_';

  } else if (char_code === 183) { // the dot
    res = true;                                   log.path = 'the dot';

  } else if (48 <= char_code && char_code <= 57) { // 0-9     
    res = true;                                   log.path = '0-9';
  
  } else if (65 <= char_code && char_code <= 90) { // A-Z
    res = true;                                   log.path = 'A-Z';

  } else if (97 <= char_code && char_code <= 122) { // a-z
    res = true;                                   log.path = 'a-z';

  } else {
    res = false;                                  log.path = 'else';

  };

  // return {log:log, res: res};
  return res;
};

function update_type(f_o_q) {
  var classification;
  if (f_o_q === "fixed") {
    classification = "quizzable";
  } else if (f_o_q = "quizzable") {
    classification = "fixed";
  } else {
    throw new Error('arg must be "fixed" or "quizzable"');
  };
  return classification;
};

function to_char_arr(str) {
  var split_str = str.split('');

  var embeded_arg = [];
  for (var i = 0; i < split_str.length; i++) {
    embeded_arg.push(split_str[i].charCodeAt(0));
  };

  return embeded_arg;
};

function from_char_arr(arr) {
  var de_charred = [];
  for (var i = 0; i < arr.length; i++) {
    de_charred.push(String.fromCharCode(arr[i]));
  };

  var de_bedded = de_charred.join('');

  return de_bedded;
};

// will contain objects
// alternating, quizzable & fixed
/* [
  {type: quizzable, value: [#, #]},
  {type: fixed, value: [#, #]},
*/




/*
  String.fromCharCode(num);
  "_".charCodeAt() -> it's charcode
  "___".charCodeAt(1) -> the second
  String.fromCharCode("902".charCodeAt(1)); -> 0
*/
