


document.addEventListener('DOMContentLoaded', () => {
       // Sticky Navbar
       window.onscroll = function() { scrollFunction() };
       function scrollFunction() {
         var navbar = document.getElementById("navbar");
         var sticky = navbar.offsetTop;
         if (window.pageYOffset >= sticky) {
           navbar.classList.add("sticky");
         } else {
           navbar.classList.remove("sticky");
         }
       }
      
     
       // Slideshows
       var slideIndex = 0;
       showSlides();
       function showSlides() {
         var i;
         var slides = document.getElementsByClassName("mySlides");
         for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";  
         }
         slideIndex++;
         if (slideIndex > slides.length) { slideIndex = 1; }
         slides[slideIndex-1].style.display = "block";  
         setTimeout(showSlides, 4000); 
       }
     
      
     
      
     
       // Highlight Card
       document.querySelectorAll('.category-card').forEach(function(card) {
         card.addEventListener('click', function() {
           highlightCard(this);
         });
       });
     
       function highlightCard(element) {
         document.querySelectorAll('.category-card').forEach(function(card) {
           card.classList.remove('highlighted');
         });
         element.classList.toggle('highlighted');
       }
     
          //Testimonial
         let currentIndex = 0;
         const testimonials = document.querySelectorAll('.testimonials .testimonial');
         const leftArrow = document.querySelector('.left-arrow');
         const rightArrow = document.querySelector('.right-arrow');
     
         function showTestimonial(index) {
             
             testimonials.forEach(function(testimonial) {
                 testimonial.classList.remove('active');
             });
     
             
             if (index >= testimonials.length) {
                 index = 0;
             } else if (index < 0) {
                 index = testimonials.length - 1;
             }
     
             testimonials[index].classList.add('active');
             currentIndex = index;
         }
     
         leftArrow.addEventListener('click', function() {
             showTestimonial(currentIndex - 1);
         });
     
         rightArrow.addEventListener('click', function() {
             showTestimonial(currentIndex + 1);
         });
     
         
         showTestimonial(currentIndex);
     });
     
          
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  