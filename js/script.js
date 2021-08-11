const slider = document.querySelector('.slider')

const dots = document.querySelector('.dots')

const btnNext = document.querySelector('.next')

const btnBack = document.querySelector('.back')

let index = 0;


for (let i = 0; i < dots.children.length; i++) {
	dots.children[i].addEventListener('click',()=>{
		changeSlide(i)
	})
}

btnBack.addEventListener('click',()=>{
	if (index == 0) index = slider.children.length-1;
	else index--
	changeSlide(index)
})


btnNext.addEventListener('click',()=>{
	if (index == slider.children.length-1) index = 0;
	else index++
	changeSlide(index)
})

const changeSlide = (w)=>{
	width = slider.children[0].clientWidth
	slider.style.transform = "translateX(-"+width * w+"px)"
	index = w
	setActive(index)
}

const setActive = (x)=>{
	for (var i = 0; i < dots.children.length; i++) {
		dots.children[i].classList.remove('active')
	}
	dots.children[x].classList.add('active')
}

