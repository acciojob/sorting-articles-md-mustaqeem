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

// better strip function
function strip(str) {
  return str.replace(/^(the|a|an)\s+/i, '');
}

// sort
bands.sort(function(a, b) {
  const bandA = strip(a).toLowerCase();
  const bandB = strip(b).toLowerCase();

  if (bandA < bandB) return -1;
  if (bandA > bandB) return 1;
  return 0;
});

// render
const ul = document.getElementById("band");

bands.forEach(function(band) {
  const li = document.createElement("li");
  li.textContent = band;
  ul.appendChild(li);
});