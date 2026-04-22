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

    function strip(str) {
      let words = str.split(" ");
      let first = words[0].toLowerCase();
      if (first === "a" || first === "an" || first === "the") {
        words.shift();
      }
      return words.join(" ");
    }

    bands.sort(function(a, b) {
      let A = strip(a).toLowerCase();
      let B = strip(b).toLowerCase();
      if (A < B) return -1;
      if (A > B) return 1;
      return 0;
    });

    const ul = document.getElementById("band");
    ul.innerHTML = "";
    bands.forEach(function(band) {
      const li = document.createElement("li");
      li.textContent = band;
      ul.appendChild(li);
    });