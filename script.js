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

// remove "a", "an", "the" from start
function strip(str) {
  return str.replace(/^(a |an |the )/i, '');
}

// sort bands
bands.sort(function(a, b) {
  let bandA = strip(a).toLowerCase();
  let bandB = strip(b).toLowerCase();

  if (bandA > bandB) return 1;
  if (bandA < bandB) return -1;
  return 0;
});

// add to UI
const ul = document.getElementById("band");

for (let i = 0; i < bands.length; i++) {
  const li = document.createElement("li");
  li.textContent = bands[i];
  ul.appendChild(li);
}