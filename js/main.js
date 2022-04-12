/* global data */
/* exported data */
var $photoURL = document.querySelector("input[name = 'photourl']");
var $image = document.querySelector('img');

$photoURL.addEventListener('input', function (event) {
  $image.setAttribute('src', event.target.value);
});

var journalEntryForm = document.getElementById('journal-entry-form');

journalEntryForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var journalEntry = {
    title: journalEntryForm.elements.title.value,
    photoURL: journalEntryForm.elements.photourl.value,
    notes: journalEntryForm.elements.usernotes.value
  };
  journalEntry.entryId = data.nextEntryId++;
  data.entries.unshift(journalEntry);
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
  document.getElementById('journal-entry-form').reset();

  showView('entries');
});

function renderEntries(entry) {
  var li = document.createElement('li');
  li.className = 'row';

  var imageDiv = document.createElement('div');
  imageDiv.className = 'column-half image-container';
  li.appendChild(imageDiv);

  var image = document.createElement('img');
  imageDiv.appendChild(image);
  image.setAttribute('src', entry.photoURL);

  var entryContentDiv = document.createElement('div');
  entryContentDiv.className = 'column-half';
  imageDiv.insertAdjacentElement('afterend', entryContentDiv);

  var entryTitle = document.createElement('h3');
  entryContentDiv.appendChild(entryTitle);
  var entryTitleText = document.createTextNode(entry.title);
  entryTitle.appendChild(entryTitleText);

  var entryNotes = document.createElement('p');
  entryTitle.insertAdjacentElement('afterend', entryNotes);
  var entryNotesText = document.createTextNode(entry.notes);
  entryNotes.appendChild(entryNotesText);

  return li;
}

var $journalEntriesUl = document.querySelector('.journal-entries-ul');

document.addEventListener('DOMContentLoaded', function (e) {
  for (var i = 0; i < data.entries.length; i++) {
    var newEntry = renderEntries(data.entries[i]);
    $journalEntriesUl.appendChild(newEntry);
    showView(data.view);
  }
});

function showView(string) {
  var $views = document.querySelectorAll('.view');
  for (var i = 0; i < $views.length; i++) {
    var viewsAttr = $views[i].getAttribute('data-view');

    if (viewsAttr === string) {
      $views[i].className = 'view container';
      data.view = string;
    } else {
      $views[i].className = 'view hidden container';
    }
  }
}
