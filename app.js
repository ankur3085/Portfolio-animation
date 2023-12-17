document.addEventListener('DOMContentLoaded', function() {
  var description = document.getElementById('description');
  if (description) {
    var words = description.innerText.split(' ');
    var lines = [];
    var wordsPerLine = 20;

    for (var i = 0; i < words.length; i += wordsPerLine) {
      lines.push(words.slice(i, i + wordsPerLine).join(' '));
    }

    description.innerText = lines.join('\n');
  }
});



