// const input = document.querySelector('.input');
// const btn = document.querySelector('.btn');
// const body = document.querySelector('body');

// let inputValue = '';

// btn.addEventListener('click', () => {
//   inputValue = input.value;
//   const containerElem = document.createElement('div');
//   const textElem = document.createElement('span');
//   const deleteElem = document.createElement('button');
//   deleteElem.setAttribute('class','deleteBtn');
//   deleteElem.innerText = '삭제';
//   deleteElem.addEventListener('click', (e) => {
//     body.removeChild(e.target.parentNode);
//   })
//   textElem.textContent = inputValue;
//   containerElem.appendChild(textElem);
//   containerElem.appendChild(deleteElem);
//   body.appendChild(containerElem);
//   input.value = '';
// });


const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const body = document.querySelector('body');

let inputValue = '';

btn.addEventListener('click', () => {
  inputValue = input.value;

  const containerElem = document.createElement('div');
  const textElem = document.createElement('span');
  const deleteElem = document.createElement('button');

  containerElem.setAttribute('class', 'container');
  deleteElem.setAttribute('class','deleteBtn');

  deleteElem.innerText = '삭제';
  textElem.textContent = inputValue;

  containerElem.appendChild(textElem);
  containerElem.appendChild(deleteElem);
  body.appendChild(containerElem);
  input.value = '';
});

body.addEventListener('click', (e) => {
  if(e.target.className !== 'deleteBtn') return;
  body.removeChild(e.target.parentNode);
});


