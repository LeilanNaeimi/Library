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

/******** add book btn */
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(selectEl.value); // Have to send the select box value here.
});
