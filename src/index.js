function generatePattern(event) {
  event.preventDefault();

  new Typewriter("#pattern", {
    strings: "Here's a crochet pattern for you:",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let patternFormElement = document.querySelector("#pattern-generator-form");
patternFormElement.addEventListener("submit", generatePattern);