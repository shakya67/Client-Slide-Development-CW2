$(document).ready(function () {
      // Navbar toggle for mobile menu
      $("#menu-toggle").click(function () {
        $("#nav-links").toggleClass("active");
      });

      // Toggle navbar background image on scroll
     $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
    $('.navbar').addClass('scrolled');
     } else {
    $('.navbar').removeClass('scrolled');
     }
    }
   );


      // Slideshow fade in/out with jQuery
      let slides = $(".slideshow img");
      let index = 0;

      // Initially show first image with opacity 1 (already set via .active class)
      slides.css("opacity", 0).eq(index).css("opacity", 1);

      setInterval(function () {
        // Fade out current slide
        slides.eq(index).animate({ opacity: 0 }, 1000);
        // Next slide index
        index = (index + 1) % slides.length;
        // Fade in next slide
        slides.eq(index).animate({ opacity: 1 }, 1000);
      }, 4000);

      // Show overlay with fade-in effect
      setTimeout(function () {
        $("#hero-overlay").addClass("show");
      }, 1000);

      // Typed.js animation
      new Typed(".typing", {
        strings: ["Luxury", "Power", "Innovation"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
      });
    });


    $(document).ready(function() {
      // Show or hide car button
      $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
          $("#backToTop").fadeIn();
        } else {
          $("#backToTop").fadeOut();
        }
      });

      // Animate car going upward, then scroll page
      $("#backToTop").click(function() {
        $(this).animate(
          { bottom: "100%" }, 800, // move upward
          function() {
            $("html, body").animate({ scrollTop: 0 }, 600); // scroll to top
            $(this).css("bottom", "20px"); // reset car position
          }
        );
      });
    });