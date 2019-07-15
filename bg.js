const bodybg=document.getElementById('bodybg');
const color1=document.getElementById('color1');
const color2=document.getElementById('color2');
const show=document.getElementById('show');

function setbgcolor(){
	bodybg.style.background = 
	`linear-gradient(to right,${color1.value},${color2.value})`;
    show.textContent=`copy the code:linear-gradient(to right,${color1.value},${color2.value})`;
};

show.textContent=`copy the code:linear-gradient(to right,${color1.value},${color2.value})`;
color1.addEventListener('input',setbgcolor);
color2.addEventListener('input',setbgcolor);


