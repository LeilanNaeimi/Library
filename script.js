let openDialogBox = document.getElementById("openDialogBox");
let card = document.querySelector(".card");
let ul = document.querySelector("ul");
let item = "";

let myLibrary = [];

function showBooks() {
  ul.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let li = document.createElement("li");
    let deleteBtn = document.createElement("button");
    item = document.createTextNode(myLibrary[i].info());

    li.appendChild(item);
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("deleteBtn");
    li.appendChild(deleteBtn);
    ul.appendChild(li);

    //*** delete Book ****/
    deleteBtn.addEventListener("click", () => {
      myLibrary.splice(i, 1);
      showBooks();
    });
  }
}

// showBooks();

// Add a click event listener to the "Open Dialog Box" button
openDialogBox.addEventListener("click", function () {
  let userDialog = document.getElementById("userDialog");
  let confirmBtn = document.getElementById("confirmBtn");

  // Reset input fields to empty
  document.getElementById("bookTitle").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";

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
