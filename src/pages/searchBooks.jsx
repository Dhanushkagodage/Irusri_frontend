import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import BookCard from "../components/bookcard";
import Pagination from "../components/pagination";
import Background from "../assets/Background.png";

function SearchBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=15"
      );

      const data = await response.json();
      const books = data.items || [];
      setBooks(books);
      console.log(books[0].volumeInfo.imageLinks.thumbnail);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch books");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-auto sm:h-[300px] md:h-[400px] xl:h-[550px]">
        <img
          src={Background}
          alt="background"
          className="w-full h-auto sm:h-[300px] md:h-[400px] xl:h-[550px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/30 to-blue-700/80"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-center ">
          <h1
            className="font-bold text-gray-100 text-[20px] sm:text-[25px] md:text-[30px] lg:text-[45px] font-Poppins animate-fade-in-up shadow-2xl"
            style={{
              WebkitTextStroke: "1px white",
              color: "white",
              textShadow: "4px 4px 4px 4px black",
            }}
          >
            Discover your perfect match with EasyLibro LMS <br /> where learning
            meets simplicity.
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:px-26 xl:px-26 sm:px-8 md:px-20 px-8">
        <div className=" grid-cols-2 flex justify-between lg:pt-[40px] xl:pt-[40px] md:pt-[30px] sm:pt-[20px] xs:pt-[20px] pt-[20px]  items-center text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
          <div>
            <h1 className="text-blue-950 font-medium">
              Showing {books.length} results
            </h1>
          </div>
          <div className="flex justify-end">
            <select
              id="options"
              className=" bg-blue-950 text-white px-[10px] py-[5px] rounded-sm "
            >
              <option value="">Sorted by all</option>
              <option value="option1">Sorted by latest</option>
              <option value="option2">Sorted by popular</option>
            </select>
          </div>
        </div>

        {/* Book Cards */}
        <div className="text-center w-full grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 mt-10 lg:gap-10 xl:gap-10 sm:gap-4 md:gap-6 gap-4 ">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center xl:pt-10 lg:pt-10 md:pt-8 sm:pt-6 xs:pt-6 pt-6 xl:pb-14 lg:pb-14 md:pb-10 sm:pb-6 pb-6">
          <Pagination />
        </div>
      </div>
    </Layout>
  );
}

export default SearchBooks;
