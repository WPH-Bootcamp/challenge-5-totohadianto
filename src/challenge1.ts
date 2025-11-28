// create an type Book with properties title, author, and year
type Book = {
    title: string;
    author: string;
    year: number;
};

let books: Book[] = [];

// create function addBook to add a book to the collection
function addBook(title: string, author: string, year: number): void {
    const newBook: Book = { title, author, year };
    books.push(newBook);
    console.log(`Book added: "${title}" by ${author} (${year})`);
}

// create function listBooks to list all books in the collection
function listBooks(): void {
    console.log('All Books:');
    for (const book of books) {
        console.log(`- ${book.title} by ${book.author} (${book.year})`);
    }
}

// create function searchBook to search for a book by title and return the book details if found
function searchBook(title: string = ''): void {
    if (title === '') {
        console.log('Please provide a title to search.');
        return;
    }
    const foundBooks = books.filter(book => book.title.includes(title));
    if (foundBooks.length === 0) {
        console.log(`No books found with title containing "${title}".`);
    } else {
        console.log(`Search Results for "${title}":`);
        for (const book of foundBooks) {
            console.log(`- ${book.title} by ${book.author} (${book.year})`);
        }
    }
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };


addBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
addBook('1984', 'George Orwell', 1949);

listBooks();

searchBook('1984');

searchBook();

addBook("Harry Potter and the Philosopher's Stone", 'J.K. Rowling', 1997);
addBook('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', 1998);
searchBook('Harry Potter');

addBook('The Hobbit', 'J.R.R. Tolkien', 1937);
searchBook('Nonexistent Title');

addBook('The Catcher in the Rye', 'J.D. Salinger', 1951);
searchBook('the catcher');