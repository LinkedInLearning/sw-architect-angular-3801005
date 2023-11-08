export interface Book {
  id?: string;
  title: string;
  subtitle: string;
  isbn: string;
  cover: string;
  abstract: string;
  numPages: number;
  author: string;
  publisher: {
    name: string;
    url: string;
  };
}
