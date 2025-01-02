import React from "react";
import { FaRegHeart, FaRegEye } from "react-icons/fa";

function BookCard({ book }) {
  const rating = book.volumeInfo.averageRating;

  return (
    <div className="max-h-max">
      <div className="w-full bg-white  truncate ...">
        <div className="grid h-fit shadow-[0_0_10px_0_rgba(0,0,0,0.2)] relative ">
          <div className="relative h-fit">
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt="shoe"
              loading="lazy"
              className="object-cover w-full h-[180px] sm:h-[200px] md:h-[200px] lg:h-[250px] xl:h-[250px]"
            />

            <div className="absolute top-1 right-1  space-y-1  sm:top-1 md:top-1 lg:top-2 xl:top-2 lg:right-2 xl:right-2 lg:space-y-2 xl:space-y-2 justify-center bg-blue-950 bg-opacity-60 p-2 rounded-xl">
              <FaRegHeart className="text-white  cursor-pointer font-thin text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px]" />
            </div>
          </div>

          <div className=" font-Poppins  text-blue-950 flex flex-col justify-center pt-3 pb-3 px-2 truncate ...">
            <h1 className="mb-1 font-semibold truncate ... whitespace-nowrap overflow-hidden text-center h-fit text-[10px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[15px]">
              {book.volumeInfo.title}
            </h1>
            <h1 className="font-medium truncate ... whitespace-nowrap overflow-hidden text-center h-fit text-[10px] sm:text-[12px] md:text-[14px] lg:text-[12px] xl:text-[12px]">
              <span className="text-blue-950">By</span>{" "}
              <span className="text-blue-600">
                {" "}
                {book.volumeInfo.authors ? (
                  <span className="text-blue-600">
                    {book.volumeInfo.authors}
                  </span>
                ) : (
                  <span className="text-gray-400">Unknown Author</span>
                )}
              </span>
            </h1>

            <div className="flex justify-center items-center mt-1 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[20px] xl:text-[20px]">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={`text-custom-pink  ${index < rating ? 'fill' : ''}`}>
                {index < rating ? '★' : '☆'}
              </span>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
