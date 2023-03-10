// Write your code here!

//remove id main.
const mainElement = document.querySelector('#main');
mainElement.remove();

//create h1 element with newHeader variable.
const newHeader = document.createElement('h1');

//set id to victory.
newHeader.setAttribute('id','victory');

//add text to newheader variable
newHeader.textContent = 'JOB is the champion';




