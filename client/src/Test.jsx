import { useState, useEffect } from "react";
import axios from "axios";
import "./Test.css";

function Test() {
  const [books, setBooks] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get("http://localhost:5000/api");
    setBooks(response.data.books);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      {/* books table */}
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Title
              </th>
              <th scope="col" class="px-6 py-3">
                Author
              </th>
              <th scope="col" class="px-6 py-3">
                Genre
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => {
              return (
                <tr
                  key={index}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {book.title}
                  </th>
                  <td class="px-6 py-4">{book.author}</td>
                  <td class="px-6 py-4">{book.genre}</td>
                  <td class="px-6 py-4">{book.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Test;
