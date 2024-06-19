import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { categorizeBooks } from './AppUtils';
import { Book } from './commonTypes';

describe("categorizeBooks", () => {
  const books: Book[] = [
    { genre: "Fiction", id: "1", title: "Fiction Book 1" },
    { genre: "Fiction", id: "2", title: "Fiction Book 2" },
    { genre: "Non Fiction", id: "4", title: "Non Fiction Book 2" },
    { genre: "Non Fiction", id: "3", title: "Non Fiction Book 1" }
  ]

  test("pass in books", () => {
    expect(categorizeBooks(books)).toEqual({
      "Fiction": [
        { genre: "Fiction", id: "1", title: "Fiction Book 1" },
        { genre: "Fiction", id: "2", title: "Fiction Book 2" }
      ],
      "Non Fiction": [
        { genre: "Non Fiction", id: "4", title: "Non Fiction Book 2" },
        { genre: "Non Fiction", id: "3", title: "Non Fiction Book 1" }
      ]
    })
  })

  test("pass in an empty array", () => {
    expect(categorizeBooks([])).toEqual({})
  })
});