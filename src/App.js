import './App.css';
import { useState } from 'react';

function App() {

  const [bookName, setBookName] = useState("");
  const [writerName, setWriterName] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);


  const handleBookNameChange = (event) => {
    setBookName(event.target.value)
  }

  const handleWriterNameChange = (event) => {
    setWriterName(event.target.value)
  }

  const handlePageCountChange = (event) => {
    setPageCount(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleClick = () => {
    const newBook = {
      bookName: bookName,
      writerName: writerName,
      pageCount: pageCount
    }

    if (bookName === "" || writerName === "" || pageCount === "") {
      alert("You cant leave input fields blank");
    }
    else {
      setBooks([...books, newBook])
      setBookName("");
      setWriterName("");
      setPageCount("");
    }
  }

  const handleSearchClick = () => {
    if (search === "") {
      alert("You can't leave the search field blank");
    } else {
      const filteredBooks = books.filter(book => book.bookName.toLowerCase().includes(search.toLowerCase())
      );

      setBooks(filteredBooks);
    }
  }

  const handleClickDelete = () => {
    if (bookName === "") {
      alert("You can't leave the search field blank");
    } else {
      const updatedBooks = books.filter(book => book.bookName !== bookName);
      setBooks(updatedBooks);
    }
  }

  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Enter book name to add" aria-label="book add" value={bookName} onChange={handleBookNameChange} required />
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Enter writer name to add" aria-label="writer add" value={writerName} onChange={handleWriterNameChange} required />
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Enter page count to add" aria-label="pc add" value={pageCount} onChange={handlePageCountChange} required />
            </div>
            <div class="input-group mb-3">
              <button type="button" class="btn btn-info addBtn" onClick={handleClick}>Add</button>
            </div>
            <div class="input-group mb-3">
              <button type="button" class="btn btn-info addBtn" onClick={handleClickDelete}>Delete</button>
            </div>
          </div>
          <div class="col-sm mid"></div>
          <div class="col-sm">
            <div class="container2">
              <form class="form-inline md-form mr-auto mb-4">
                <input class="form-control mr-sm-2 myInput" type="text" placeholder="Search by book name" aria-label="Search" value={search} onChange={handleSearchChange} />
                <button class="btn btn-outline-info btn-rounded btn-sm my-0" type="button" onClick={handleSearchClick}>Search</button>
              </form>
            </div>
          </div>
        </div>
        <div class="row tableRow">
          <div className="table-container" style={{ overflowY: "auto", maxHeight: "300px", width: "100%" }}>
            <table className="table">
              <thead className='stickyHeader'>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Book Name</th>
                  <th scope="col">Writer</th>
                  <th scope="col">Page Count</th>
                </tr>
              </thead>
              <tbody className="tbody">
                {books.map((book, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{book.bookName}</td>
                    <td>{book.writerName}</td>
                    <td>{book.pageCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
