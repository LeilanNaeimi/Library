let openDialogBox = document.getElementById("openDialogBox");
let card = document.querySelector(".card");
let ul = document.querySelector("ul");
let item = "";

const myLibrary = [
  {
    title: "Book 1",
    author: "Author 1",
    pages: 100,
    read: "Y",
    info: function () {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${
        this.read === "Y" ? `I read it before` : `I haven't read it yet`
      }`;
    },
  },
  {
    title: "Book 2",
    author: "Author 2",
    pages: 512,
    read: "N",
    info: function () {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${
        this.read === "Y" ? `I read it before` : `I haven't read it yet`
      }`;
    },
  },
];

function showBooks() {
  ul.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let li = document.createElement("li");
    item = document.createTextNode(myLibrary[i].info());
    li.appendChild(item);
    ul.appendChild(li);
  }
}

showBooks();

// Add a click event listener to the "Open Dialog Box" button
openDialogBox.addEventListener("click", function () {
  let userDialog = document.getElementById("userDialog");
  let confirmBtn = document.getElementById("confirmBtn");

  // Define the modalOpen function
  function modalOpen() {
    userDialog.showModal();
  }

  // Add a click event listener to the "Confirm" button
  confirmBtn.addEventListener("click", function displayValues() {
    let bookTitleValue = document.getElementById("bookTitle").value;
    let authorValue = document.getElementById("author").value;
    let pagesValue = document.getElementById("pages").value;

    // Create a new book object
    const newBook = {
      title: bookTitleValue,
      author: authorValue,
      pages: pagesValue,
      read: "N",
      info: function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${
          this.read === "Y" ? `I read it before` : `I haven't read it yet`
        }`;
      },
    };

    // Add the new book to the library
    myLibrary.push(newBook);

    // Update the display
    showBooks();
    closeDialog();
  });

  // Close the dialog
  function closeDialog() {
    userDialog.close();
  }

  // Show the modal dialog
  modalOpen();
});

//*********************** */
//****************** */
// let openDialogBox = document.getElementById("openDialogBox");
// let card = document.querySelector(".card");
// let ul = document.querySelector("ul");
// let item = "";

// const myLibrary = [
//   {
//     title: "Book 1",
//     author: "Authour 1",
//     pages: 100,
//     read: "Y",
//     info: function () {
//       return `${this.title} by ${this.author},${this.pages} pages,
//       ${this.read === "Y" ? `I read it before` : `I dont read yet`}`;
//     },
//   },
//   {
//     title: "Book 2",
//     author: "Authour 2",
//     pages: 512,
//     read: "N",
//     info: function () {
//       return `${this.title} by ${this.author},${this.pages} pages,
//         ${this.read === "Y" ? `I read it before` : `I dont read yet`}`;
//     },
//   },
// ];

// function showBooks() {
//   for (let i = 0; i < myLibrary.length; i++) {
//     let li = document.createElement("li");
//     item = document.createTextNode(myLibrary[i].info());
//     li.appendChild(item);
//     ul.appendChild(li);
//   }
// }

// showBooks();

// // Add a click event listener to the "Open Dialog Box" button
// openDialogBox.addEventListener("click", function () {
//   let userDialog = document.getElementById("userDialog");
//   let outputBox = document.querySelector(".output");
//   let confirmBtn = document.getElementById("confirmBtn");
//   let addToLibraryBtn = document.createElement("button");
//   let addToLibrary = document.createTextNode("Add to library");

//   // Define the modalOpen function
//   function modalOpen() {
//     userDialog.showModal();
//   }

//   // Add a click event listener to the "Confirm" button
//   confirmBtn.addEventListener("click", function displayValues() {
//     let bookTitleValue = document.getElementById("bookTitle").value;
//     let authorValue = document.getElementById("author").value;
//     let pagesValue = document.getElementById("pages").value;

//     outputBox.textContent = `Book Title: ${bookTitleValue}, Author: ${authorValue}, Pages: ${pagesValue}   `;

//     closeDialog();
//     addToLibraryBtn.appendChild(addToLibrary);
//     outputBox.appendChild(addToLibraryBtn);
//   });

//   addToLibraryBtn.addEventListener("click", addBook);

//   function addBook() {
//     console.log(myLibrary);
//   }

//   //  close the dialog
//   function closeDialog() {
//     userDialog.close();
//   }

//   // Show the modal dialog
//   modalOpen();
// });
