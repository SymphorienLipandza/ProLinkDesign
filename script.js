document.addEventListener('DOMContentLoaded', function () {
    // Function to show custom alert
    function showCustomAlert(message) {
        const customAlert = document.getElementById('custom-alert');
        const customAlertMessage = document.getElementById('custom-alert-message');

        if (customAlert && customAlertMessage) {
            customAlertMessage.textContent = message; // Set the message
            customAlert.style.display = 'flex'; // Show the modal

            // Close the modal when the "OK" button is clicked
            const closeButton = document.getElementById('custom-alert-close');
            if (closeButton) {
                closeButton.addEventListener('click', () => {
                    customAlert.style.display = 'none'; // Hide the modal
                });
            }
        }
    }

    // Function to handle the "Enroll Now" button click
    function enrollCourse(courseName) {
        console.log('Enroll button clicked for:', courseName); // Debugging line
        const modal = document.getElementById('enrollment-modal');
        if (modal) {
            modal.style.display = 'block';
        }

        const courseNameInput = document.getElementById('course-name');
        if (courseNameInput) {
            courseNameInput.value = courseName;
        }
    }

    // Function to close the enrollment form modal
    function closeEnrollmentModal() {
        const modal = document.getElementById('enrollment-modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Attach the event listener to all "Enroll Now" buttons
    const enrollButtons = document.querySelectorAll('.enroll-button');
    enrollButtons.forEach(button => {
        button.addEventListener('click', function () {
            const courseName = this.getAttribute('data-course-name'); // Get the course name from the data attribute
            enrollCourse(courseName); // Pass the course name to the enrollCourse function
        });
    });

    // Handle enrollment form submission
    const enrollmentForm = document.getElementById('enrollment-form');
    if (enrollmentForm) {
        enrollmentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);
            const formObject = Object.fromEntries(formData.entries());
            console.log('Enrollment Form Data:', formObject);

            // Send email to the user
            emailjs.send('service_p015adj', 'template_atm6tuu', {
                to_name: formObject.name,
                to_email: formObject.email,
                course_name: formObject['course-name']
            })
            .then(function (response) {
                console.log('Email sent to user:', response);
            }, function (error) {
                console.error('Failed to send email to user:', error);
            });

            // Send email to yourself (admin) - Enrollment Notification Only
            emailjs.send('service_p015adj', 'template_ohhjsr3', {
                user_name: formObject.name,
                user_email: formObject.email,
                user_phone: formObject.phone || '', // Ensure phone is included, even if empty
                user_profession: formObject.profession || '', // Ensure profession is included, even if empty
                course_name: formObject['course-name']
            })
            .then(function (response) {
                console.log('Email sent to admin:', response);
            }, function (error) {
                console.error('Failed to send email to admin:', error);
            });

            // Display success message using custom alert
            showCustomAlert(`Thank you, ${formObject.name}! You have successfully enrolled in "${formObject['course-name']}".`);

            closeEnrollmentModal();
            this.reset(); // Reset the form
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the default form submission

            // Display success message using custom alert
            showCustomAlert('Message envoyé avec succès !');

            // Optionally, reset the form after submission
            contactForm.reset();
        });
    }

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function (e) {
        const modal = document.getElementById('enrollment-modal');
        if (e.target === modal) {
            closeEnrollmentModal();
        }
    });

    // Close the modal when the close button is clicked
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', closeEnrollmentModal);
    }

    // Back to Top Button Functionality
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
        });

        // Show/hide the button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block'; // Show the button
            } else {
                backToTopButton.style.display = 'none'; // Hide the button
            }
        });
    }
    //  Homepage redirector
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', () => {
        window.location.href = 'index.html';
        });
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav    = document.getElementById('main-nav');
    const languageToggle = document.querySelector('.language-toggle');
    const menuIcon = menuToggle.querySelector('i');

    if (menuToggle && mainNav) {
     menuToggle.addEventListener('click', () => {
       mainNav.classList.toggle('active');
        // Check if screen width is 768px or less
       if (window.innerWidth <= 768) {
        if (mainNav.classList.contains('active')) {
          languageToggle.style.display = 'none';
          menuIcon.classList.remove('fa-bars');
          menuIcon.classList.add('fa-times');
        } else {
          languageToggle.style.display = 'block';
          menuIcon.classList.remove('fa-times');
          menuIcon.classList.add('fa-bars');
        }
      }
     });
    }

    
    // Compact language labels on small screens
    function updateLangLabels() {
        const sel = document.getElementById('language-select');
        if (!sel) return;
    
        if (window.innerWidth <= 768) {
        sel.options[0].text = 'EN';
        sel.options[1].text = 'FR';
        } else {
        sel.options[0].text = 'English';
        sel.options[1].text = 'Français';
        }
    }
    // Run on load...
    updateLangLabels();
    // ...and on window resize
    window.addEventListener('resize', updateLangLabels);
    
    function adjustContactText() {
        const width = window.innerWidth;
        const emailLink = document.querySelector('.contact-info1 a[href^="mailto"]');
        const whatsappLink = document.querySelector('.contact-info1 a[href^="tel"]');

        if (width >= 760 && width <= 1200) {
            if (emailLink) emailLink.innerHTML = '<i class="fas fa-envelope icon"></i>';
            if (whatsappLink) whatsappLink.innerHTML = '<i class="fab fa-whatsapp icon"></i>';
        } else {
            if (emailLink) emailLink.innerHTML = '<i class="fas fa-envelope icon"></i> Email';
            if (whatsappLink) whatsappLink.innerHTML = '<i class="fab fa-whatsapp icon"></i> WhatsApp';
        }
    }
    window.addEventListener('load', adjustContactText);
    window.addEventListener('resize', adjustContactText);

});