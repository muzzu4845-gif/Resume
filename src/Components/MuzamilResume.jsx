

import React from "react";

export default function MuzamilResume() {
  return (
    <div className="p-4">

      {/* HEADER */}
      <h1 className="font-bold text-center text-2xl sm:text-3xl">
        Muzamil F
      </h1>

      <h2 className="text-center text-xs sm:text-sm text-gray-600 flex flex-wrap justify-center gap-x-2 mt-1">
        <span>+91 7695901670</span>
        <span>|</span>
        <span className="text-blue-950 hover:underline"> <a href="https://mail.google.com/mail/u/1/#sent">muzzu4845@gmail.com</a></span>
        <span>|</span>
        <span>Vellore, Tirupattur</span>
      </h2>

      <div className="flex justify-center gap-3 sm:gap-4 mt-2 text-sm sm:text-base">
        <a href="https://www.linkedin.com/feed/" className="hover:underline text-blue-950">LinkedIn</a>
        <a href="https://github.com/muzzu4845-gif/Travel-agency" className="hover:underline text-blue-950 ">Github</a>
        <a href="https://profile-nu-tan.vercel.app/" className="hover:underline text-blue-950">Portfolio</a>
      </div>

      {/* OBJECTIVE */}
      <div className="mt-6 max-w-2xl mx-auto">
        <h3 className="font-bold text-lg sm:text-xl mb-1 uppercase text-center sm:text-left">
          Objective
        </h3>
        <p className="text-xs sm:text-sm leading-relaxed text-gray-700 text-center sm:text-left">
          Front-end developer focused on building fast, clean, and scalable UI for real product environments using React and modern JavaScript. Strong in component-based architecture, responsive layouts, and performance optimization. Experienced in API integration and UI engineering, aligned with ownership-driven product development principles.
        </p>
      </div>

      {/* SKILLS */}
      <div className="mt-6 max-w-2xl mx-auto">
        <h3 className="font-bold text-lg sm:text-xl mb-1 uppercase text-center sm:text-left">
          Skills
        </h3>
        <ul className="text-xs sm:text-sm leading-relaxed text-gray-700 space-y-1">
          <li>• Languages: JavaScript (ES6+), TypeScript, HTML5, CSS3</li>
          <li>• Frameworks: React.js, Next.js</li>
          <li>• UI Libraries: Tailwind CSS, Bootstrap</li>
          <li>• Tools: Git, GitHub, VS Code, Postman</li>
          <li>• Build Tools: Vite, npm, Yarn</li>
          <li>• API Work: REST APIs, Axios, Fetch</li>
          <li>• Specialties: Component architecture, Responsive design, UI alignment, Responsive layouts</li>
        </ul>
      </div>

      {/* WORK EXPERIENCE */}
      <div className="mt-6 max-w-2xl mx-auto">
        <h3 className="font-bold text-lg sm:text-xl mb-1 uppercase text-center sm:text-left">
          Work Experience
        </h3>

        <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start text-base sm:text-lg font-bold">
          <span>Frontend Developer Intern | <span className="text-gray-800">WHY Global Services</span></span>
          <span className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-0">March 2025 – Present</span>
        </div>

        <ul className="mt-3 text-xs sm:text-sm leading-relaxed text-gray-700 space-y-1">
          <li>• Built responsive, dynamic web applications using Next.js, ReactJS, Tailwind CSS, TypeScript, HTML, CSS, and   JavaScript.</li>
          <li>• Designed intuitive user interfaces and prototypes using Figma, improving overall user experience.</li>
          <li>• Managed version control and collaborated on team projects using Git and GitHub.</li>
          <li>• Completed 9 months of hands-on training, contributing to real projects and applying modern frontend best practices.</li>
          <li className="pt-1 font-medium">Tech Stack: Next.js, ReactJS, Tailwind CSS, TypeScript, HTML, CSS, JavaScript, Figma, Git, GitHub</li>
        </ul>
      </div>

      {/* PROJECTS */}
      <div className="mt-6 max-w-2xl mx-auto pt-5">
        <h3 className="font-bold text-lg sm:text-xl mb-1 uppercase text-center sm:text-left  md:text-center">
          Project
        </h3>

        <h4 className="font-bold text-base sm:text-lg text-center sm:text-left mt-2">
          TRIPZY – Tour Application Website (Group Project)
        </h4>

        <ul className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-700 space-y-1">
          <li>• Built the frontend for a travel booking platform with responsive UI using ReactJS and Tailwind CSS.</li>
          <li>• Implemented features for exploring local/national tours, viewing packages, and comparing prices.</li>
          <li>• Ensured smooth user experience with optimized components and clean state management.</li>
          <li>• Collaborated with the backend team to integrate APIs built with Node.js and MongoDB.</li>
        </ul>
      </div>

      <div className="mt-6 max-w-2xl mx-auto">
        <h4 className="font-bold text-base sm:text-lg text-center sm:text-left">
          LUXURY-WATCH – E-commerce Website (Individual Project)
        </h4>

        <ul className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-700 space-y-1">
          <li>• Developed a fully responsive e-commerce site for luxury watches using ReactJS with Tailwind CSS.</li>
          <li>• Built core features including product browsing, product detail pages, shopping cart, and checkout flow.</li>
          <li>• Designed a clean, high-end UI focused on usability and smooth customer interaction.</li>
          <li>• Optimized components for faster load time and better overall user experience.</li>
          <li className="pt-1 font-medium">Tech Stack: HTML, CSS, JavaScript, ReactJS, Tailwind CSS, Bootstrap</li>
        </ul>
      </div>

      <div className="mt-6 max-w-2xl mx-auto">
        <h4 className="font-bold text-base sm:text-lg uppercase text-center sm:text-left">
          Personal Portfolio
        </h4>

        <ul className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-700 space-y-1">
          <li>• Developed a responsive personal portfolio to showcase projects, skills, and experience using ReactJS and Tailwind CSS.</li>
          <li>• Built reusable components and clean page structures for smooth navigation and consistent UI.</li>
          <li>• Implemented a mobile-first layout ensuring fast performance across all screen sizes.</li>
          <li>• Added interactive sections such as project previews, skill highlights, and a functional contact form.</li>
          <li>• Optimized the site for SEO, accessibility, and improved load times.</li>
        </ul>
      </div>

      {/* EDUCATION */}
      <div className="mt-6 max-w-2xl mx-auto">
        <h3 className="font-bold text-lg sm:text-xl mb-1 uppercase text-center sm:text-left">
          Education
        </h3>

        <div className="text-center sm:text-left text-base sm:text-lg font-semibold mt-2">
          <p>Islamiah College (Autonomous), Vaniyambadi <span className="block sm:inline text-xs sm:text-sm text-gray-600">2021 - 2024</span></p>
          <p className="text-xs sm:text-sm text-gray-700">Bachelor of Computer Science; CGPA: 7.5</p>
        </div>

        <div className="text-center sm:text-left text-base sm:text-lg font-semibold mt-4">
          <p>Osmania Matriculation Higher Secondary School, Tirupathur <span className="block sm:inline text-xs sm:text-sm text-gray-600">2019 - 2021</span></p>
          <p className="text-xs sm:text-sm text-gray-700">12th; Percentage: 70%</p>
        </div>

        <div className="text-center sm:text-left text-base sm:text-lg font-semibold mt-4">
          <p>Osmania Matriculation Higher Secondary School, Tirupathur <span className="block sm:inline text-xs sm:text-sm text-gray-600">2018 - 2019</span></p>
          <p className="text-xs sm:text-sm text-gray-700">10th; Percentage: 58%</p>
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="mt-6 max-w-2xl mx-auto text-center sm:text-left">
        <h3 className="font-bold text-lg sm:text-xl mb-2 uppercase">
          Certification
        </h3>
        <ul className="text-xs sm:text-sm leading-relaxed text-gray-700 space-y-1">
          <li>• MERN Stack — Certified by WHYTAP</li>
          <li>• ReactJS Workshop — Sacred Heart College (Autonomous)</li>
          <li>• Data Analytics Workshop — Islamiah College (Autonomous)</li>
        </ul>
      </div>

      {/* LANGUAGES */}
      <div className="mt-6 max-w-2xl mx-auto text-center sm:text-left">
        <h3 className="font-bold text-lg sm:text-xl mb-2 uppercase">
          Languages Known
        </h3>
        <ul className="text-xs sm:text-sm text-gray-700">
          <li>• English</li>
          <li>• Tamil</li>
          <li>• Hindi</li>
        </ul>
      </div>

      {/* DECLARATION */}
      <div className="mt-6 max-w-2xl mx-auto text-center sm:text-left">
        <h3 className="font-bold text-lg sm:text-xl mb-2 uppercase">
          Declaration
        </h3>
        <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
          I hereby declare that the given information provided is true and correct to the best of my knowledge and brief.
        </p>
      </div>

    </div>
  );
}
