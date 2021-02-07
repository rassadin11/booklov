const animItems = document.querySelectorAll('.anim-items');

if ( && document.body.clientWidth <= 992 ) {
	for (let elem of animItems) {
		elem.classList.remove(.anim-items);
	}
}

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);

	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if (!animItem.classList.contains('prove')) {
				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('active');
					animItem.classList.add('prove');
				} else {
					animItem.classList.remove("active");
				}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
			  scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		return {
			top: rect.top + scrollTop,
			left: rect.left + scrollLeft,
		}
	}

	animOnScroll();
};

if (document.body.clientWidth <= 768) {
	let elems = document.querySelectorAll('.advantage');
	if (elems.length % 2 != 0) {
		elems[elems.length - 1].classList.add('active');
	}
}

let section = document.querySelector('.section');

if (document.body.clientWidth > 1024) {
	section.addEventListener('mousemove', (event) => {
		let target = event.target;
			partItem = document.querySelectorAll('.part-item__main-icon');

		for (let elem of partItem) {
			if (target == elem) {
				let figure = elem.parentElement.parentElement;
					figureElem = figure.querySelector('.part-item__oval')
				if (figureElem) {
					figureElem.classList.add('hover')
				}
			}
		}
	})

	section.addEventListener('mouseout', (event) => {
		let target = event.target;
			partItem = document.querySelectorAll('.part-item__main-icon');

		for (let elem of partItem) {
			if (target == elem) {
				let figure = elem.parentElement.parentElement;
					figureElem = figure.querySelector('.part-item__oval')
				if (figureElem.classList.contains('hover')) {
					figureElem.classList.remove('hover')
				}
			}
		}
	})
}
