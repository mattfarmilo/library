const myLibrary = [];

//book constuctor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//new book function
function addBookToLibrary(book) {
  myLibrary.push(book);
}

//test books
const workingGenius = new Book("The 6 Types of Working Genius", "Patrick Lencioni", 228, true);
addBookToLibrary(workingGenius);
const bono = new Book("Bono", "Michka Assayas", 323, false);
addBookToLibrary(bono);
const refuting = new Book("Refuting Compromise", "Jonathan Sarfati", 411, false);
addBookToLibrary(refuting);
const execOrders = new Book ("Executive Orders", "Tom Clancy", 1273, true);
addBookToLibrary(execOrders);
const disciples = new Book("Disciples Who Will Last", "Tim Hawkins", 208, true);
addBookToLibrary(disciples);

//display library
function displayLibrary() {
  const library = document.querySelector('.library');

  var child = library.lastElementChild;
  while (child) {
    library.removeChild(child);
    child = library.lastElementChild;
  }

  myLibrary.forEach((record) => {
    const book = document.createElement('div');
    book.classList.add('book');
    const title = document.createElement('div');
    title.classList.add('title');
    const author = document.createElement('div');
    author.classList.add('author');
    const pages = document.createElement('div');
    pages.classList.add('pages');
    const read = document.createElement('div');
    read.classList.add('read');
    
    title.textContent = record.title;
    author.textContent = `by ${record.author}`;
    pages.textContent = `${record.pages} pages`;
    read.textContent = record.read;

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(read);
    library.appendChild(book);
  });
};

//submit new book form
const submit = document.querySelector('#submit');

submit.addEventListener("click", newBook);

function newBook(event) {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('input[name="read"]:checked').value === 'yes'

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
  displayLibrary();
  document.querySelector('#form').reset();
  event.preventDefault();
}

displayLibrary();