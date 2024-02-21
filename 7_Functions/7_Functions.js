// Q1
function greet() {
  console.log("Hello");
}
greet();
greet();

// Q2, Q3
function greetTwo(name) {
  if (typeof name !== "undefined") {
    console.log(`Hello ${name}`);
  }else{
    console.log("Hi there!");
  }
}
greetTwo("Monson");