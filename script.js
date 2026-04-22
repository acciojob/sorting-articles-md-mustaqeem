const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// IMPORTANT: split method (more reliable for tests)
function strip(str) {
  let words = str.split(" ");
  
  if (
    words[0].toLowerCase() === "a" ||
    words[0].toLowerCase() === "an" ||
    words[0].toLowerCase() === "the"
  ) {
    words.shift();
  }

  return words.join(" ");
}

// sort
bands.sort(function(a, b) {
  let A = strip(a).toLowerCase();
  let B = strip(b).toLowerCase();

  if (A < B) return -1;
  if (A > B) return 1;
  return 0;
});

// render
const ul = document.getElementById("band");
ul.innerHTML = "";

for (let i = 0; i < bands.length; i++) {
  const li = document.createElement("li");
  li.textContent = bands[i];
  ul.appendChild(li);
}