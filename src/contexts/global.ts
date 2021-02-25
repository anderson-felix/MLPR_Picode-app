import React from "react";
import { Book } from "../interfaces/Book";
import { makeAutoObservable } from "mobx";

class GlobalContext {
  constructor() {
    makeAutoObservable(this);
  }

  private _bookData: Book | undefined;
  set bookData(value: Book) {
    this._bookData = value;
  }
  get bookData() {
    return this._bookData as Book;
  }
}

export const globalContext = new GlobalContext();

export const useGlobalContext = () =>
  React.useContext(React.createContext(globalContext));
