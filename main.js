


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
     document.getElementById('sendButton').addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the form from submitting for demonstration purposes
    
      // Function to create a random emoji
      function randomEmoji() {
        const emojis = ['✨',  ];
        return emojis[Math.floor(Math.random() * emojis.length)];
      }
    
      // Create 20 emoji elements
      for (let i = 0; i < 10; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = randomEmoji();
        document.body.appendChild(emoji);
    
        // Random position on the page
        emoji.style.left = Math.random() * window.innerWidth + 'px';
        emoji.style.top = Math.random() * window.innerHeight + 'px';
    
        // Add animation delay
        emoji.style.transitionDelay = `${0.2 * i}s`;
    
        // Trigger the animation
        setTimeout(() => {
          emoji.style.opacity = 1;
        }, 10);
    
        // Remove the emoji after the animation
        setTimeout(() => {
          emoji.style.opacity = 0;
          emoji.addEventListener('transitionend', () => {
            emoji.parentNode.removeChild(emoji);
          });
        }, 1000 + 0.2 * i * 1000);
      }
    });
    document.querySelector('.hamburger-menu').addEventListener('click', function() {
      document.querySelector('.nav-links').classList.toggle('open');
  });
          