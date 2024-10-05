// Client-side script to handle book borrowing
const borrowForm = document.getElementById('borrowForm');
const booksList = document.getElementById('booksList');
let books = [];

borrowForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const bookTitle = document.getElementById('bookTitle').value;
    const userName = document.getElementById('userName').value;
    
    if (bookTitle && userName) {
        books.push({ title: bookTitle, borrower: userName });
        displayBooks();
        borrowForm.reset();
    }
});

// Function to display books list
function displayBooks() {
    booksList.innerHTML = '';
    books.forEach((book, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.borrower}</td>
            <td><button class="btn btn-danger btn-sm" onclick="returnBook(${index})">Return</button></td>
        `;
        booksList.appendChild(row);
    });
}

// Function to handle book return
function returnBook(index) {
    books.splice(index, 1);
    displayBooks();
}
