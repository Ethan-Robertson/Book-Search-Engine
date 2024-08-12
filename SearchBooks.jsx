import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_BOOK } from '../utils/mutations';
// other imports...

const SearchBooks = () => {
  const [saveBook] = useMutation(SAVE_BOOK);
  const [searchedBooks, setSearchedBooks] = useState([]);
  // other state and functions...

  const handleSaveBook = async (bookId) => {
    const bookToSave = searchedBooks.find((book) => book.bookId === bookId);

    try {
      const { data } = await saveBook({
        variables: { bookData: { ...bookToSave } },
      });

      // save book id to state
      setSavedBookIds([...savedBookIds, bookToSave.bookId]);
    } catch (err) {
      console.error(err);
    }
  };

  // return statement with JSX
};
