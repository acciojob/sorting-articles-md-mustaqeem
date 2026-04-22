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

// remove a, an, the ONLY from beginning
function strip(name) {
  return name.replace(/^(the|a|an)\s/i, '');
}

// sort properly
bands.sort((a, b) => {
  const bandA = strip(a).toLowerCase();
  const bandB = strip(b).toLowerCase();

  if (bandA > bandB) return 1;
  if (bandA < bandB) return -1;
  return 0;
});

// render list
const ul = document.getElementById("band");

bands.forEach(band => {
  const li = document.createElement("li");
  li.innerText = band;
  ul.appendChild(li);
});