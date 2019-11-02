function kitchen() {
  var breadKnife = 'I can slice breads!';
  console.log(breadKnife);
}

function bedroom() {
  console.log(breadKnife);
}

kitchen();   // Prints 'I can slice breads!'
bedroom();   // Woops! ReferenceError
