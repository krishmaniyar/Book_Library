let gridNum = 3;
const container = document.getElementById("container");
const add_book_form = document.getElementById("erase");

var myLibrary = [];

class Book {
    constructor (name, author, serial_no, pages,status) {
        this.name = name;
        this.author = author;
        this.serial_no = serial_no;
        this.pages = pages;
        this.status = status;
    }    
}

function insertbook() {
    const newBook0 = new Book("Atomic Habit", "James Clear", 1, 285,true);
    const newBook1 = new Book("How-to-Win-Friends-and-Influence-People", "Dale Carnegie", 2, 263,false);
    const newBook2 = new Book("Zero To One", "Peter Thiel", 3, 186,true);
    myLibrary.push(newBook0);
    myLibrary.push(newBook1);
    myLibrary.push(newBook2);
}

insertbook();

makeGrid();


// function Book(name, author, serial_no, pages,status) {
//     this.name = name;
//     this.author = author;
//     this.serial_no = serial_no;
//     this.pages = pages;
// }

function addBookToLibrary() {
    const name = document.getElementById("book_name").value;
    const author = document.getElementById("author_name").value;
    const serial_no = document.getElementById("serial_no").value;
    const pages = document.getElementById("no_of_pages").value;
    const status = document.getElementById("checkbox");

    const newBook = new Book(name, author, serial_no, pages,status.checked);
    myLibrary.push(newBook);
    console.log(myLibrary[gridNum].name);
    gridNum++;
    console.log(gridNum);
    makeGrid();
}

// Add Book Page

function add_book()
{
    document.getElementById("container").innerHTML="";
    container.append(add_book_form);
}

// Grid for read books only

function makeGridIfRead()
{
    add_book_form.remove();
    document.getElementById("container").innerHTML="";
    for (i=0;i<gridNum;i++)
    {
        if(myLibrary[i].status)
        {
            let newElement = document.createElement("div");
            container.appendChild(newElement).className = "grid-item";
            if(gridNum > 3)
            {
                newElement.style.maxWidth = "28%";
            }
            else
            {
                newElement.style.maxWidth = "" + 100/gridNum + "%";
            }
            newElement.innerHTML = "<h3>Name: " + myLibrary[i].name + "<br>Author Name: " + myLibrary[i].author + "<br>Serial No: " + myLibrary[i].serial_no + "<br>No of Pages:  " + myLibrary[i].pages + "<br>Read: " + myLibrary[i].status + "</h3>";
        }
    }
}

// Grid for Unread books

function makeGridIfUnread()
{
    add_book_form.remove();
    document.getElementById("container").innerHTML="";
    for (i=0;i<gridNum;i++)
    {
        if(!myLibrary[i].status)
        {
            let newElement = document.createElement("div");
            container.appendChild(newElement).className = "grid-item";
            if(gridNum > 3)
            {
                newElement.style.maxWidth = "28%";
            }
            else
            {
                newElement.style.maxWidth = "" + 100/gridNum + "%";
            }
            newElement.innerHTML = "<h3>Name: " + myLibrary[i].name + "<br>Author Name: " + myLibrary[i].author + "<br>Serial No: " + myLibrary[i].serial_no + "<br>No of Pages:  " + myLibrary[i].pages + "<br>Read: " + myLibrary[i].status + "</h3>";
        }
    }
}

// Default page


function makeGrid()
{
    add_book_form.remove();
    document.getElementById("container").innerHTML="";
    for (i=0;i<gridNum;i++)
    {
        let newElement = document.createElement("div");
        container.appendChild(newElement).className = "grid-item";
        if(gridNum > 3)
        {
            newElement.style.maxWidth = "28%";
        }
        else
        {
            newElement.style.maxWidth = "" + 100/gridNum + "%";
        }
        newElement.innerHTML = "<h3>Name: " + myLibrary[i].name + "<br>Author Name: " + myLibrary[i].author + "<br>Serial No: " + myLibrary[i].serial_no + "<br>No of Pages:  " + myLibrary[i].pages + "<br>Read: " + myLibrary[i].status + "</h3>";
    }
}

function makeGridDelete()
{
    add_book_form.remove();
    document.getElementById("container").innerHTML="";
    for (i=0;i<gridNum;i++)
    {
        let newElement = document.createElement("div");
        container.appendChild(newElement).className = "grid-item";
        if(gridNum > 3)
        {
            newElement.style.maxWidth = "28%";
        }
        else
        {
            newElement.style.maxWidth = "" + 100/gridNum + "%";
        }
        newElement.innerHTML = "<h3>Name: " + myLibrary[i].name + "<br>Author Name: " + myLibrary[i].author + "<br>Serial No: " + myLibrary[i].serial_no + "<br>No of Pages:  " + myLibrary[i].pages + "</h3>";
        newElement.innerHTML += "<button type='button' onclick='remove(" + i + ")' class='buttons' style='margin-top:10px;padding:2%;'>Delete</button>"
    }
}

document.getElementById("add").addEventListener("click",()=>
{
    add_book();
    document.getElementById("detail").reset();
});

document.getElementById("remove").addEventListener("click",()=>
{
    makeGridDelete();
});

document.getElementById("first_page").addEventListener("click",()=>
{
    makeGrid();
});

function library()
{
    addBookToLibrary();
}

function remove(j)
{
    console.log(j);
    if(j==0)
    console.log(myLibrary.splice(0,1));
    else
    console.log(myLibrary.splice(j,j));
    document.getElementById("container").innerHTML="";
    gridNum--;
    makeGrid();
}