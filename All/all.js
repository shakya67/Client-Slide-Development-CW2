// $(document).ready(function () {
//       // Navbar toggle for mobile menu
//       $("#menu-toggle").click(function () {
//         $("#nav-links").toggleClass("active");
//       });

//       // Toggle navbar background image on scroll
//      $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//     $('.navbar').addClass('scrolled');
//      } else {
//     $('.navbar').removeClass('scrolled');
//      }
//     }
//    );

//    $(document).ready(function() {
//       // Show or hide car button
//       $(window).scroll(function() {
//         if ($(this).scrollTop() > 200) {
//           $("#backToTop").fadeIn();
//         } else {
//           $("#backToTop").fadeOut();
//         }
//       });

//       // Animate car going upward, then scroll page
//       $("#backToTop").click(function() {
//         $(this).animate(
//           { bottom: "100%" }, 800, // move upward
//           function() {
//             $("html, body").animate({ scrollTop: 0 }, 600); // scroll to top
//             $(this).css("bottom", "20px"); // reset car position
//           }
//         );
//       });
//     });

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
  });

  // Show or hide car button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#backToTop").fadeIn();
    } else {
      $("#backToTop").fadeOut();
    }
  });

  // Animate car going upward, then scroll page
  $("#backToTop").click(function () {
    $(this).animate(
      { bottom: "100%" }, 800,
      function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        $(this).css("bottom", "20px");
      }
    );
  });
});
