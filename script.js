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

//add id property based on array postion
function addId(arr) {
  for (let i=0; i < arr.length; i++) {
    arr[i].id = i;
  }
}

//display library
function displayLibrary() {
  addId(myLibrary);

  const library = document.querySelector('.library');

  var child = library.lastElementChild;
  while (child) {
    library.removeChild(child);
    child = library.lastElementChild;
  }

  myLibrary.forEach((record) => {
    const book = document.createElement('div');
    book.classList.add('book');
    if (record.read) {
      book.classList.add('read');
    }

    const title = document.createElement('div');
    title.classList.add('title');
    const author = document.createElement('div');
    author.classList.add('author');
    const pages = document.createElement('div');
    pages.classList.add('pages');
    const buttons = document.createElement('div');
    buttons.classList.add('btns');
    
    //add button to remove book from library
    const remove = document.createElement('button');
    remove.innerText = 'Remove book';
    remove.setAttribute('class', 'remove');
    remove.addEventListener('click', function() {
      myLibrary.splice(record.id, 1);
      displayLibrary();
    });

    //add button to toggle read status
    const toggle = document.createElement('button');
    toggle.innerText = record.read ? 'Not read' : 'Read';
    toggle.classList.add('toggle');
    toggle.addEventListener('click', function() {
      record.read ? record.read = false : record.read = true;
      displayLibrary();
    });
    
    title.textContent = record.title;
    author.textContent = `by ${record.author}`;
    pages.textContent = `${record.pages} pages`;

    buttons.appendChild(remove);
    buttons.appendChild(toggle);
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(buttons);

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