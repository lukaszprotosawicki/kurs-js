var olp1 = document.getElementById('olp1'),
    moz = document.getElementById('moz');

 function ala(){
    olp1.classList.toggle('faded');
     moz.innerHTML = moz.innerHTML == "rozwiń" ? 'zwiń' : 'rozwiń';
   }

moz.addEventListener('click',function(){
  ala();
});