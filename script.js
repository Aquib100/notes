function createNote(title, content) {
  if(localStorage.getItem(title) == '' || localStorage.getItem(title) == null || localStorage.getItem(title) == 'undefined'){
  localStorage.setItem(title, content);
  console.log('Created ' + title + ' !');
  }
  else{
    console.error(title + ' is already created !');
    console.log("You can use the updateNote() method to update a note.");
  }
}

function getNoteContent(title) {
  return localStorage.getItem(title);
}

function updateNote(title, content) {
  localStorage.setItem(title, content);
}

function deleteNote(title) {
  localStorage.setItem(title, '');
  console.log('Deleted !')
}
