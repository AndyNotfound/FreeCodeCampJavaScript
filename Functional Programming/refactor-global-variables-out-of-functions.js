// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr ,bookName) {
  const newArr = [...arr, bookName]
  return newArr;  
}

function remove(arr, bookName) {
  const newArr = [...arr];
  const book_index = newArr.indexOf(bookName);
  console.log(book_index);
  if (book_index >= 0) {
    newArr.splice(book_index, 1);
    return newArr;
    }
}

console.log(add(bookList, "A Brief History of Time"))
console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"))