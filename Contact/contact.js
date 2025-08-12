$(document).ready(function() {
            // Mobile menu toggle
            $("#menu-toggle").click(function() {
                $("#nav-links").toggleClass("active");
            });

            // Form validation
            $("#contactForm").submit(function(e) {
                e.preventDefault();
                let isValid = true;
                
                // Reset error messages
                $(".error-message").text("");

                // Name validation
                const name = $("#name").val().trim();
                if (name.length < 2) {
                    $("#nameError").text("Please enter a valid name");
                    isValid = false;
                }

                // Email validation
                const email = $("#email").val().trim();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    $("#emailError").text("Please enter a valid email address");
                    isValid = false;
                }

                // Phone validation (if provided)
                const phone = $("#phone").val().trim();
                if (phone && !/^\+?\d{10,}$/.test(phone)) {
                    $("#phoneError").text("Please enter a valid phone number");
                    isValid = false;
                }

                // Subject validation
                if (!$("#subject").val()) {
                    $("#subjectError").text("Please select a subject");
                    isValid = false;
                }

                // Message validation
                const message = $("#message").val().trim();
                if (message.length < 10) {
                    $("#messageError").text("Message must be at least 10 characters long");
                    isValid = false;
                }

                // If form is valid, show thank you modal
                if (isValid) {
                    $("#thankYouModal").fadeIn();
                    this.reset();
                }
            });

            // Modal close button
            $(".modal-close-btn").click(function() {
                $("#thankYouModal").fadeOut();
            });

            // Close modal when clicking outside
            $(window).click(function(e) {
                if ($(e.target).hasClass('modal')) {
                    $("#thankYouModal").fadeOut();
                }
            });

            // Input animation
            $(".input-group input, .input-group textarea, .input-group select").focus(function() {
                $(this).parent().addClass("focused");
            }).blur(function() {
                if (!$(this).val()) {
                    $(this).parent().removeClass("focused");
                }
            });
        });