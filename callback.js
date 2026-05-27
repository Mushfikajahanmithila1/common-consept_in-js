// callback function
// higher order function

function greeting(greetingHandler, name) {
  greetingHandler(name);
}

function greetingHandler(name) {
  console.log("Good Morning ", name);
}

function greetingHandler2(name) {
  console.log("Good Evening ", name);
}

greeting(greetingHandler, "John");
greeting(greetingHandler2, "Jane");
