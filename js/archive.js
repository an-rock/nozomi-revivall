(function () {
  "use strict";
  var input = document.getElementById("archive-search");
  var entries = Array.prototype.slice.call(document.querySelectorAll(".entry"));
  var count = document.getElementById("result-count");
  var empty = document.getElementById("empty-state");

  function filterEntries() {
    var query = input.value.trim().toLowerCase();
    var shown = 0;

    entries.forEach(function (entry) {
      var text = (entry.textContent + " " + entry.getAttribute("data-search")).toLowerCase();
      var matches = !query || text.indexOf(query) !== -1;
      entry.hidden = !matches;
      if (matches) shown += 1;
    });

    count.textContent = "Showing " + shown + " of " + entries.length + " entries";
    empty.hidden = shown !== 0;
  }

  input.addEventListener("input", filterEntries);
  filterEntries();
}());
