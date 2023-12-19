let openDialogBox = document.getElementById("openDialogBox");

let myLibrary = [];
// const myLibrary = [
//   {
//     title: "Book 1",
//     author: "Authour 1",
//     pages: 100,
//     read: "Y",
//     info: function () {
//       return `${this.title} by ${this.author},${this.pages} pages,
//       ${
//         this.read === "Y" ? `I read it before` : `Dont read yet`
//       } and serial no is: 10000}`;
//     },
//   },
//   {
//     title: "Book 2",
//     author: "Authour 2",
//     pages: 512,
//     read: "N",
//     info: function () {
//       return `${this.title} by ${this.author},${this.pages} pages,
//         ${
//           this.read === "Y" ? `I read it before` : `Dont read yet`
//         } and serial no is: 10000}`;
//     },
//   },
// ];

let card = document.querySelector(".card");
let ul = document.querySelector("ul");
let item = "";

function showBooks(myLibrary) {
  console.log(myLibrary.length);
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].title);
    let li = document.createElement("li");
    item = document.createTextNode(myLibrary[i].title);
    // `Title: ${myLibrary[i].title},Author  ${myLibrary[i].author}, Pages ${myLibrary[i].pages}.`
    li.appendChild(item);
    ul.appendChild(li);
  }
}

// showBooks(myLibrary);

/******** add book btn */

// Add a click event listener to the "Open Dialog Box" button
openDialogBox.addEventListener("click", function () {
  let userDialog = document.getElementById("userDialog");
  let outputBox = document.querySelector(".output");
  let confirmBtn = document.getElementById("confirmBtn");
  let addToLibraryBtn = document.createElement("button");
  let addToLibrary = document.createTextNode("Add to library");

  // Define the modalOpen function
  function modalOpen() {
    userDialog.showModal();
  }

  // Add a click event listener to the "Confirm" button
  confirmBtn.addEventListener("click", function displayValues() {
    let bookTitleValue = document.getElementById("bookTitle").value;
    let authorValue = document.getElementById("author").value;
    let pagesValue = document.getElementById("pages").value;

    outputBox.textContent = `Book Title: ${bookTitleValue}, Author: ${authorValue}, Pages: ${pagesValue}   `;

    myLibrary.title = bookTitleValue;
    myLibrary.author = authorValue;
    myLibrary.pages = pagesValue;

    // Close the dialog after displaying the values
    closeDialog();
    addToLibraryBtn.appendChild(addToLibrary);
    outputBox.appendChild(addToLibraryBtn);
  });

  addToLibraryBtn.addEventListener("click", addBookToLibrary);

  function addBookToLibrary() {
    showBooks(myLibrary);
    console.log("add to library");
  }

  //  close the dialog
  function closeDialog() {
    userDialog.close();
  }

  // Show the modal dialog
  modalOpen();
});
