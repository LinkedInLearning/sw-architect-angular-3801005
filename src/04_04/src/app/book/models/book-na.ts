import { Book } from './book';

export const bookNa: () => Book = () => {
  const na = 'n/a';

  return {
    abstract: na,
    author: na,
    cover: na,
    isbn: na,
    title: na,
    subtitle: na,
    numPages: 0,
    publisher: { name: na, url: na }
  };
};
