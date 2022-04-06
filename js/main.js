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
});
