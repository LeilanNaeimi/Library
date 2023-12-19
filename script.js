const myLibrary = [
  {
    title: "Book 1",
    author: "Authour 1",
    pages: 100,
    read: "Y",
    info: function () {
      return `${this.title} by ${this.author},${this.pages} pages,
      ${
        this.read === "Y" ? `I read it before` : `Dont read yet`
      } and serial no is: 10000}`;
    },
  },
  {
    title: "Book 2",
    author: "Authour 2",
    pages: 512,
    read: "N",
    info: function () {
      return `${this.title} by ${this.author},${this.pages} pages,
        ${
          this.read === "Y" ? `I read it before` : `Dont read yet`
        } and serial no is: 10000}`;
    },
  },
];

let card = document.querySelector(".card");
let ul = document.querySelector("ul");
let item = "";
function Book() {
  // the constructor...
  //
  for (let i = 0; i < myLibrary.length; i++) {
    let li = document.createElement("li");
    item = document.createTextNode(myLibrary[i].title);
    console.log(li);
    li.appendChild(item);
    ul.appendChild(li);
  }
}

function addBookToLibrary() {
  // do stuff here
}

Book();
