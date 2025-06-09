document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour afficher une alerte personnalisée
    function showCustomAlert(message) {
        const customAlert = document.getElementById('custom-alert');
        const customAlertMessage = document.getElementById('custom-alert-message');

        if (customAlert && customAlertMessage) {
            customAlertMessage.textContent = message; // Définir le message
            customAlert.style.display = 'flex'; // Afficher la modale

            // Fermer la modale lorsque le bouton "OK" est cliqué
            const closeButton = document.getElementById('custom-alert-close');
            if (closeButton) {
                closeButton.addEventListener('click', () => {
                    customAlert.style.display = 'none'; // Masquer la modale
                });
            }
        }
    }

    // Fonction pour gérer le clic sur le bouton "S'inscrire maintenant"
    function enrollCourse(courseName) {
        console.log('Bouton d\'inscription cliqué pour :', courseName); // Ligne de débogage
        const modal = document.getElementById('enrollment-modal');
        if (modal) {
            modal.style.display = 'block';
        }

        const courseNameInput = document.getElementById('course-name');
        if (courseNameInput) {
            courseNameInput.value = courseName;
        }
    }

    // Fonction pour fermer la modale du formulaire d'inscription
    function closeEnrollmentModal() {
        const modal = document.getElementById('enrollment-modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Attacher l'écouteur d'événement à tous les boutons "S'inscrire maintenant"
    const enrollButtons = document.querySelectorAll('.enroll-button');
    enrollButtons.forEach(button => {
        button.addEventListener('click', function () {
            const courseName = this.getAttribute('data-course-name'); // Obtenir le nom du cours à partir de l'attribut data
            enrollCourse(courseName); // Passer le nom du cours à la fonction enrollCourse
        });
    });

    // Gérer la soumission du formulaire d'inscription
    const enrollmentForm = document.getElementById('enrollment-form');
    if (enrollmentForm) {
        enrollmentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);
            const formObject = Object.fromEntries(formData.entries());
            console.log('Données du formulaire d\'inscription :', formObject);

            // Envoyer un e-mail à l'utilisateur
            emailjs.send('service_p015adj', 'template_atm6tuu', {
                to_name: formObject.name,
                to_email: formObject.email,
                course_name: formObject['course-name']
            })
            .then(function (response) {
                console.log('E-mail envoyé à l\'utilisateur :', response);
            }, function (error) {
                console.error('Échec de l\'envoi de l\'e-mail à l\'utilisateur :', error);
            });

            // Envoyer un e-mail à vous-même (admin) - Notification d'inscription uniquement
            emailjs.send('service_p015adj', 'template_ohhjsr3', {
                user_name: formObject.name,
                user_email: formObject.email,
                user_phone: formObject.phone || '', // S'assurer que le téléphone est inclus, même s'il est vide
                user_profession: formObject.profession || '', // S'assurer que la profession est incluse, même si elle est vide
                course_name: formObject['course-name']
            })
            .then(function (response) {
                console.log('E-mail envoyé à l\'admin :', response);
            }, function (error) {
                console.error('Échec de l\'envoi de l\'e-mail à l\'admin :', error);
            });

            // Afficher un message de succès en utilisant l'alerte personnalisée
            showCustomAlert(`Merci, ${formObject.name} ! Vous vous êtes inscrit avec succès à "${formObject['course-name']}".`);

            closeEnrollmentModal();
            this.reset(); // Réinitialiser le formulaire
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Empêcher la soumission par défaut du formulaire

            // Afficher un message de succès en utilisant l'alerte personnalisée
            showCustomAlert('Message envoyé avec succès !');

            // Réinitialiser le formulaire après la soumission (optionnel)
            contactForm.reset();
        });
    }

    // Fermer la modale si l'utilisateur clique en dehors de celle-ci
    window.addEventListener('click', function (e) {
        const modal = document.getElementById('enrollment-modal');
        if (e.target === modal) {
            closeEnrollmentModal();
        }
    });

    // Fermer la modale lorsque le bouton de fermeture est cliqué
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', closeEnrollmentModal);
    }

    // Fonctionnalité du bouton "Retour en haut"
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement fluide vers le haut
        });

        // Afficher/masquer le bouton en fonction de la position de défilement
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block'; // Afficher le bouton
            } else {
                backToTopButton.style.display = 'none'; // Masquer le bouton
            }
        });
    }

    // Redirection vers la page d'accueil
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', () => {
        window.location.href = 'index-fr.html';
        });
    }

    // Menu mobile
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav    = document.getElementById('main-nav');
    const languageToggle = document.querySelector('.language-toggle');
    const menuIcon = menuToggle.querySelector('i');

    if (menuToggle && mainNav) {
     menuToggle.addEventListener('click', () => {
       mainNav.classList.toggle('active');
        // Vérifier si la largeur de l'écran est de 768px ou moins
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

    // Étiquettes de langue compactes sur les petits écrans
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
    // Exécuter au chargement...
    updateLangLabels();
    // ...et lors du redimensionnement de la fenêtre
    window.addEventListener('resize', updateLangLabels);
    
    // Ajustement du texte de contact pour les différentes tailles d'écran
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