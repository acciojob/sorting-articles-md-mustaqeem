//your JS code here. If required.
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

// remove a, an, the from start
function strip(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// sort ignoring articles
bands.sort((a, b) => {
  return strip(a).localeCompare(strip(b));
});

// add to UI
const ul = document.getElementById("band");

bands.forEach(band => {
  const li = document.createElement("li");
  li.textContent = band;
  ul.appendChild(li);
});