// Array of books
var books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    date: "1925-04-10",
  },
  { title: "To Kill a Mockingbird", author: "Harper Lee", date: "1960-07-11" },
  { title: "1984", author: "George Orwell", date: "1949-06-08" },
];

// Function to display books in the table
function displayBooks() {
  var tableBody = document.querySelector("#bookTable tbody");
  tableBody.innerHTML = "";

  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var row = tableBody.insertRow();

    var titleCell = row.insertCell();
    var authorCell = row.insertCell();
    var dateCell = row.insertCell();

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    dateCell.textContent = book.date;
  }
}

// Add event listener to form submission
var form = document.querySelector("#bookForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get input values
  var title = document.querySelector("#titleInput").value;
  var author = document.querySelector("#authorInput").value;
  var date = document.querySelector("#dateInput").value;

  // Create new book object and add it to the array
  var newBook = { title: title, author: author, date: date };
  books.push(newBook);

  // Clear form inputs
  document.querySelector("#titleInput").value = "";
  document.querySelector("#authorInput").value = "";
  document.querySelector("#dateInput").value = "";

  // Display updated table
  displayBooks();
});

// Call the displayBooks function to initially populate the table
displayBooks();
