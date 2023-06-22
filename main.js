let myLibrary = [];

const book = document.createElement('li');
let bookList = document.getElementById('book-list');
const btn = document.getElementById('button');
const rmvButton = document.getElementById('rmv-button');

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');

// Constructor function

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = isRead;
}

let deneme = new Book('Temel Finans', 'Emre İlhan', 555, true);
let deneme2 = new Book('Para Durumu', 'Çınar İlhan', 425, true);
let deneme3 = new Book('Finans Matematiği', 'Anonim', 758, true);

function addBookToLibrary(item) {
  myLibrary.push(item);
}

addBookToLibrary(deneme);
addBookToLibrary(deneme2);
addBookToLibrary(deneme3);

function showBooks(arr) {
  for (item in arr) {
    let deneme = document.createElement('li');
    deneme.innerHTML =
      'Title: ' +
      arr[item].title +
      ' Author: ' +
      arr[item].author +
      ' Pages: ' +
      arr[item].pages;
    bookList.appendChild(deneme);
  }
}

showBooks(myLibrary);

btn.addEventListener('click', newBook);

function newBook(event) {
  event.preventDefault();
  let newlyAddedBook = new Book(
    title.value,
    author.value,
    pages.value,
    (isRead = false)
  );
  let deneme = document.createElement('li');
  deneme.innerHTML =
    'Title: ' +
    newlyAddedBook.title +
    ' Author: ' +
    newlyAddedBook.author +
    ' Pages: ' +
    newlyAddedBook.pages;
  bookList.appendChild(deneme);
}

rmvButton.addEventListener('click', removeBook);

function removeBook(event) {
  bookList.removeChild(bookList.lastChild);
}
