/* 🐦🐦🐦🐦Materials and methods scrolling */
const btnScrollTo = document.querySelector('#section-9');
const section1 = document.querySelector('#section-9');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // Find the coordinates of learn more button
  console.log(e.target.getBoundingClientRect());
  // current scroll, it changes
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  //viewport

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  /* 🐦🐦🐦🐦Materials and methods scrolling */
  // scrolling to features part 1. way
  /* window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + pageYOffset,
    behavior: 'smooth', });
}); */

  // 2. way
  section1.scrollIntoView({ behavior: 'smooth' });
});

/* 🐦🐦🐦🐦results and discussion scrolling*/
const btnScrollToR = document.querySelector('#section-r1');
const sectionR = document.querySelector('#section-r1');

btnScrollToR.addEventListener('click', function (e) {
  const s1coordsR = sectionR.getBoundingClientRect();
  console.log(s1coordsR);
  // Find the coordinates of learn more button
  console.log(e.target.getBoundingClientRect());
  // current scroll, it changes
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  //viewport

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  /* 🐦🐦🐦🐦 go to top of page */
  // scrolling to features part 1. way
  /* window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + pageYOffset,
    behavior: 'smooth', });
}); */

  // 2. way
  sectionR.scrollIntoView({ behavior: 'smooth' });
});
//Get the button
var mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
