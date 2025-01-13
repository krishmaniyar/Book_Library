const container = document.getElementById("container");
const add_book_form = document.getElementById("erase");

var myLibrary = [];

function loadLibrary() {
    const storedLibrary = localStorage.getItem('myLibrary');
    if (storedLibrary) {
        myLibrary = JSON.parse(storedLibrary);
        gridNum = myLibrary.length;
    }
    else {
        insertbook();
    }
}

function saveLibrary() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

class Book {
    constructor(name, author, serial_no, pages, status) {
        this.name = name;
        this.author = author;
        this.serial_no = serial_no;
        this.pages = pages;
        this.status = status;
    }
}

function insertbook() {
    const newBook0 = new Book("Atomic Habit", "James Clear", 1, 285, true);
    const newBook1 = new Book("How-to-Win-Friends-and-Influence-People", "Dale Carnegie", 2, 263, false);
    const newBook2 = new Book("Zero To One", "Peter Thiel", 3, 186, true);
    myLibrary.push(newBook0);
    myLibrary.push(newBook1);
    myLibrary.push(newBook2);
}

function addBookToLibrary() {
    const name = document.getElementById("book_name").value;
    const author = document.getElementById("author_name").value;
    const serial_no = document.getElementById("serial_no").value;
    const pages = document.getElementById("no_of_pages").value;
    const status = document.getElementById("checkbox");

    const newBook = new Book(name, author, serial_no, pages, status.checked);
    myLibrary.push(newBook);
    makeGrid();
}

// Add Book Page

function add_book() {
    document.getElementById("container").innerHTML = "";
    container.append(add_book_form);
}

// Grid for read books only

function makeGridIfRead() {
    add_book_form.remove();
    document.getElementById("container").innerHTML = "";
    for (i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].status) {
            let newElement = document.createElement("div");
            container.appendChild(newElement).className = "grid-item";
            newElement.innerHTML = "<h3>Name: " + myLibrary[i].name + "<br>Author Name: " + myLibrary[i].author + "<br>Serial No: " + myLibrary[i].serial_no + "<br>No of Pages:  " + myLibrary[i].pages + "<br>Read: " + myLibrary[i].status + "</h3>";
            newElement.innerHTML += "<button onclick='buttonRead(" + i + ")' class='unread' type='button'>Unread</button>";
        }
    }
    saveLibrary();
}

// Grid for Unread books

function makeGridIfUnread() {
    add_book_form.remove();
    document.getElementById("container").innerHTML = "";
    for (i = 0; i < myLibrary.length; i++) {
        if (!myLibrary[i].status) {
            let newElement = document.createElement("div");
            container.appendChild(newElement).className = "grid-item";
            newElement.innerHTML = "<h3>Name: " + myLibrary[i].name + "<br>Author Name: " + myLibrary[i].author + "<br>Serial No: " + myLibrary[i].serial_no + "<br>No of Pages:  " + myLibrary[i].pages + "<br>Read: " + myLibrary[i].status + "</h3>";
            newElement.innerHTML += "<button onclick='buttonUnread(" + i + ")' class='readbu' type='button'>Read</button>";
        }
    }
    saveLibrary();
}

// Default page

function makeGrid() {
    add_book_form.remove();
    document.getElementById("container").innerHTML = "";
    for (i = 0; i < myLibrary.length; i++) {
        let newElement = document.createElement("div");
        container.appendChild(newElement).className = "grid-item";
        newElement.innerHTML = "<h3>Name: " + myLibrary[i].name + "<br>Author Name: " + myLibrary[i].author + "<br>Serial No: " + myLibrary[i].serial_no + "<br>No of Pages:  " + myLibrary[i].pages + "<br>Read: " + myLibrary[i].status + "</h3>";
    }
    saveLibrary();
}

function makeGridDelete() {
    add_book_form.remove();
    document.getElementById("container").innerHTML = "";
    for (i = 0; i < myLibrary.length; i++) {
        let newElement = document.createElement("div");
        container.appendChild(newElement).className = "grid-item";
        newElement.innerHTML = "<h3>Name: " + myLibrary[i].name + "<br>Author Name: " + myLibrary[i].author + "<br>Serial No: " + myLibrary[i].serial_no + "<br>No of Pages:  " + myLibrary[i].pages + "</h3>";
        newElement.innerHTML += "<button type='button' onclick='remove(" + i + ")' class='buttons' style='margin-top:10px;padding:2%;'>Delete</button>"
    }
    saveLibrary();
}

document.getElementById("add").addEventListener("click", () => {
    add_book();
    document.getElementById("detail").reset();
});

document.getElementById("remove").addEventListener("click", () => {
    makeGridDelete();
});

document.getElementById("first_page").addEventListener("click", () => {
    makeGrid();
});

function library() {
    addBookToLibrary();
}

function remove(j) {
    console.log(myLibrary.splice(j, 1));
    document.getElementById("container").innerHTML = "";
    makeGridDelete();
}

window.onload = function () {
    loadLibrary();
    makeGrid();
};

function buttonUnread(i) {
    myLibrary[i].status = true;
    console.log(myLibrary[i].status);
    makeGridIfUnread();
}

function buttonRead(i) {
    myLibrary[i].status = false;
    console.log(myLibrary[i].status);
    makeGridIfRead();
}