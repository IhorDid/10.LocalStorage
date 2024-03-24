// console.log(localStorage);

// localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 }));

// const savedData = localStorage.getItem('my-data');
// console.log('savedData', savedData);

// const parsedData = JSON.parse(savedData);
// console.log('parsedData', parsedData);

// const users = [
//   {
//     name: 'Mango',
//     age: 2,
//   },
//   {
//     name: 'Poly',
//     age: 4,
//   },
//   {
//     name: 'Alice',
//     age: 6,
//   },
//   {
//     name: 'Pite',
//     age: 8,
//   },
// ];

const users = {
  name: 'Mango',
  age: 2,
};

// const userPr = JSON.parse(JSON.stringify(users));
const userPr = { name: 'Mango', age: 2 };
const userJs = JSON.stringify(userPr);
console.log(typeof userJs);
console.log(typeof userPr);
