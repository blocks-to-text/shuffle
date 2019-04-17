function compare(correct, attempt) {
  if (correct.length !== attempt.length) {
    return new Error("you changed more than just variables, values, or key words");      
  };

  var comparison = []; 
  var next_entry = {}; // a comparison: {type: boolean, value: boolean}
  var chal_val_str
  var att_val_str

  for (var i = 0; i < correct.length; i++) {

    next_entry.type = correct[i].type;

    if (next_entry.type === "fixed") {
      chal_val_str = JSON.stringify(correct[i].value);
      att_val_str = JSON.stringify(attempt[i].value);
      if (att_val_str !== chal_val_str) {
        return new Error("you changed more than just variables, values, or key words");      
      } else {
        next_entry.value = JSON.parse(JSON.stringify(correct[i].value));
      };

    } else {
      chal_val_str = JSON.stringify(correct[i].value);
      att_val_str = JSON.stringify(attempt[i].value);
      if (att_val_str !== chal_val_str) {
        next_entry.value = false;
      } else {
        next_entry.value = true;
      };

    };

    comparison.push(next_entry);
    next_entry = {};

  };

  return comparison;
};

function gen_fb(correct, attempt) {
  var fb = [];

  var comparison = compare(correct, attempt);

  if (comparison instanceof Error) {
    return comparison;
    
  } else {
    for (var i = 0; i < comparison.length; i++) {
      if (comparison[i].value) {
        fb.push(JSON.parse(JSON.stringify(attempt[i])));
      } else {
        var new_value = [];
        for (var j = 0; j < correct[i].value.length; j++) {
          new_value.push(183);
        };
        var next_entry = {
          type: attempt[i].type,
          value: new_value
        };
        fb.push(next_entry);
      };
    };
  };

  return fb;
};
