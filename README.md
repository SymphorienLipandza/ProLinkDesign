# ProlikDesign Training Center

Welcome to the **ProlikDesign Training Center** project! This is a responsive website designed to showcase the training programs offered by ProlikDesign, focusing on CAD, architecture, structure, and rendering courses. The website is available in both English and French.

## Features

- **Responsive Design**: The website is fully responsive and works seamlessly on desktops, tablets, and mobile devices.
- **Multi-language Support**: Users can switch between English and French versions of the website.
- **Course Listings**: Detailed information about various courses, including architecture, structure, and rendering programs.
- **Enrollment System**: Users can enroll in courses through a modal form, which sends enrollment details via email using EmailJS.
- **Contact Form**: A functional contact form powered by **Formspree** for users to send inquiries.
- **Interactive Elements**: Smooth scrolling, back-to-top button, and custom alert modals for a better user experience.
- **Social Media Integration**: Links to Facebook, Twitter, and LinkedIn for easy social media engagement.

## Technologies Used

- **Frontend**:
  - HTML5
  - CSS3 (with Flexbox and Grid)
  - JavaScript (for interactivity and form handling)
- **Third-party Libraries**:
  - [Font Awesome](https://fontawesome.com/) for icons.
  - [Google Fonts](https://fonts.google.com/) for typography.
  - [EmailJS](https://www.emailjs.com/) for sending emails from the enrollment form.
  - [Formspree](https://formspree.io/) for handling the contact form submissions.
- **Other Tools**:
  - Google Maps for embedding the location.

## File Structure

```bash

prolikdesign-training-center/
├── index.html              # Homepage (English)
├── index-fr.html           # Homepage (French)
├── courses.html            # Courses page (English)
├── courses-fr.html         # Courses page (French)
├── about.html              # About Us page (English)
├── about-fr.html           # About Us page (French)
├── contact.html            # Contact page (English)
├── contact-fr.html         # Contact page (French)
├── style.css               # Main CSS file
├── course-details.css      # CSS for course detail pages
├── script.js               # JavaScript for English version
├── script-fr.js            # JavaScript for French version
├── img/                    # Folder for images
│   ├── revit.jpg           # Revit course image
│   ├── 3dsmax.jpg          # 3Ds Max course image
│   ├── autocad.jpg         # AutoCAD course image
│   ├── archicad.jpg        # Archicad course image
│   ├── graitec.jpg         # Graitec OMD course image
│   ├── revit_structure.jpg # Revit Structure course image
│   ├── etabs.png           # ETABS course image
│   ├── robot_structure.jpg # Robot Structure course image
│   ├── v-ray3dsmax.jpg     # V-ray for 3Ds Max course image
│   ├── Enscape.webp        # Enscape 3D course image
│   ├── twinmotion.jpg      # Twinmotion course image
│   └── instructor.jpg      # Instructor image
└── README.md               # Project documentation

```markdown
```

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/prolikdesign-training-center.git
   cd prolikdesign-training-center
   ```

2. **Open the Project**:
   - Open the `index.html` file in your browser to view the English version.
   - Open the `index-fr.html` file to view the French version.

3. **EmailJS Configuration**:
   - To enable email functionality for the enrollment form, sign up for an account at [EmailJS](https://www.emailjs.com/).
   - Replace the `service_p015adj` and template IDs in `script.js` and `script-fr.js` with your own EmailJS service and template IDs.

4. **Formspree Configuration**:
   - To enable the contact form, sign up for an account at [Formspree](https://formspree.io/).
   - Replace the Formspree form action URL in the `contact.html` and `contact-fr.html` files with your own Formspree endpoint.

5. **Customize the Content**:
   - Update the course details, images, and contact information as needed.
   - Modify the CSS files (`style.css` and `course-details.css`) to customize the design.

## Usage

- **Language Toggle**: Use the language dropdown in the header to switch between English and French.
- **Enroll in Courses**: Click the "Enroll Now" button on any course to open the enrollment form.
- **Contact Us**: Use the contact form on the Contact page to send inquiries (powered by Formspree).
- **Back to Top**: Click the floating button at the bottom-right corner to scroll back to the top of the page.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push them to your fork.
4. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
