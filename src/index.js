function displayPattern(response) {
  new Typewriter("#pattern", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePattern(event) {
  event.preventDefault();

  let inputElement = document.querySelector("#user-instructions");

  let apiKey = "t39a377fcb5bac04bc0ecf418e394foa";
  let prompt = `User instructions: Generate a crochet pattern for a ${inputElement.value}`;
  let context = "You are an AI crochet pattern generator. Your mission is to generate a crochet pattern. When the user describes what they want ro make, provide a simple, beginner-friendly crochet pattern using standard abbreviations like (ch, sc, dc, etc.), format your answer neatly. The pattern should list using a bullet format of <li> multiple yarn weight and hook size options suitable for the item, suggested materials, and step-by-step instructions, and list the rounds in number format using <li>. Make sure to follow the user instructions, and that the pattern is clear, organized, and easy to follow."
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let patternElement = document.querySelector("#pattern");
  patternElement.classList.remove("hidden");
  patternElement.innerHTML = `<div class="generating">🧭 Generating a crochet pattern for a ${inputElement.value}</div>`;
  
  axios.get(apiUrl).then(displayPattern);
}

let patternFormElement = document.querySelector("#pattern-generator-form");
patternFormElement.addEventListener("submit", generatePattern);