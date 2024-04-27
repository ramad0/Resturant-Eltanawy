document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };
  
    // When the user clicks on the button, scroll to the top of the document
    scrollToTopBtn.onclick = function() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
  });

const links = document.getElementById('links');
const list = document.getElementById('list');
const span1 = document.getElementById('span1');


links.addEventListener('click', function() {
  if (list.style.display === 'none') {
    list.style.display = 'block';
    span1.style.width= '100%' ;
  } else {
    list.style.display = 'none';
    span1.style.width= '70%' ;
  }
});
const link = document.getElementById('links-2');
const lists = document.getElementById('list-2');
const span2 = document.getElementById('span2');

link.addEventListener('click', function() {
  if (lists.style.display === 'none') {
    lists.style.display = 'block';
    span2.style.width= '100%' ;
  } else {
    lists.style.display = 'none';
    span2.style.width= '70%' ;
  }
});

