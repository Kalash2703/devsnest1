const bookedSeatsElement= document.querySelector('.bookseats');
const remainingSeatsElement=document.querySelector('.remainingseats');
const boxs=document.querySelectorAll('.box');
var bookSeats=0;
var remainingSeats =63;
bookedSeatsElement.innerText=bookSeats;
remainingSeatsElement.innerText=remainingSeats;
boxs.forEach((box)=>{
	box.addEventListener("click",(e)=>{
		if(box.classList.contains('boxclicked')){
			box.classList.remove('boxclicked')
      bookSeats-=1;
      remainingSeats+=1;
		}
		else{
				box.classList.add('boxclicked')
       bookSeats+=1;
      remainingSeats-=1;
		}
    bookedSeatsElement.innerText=bookSeats;
    remainingSeatsElement.innerText=remainingSeats;
	})
})
