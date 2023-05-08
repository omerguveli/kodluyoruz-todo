const writeInput = document.querySelector('.text')
const button = document.querySelector('#button')
const ListInput = document.querySelector('.list')
const closeButon = document.querySelector('.close')
const form = document.querySelector('.input-group');

button.addEventListener("click", function() {
  const value = writeInput.value;
  ListInput.innerHTML +=`<div class="container"  <div class="list">
  <ul>
          <div class="lico"> <li >${writeInput.value} </li> <span class="close"><i data-position="" class="fa-solid fa-xmark"></i> </span> </div>
           </ul>
           </div>
          </div>`  

          localStorage.setItem('value', writeInput.value);
});  



document.querySelector(".input-close").addEventListener("click", () => {
  writeInput.value = ""
})

