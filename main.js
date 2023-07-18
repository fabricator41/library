let myLibrary = [];

let displayTitle = document.getElementById('t');
let displayAuthor = document.getElementById('a');
let displayPages = document.getElementById('p');
const btn = document.getElementById('button');
let removeButton = document.querySelectorAll('#remove');
let readButton = document.querySelectorAll('.read');

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');

addEventListenerList(readButton, 'click', isRead);
addEventListenerList(removeButton, 'click', removeNode);

function isRead() {
  if (this.textContent === 'Read') {
    this.textContent = 'Not Read';
  } else {
    this.textContent = 'Read';
  }
}

// Constructor function

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = isRead;
}

function addBookToLibrary(item) {
  myLibrary.push(item);
}

function showBooks(arr) {
  for (item in arr) {
    let deneme = document.createElement('p');
    let deneme2 = document.createElement('p');
    let deneme3 = document.createElement('p');
    deneme.innerHTML = arr[item].title;
    deneme2.innerHTML = arr[item].author;
    deneme3.innerHTML = arr[item].pages;
    t.appendChild(deneme);
    a.appendChild(deneme2);
    p.appendChild(deneme3);
  }
}

// a function which add events to each node

function addEventListenerList(list, event, fn) {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener(event, fn, false);
  }
}

showBooks(myLibrary);

btn.addEventListener('click', newBook);

// 1. Preventing refresh of the page
// 2. Create a new Book Object
// 3. Create a new list element
// 4. Update inner of list element
// 5. Add new book to existing list
// 6. Add events to Read and Remove buttons

function newBook(event) {
  event.preventDefault();
  let newlyAddedBook = new Book(
    title.value,
    author.value,
    pages.value,
    (this.read = 'Read')
  );
  let deneme = document.createElement('p');
  let deneme2 = document.createElement('p');
  let deneme3 = document.createElement('p');

  deneme.innerHTML = newlyAddedBook.title;
  deneme2.innerHTML = newlyAddedBook.author;
  deneme3.innerHTML = newlyAddedBook.pages;

  t.append(deneme);
  a.append(deneme2);
  p.append(deneme3);

  readButton = document.querySelectorAll('.read');
  addEventListenerList(readButton, 'click', isRead);
  removeButton = document.querySelectorAll('#remove');
  addEventListenerList(removeButton, 'click', removeNode);
}

// a function which removes an element

function removeNode() {
  this.parentElement.remove();
}

/* 
<button class="read close">${newlyAddedBook.read}</button>
    <button id="remove" type="button" class="close" aria-label="Close">
      <span aria-hidden="true">X</span>
    </button></li>`;

    */
