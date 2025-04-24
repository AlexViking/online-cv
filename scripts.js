document.addEventListener('DOMContentLoaded', function () {
	// Set current year in footer
	document.getElementById('current-year').textContent = new Date().getFullYear();

	// Data for the Career Journey Timeline
	const journeyData = [
		{
			year: '2008-2018',
			title: 'GIS Software Developer - Caucasus Online',
			description: 'Led a team of 10, developed 3D modeling solutions, implemented ArcGIS systems, and deployed fiber optic networks, increasing project efficiency by 30% and reducing ISP costs by 50%.',
			icon: '🌐'
		},
		{
			year: '2017',
			title: 'Certified Associate in Python',
			description: 'Completed intensive training in Python programming fundamentals, data structures, algorithms, and application development at Free University of Tbilisi.',
			icon: '🐍'
		},
		{
			year: '2019-2021',
			title: 'Full Stack Software Developer - Avalanche Labs',
			description: 'Developed web applications using JavaScript, Vue.js, Node.js, and PostgreSQL. Worked with AWS services and implemented RESTful APIs for frontend-backend communication.',
			icon: '💻'
		},
		{
			year: '2021-2022',
			title: 'Web Development Certifications',
			description: 'Obtained certifications in Responsive Web Design (RWD) and JavaScript Algorithms and Data Structures (JADS), expanding expertise in modern web technologies.',
			icon: '🏆'
		},
		{
			year: '2022-Present',
			title: 'Coding Instructor',
			description: 'Teaching coding courses covering HTML, CSS, JavaScript, Python, React Native, and TypeScript. Developing lesson plans and providing individualized mentoring to students.',
			icon: '👨‍🏫'
		},
		{
			year: '2022-Present',
			title: 'Angular Front-end Software Developer - UpSystems',
			description: 'Developing financial applications using TypeScript and Angular framework. Collaborating with backend teams and managing the full software development lifecycle.',
			icon: '⚛️'
		},
		{
			year: '2023-Present',
			title: 'Oracle DBA - UpSystems',
			description: 'Performing database administration including design, implementation, and optimization. Developing backup strategies and troubleshooting complex database issues.',
			icon: '🛢️'
		}
	];

	// Data for Work Experience
	const experienceData = [
		{
			title: 'Oracle DBA & Angular Front-end Software Developer',
			company: 'UpSystems',
			period: 'Dec 2022 - Present',
			description: 'Performing comprehensive database administration while simultaneously developing financial applications using TypeScript and Angular framework.',
			achievements: [
				'Developed and executed backup and recovery strategies to ensure data integrity and business continuity',
				'Troubleshot and resolved complex database issues, minimizing system downtime',
				'Collaborated with backend developers to ensure seamless integration between frontend and backend systems',
				'Managed the full software development lifecycle from concept to deployment'
			]
		},
		{
			title: 'Full Stack Software Developer',
			company: 'Avalanche Labs',
			period: 'Aug 2019 - Sep 2021',
			description: 'Developed and maintained both frontend and backend components of web applications using JavaScript, Vue.js, Node.js, and PostgreSQL.',
			achievements: [
				'Implemented and managed database systems using PostgreSQL for data storage and retrieval',
				'Worked with AWS services including S3 for file storage and management via CLI',
				'Developed RESTful APIs to facilitate communication between frontend and backend systems',
				'Managed complex engineering projects, overseeing the full lifecycle from product design to deployment'
			]
		},
		{
			title: 'GIS Software Developer',
			company: 'Caucasus Online',
			period: 'Aug 2008 - Sep 2018',
			description: 'Led a team in construction and design industries, developing 3D modeling solutions and implementing GIS systems.',
			achievements: [
				'Led a team of 10 professionals, managing project timelines and stakeholder relationships',
				'Utilized 3D modeling and CAD drafting software, increasing client satisfaction by 40%',
				'Introduced new methods for gathering land information using ArcGIS systems, increasing efficiency by 30%',
				'Deployed fiber optic networks resulting in a 50% reduction in internet service provider costs'
			]
		}
	];

	// Data for Education
	const educationData = [
		{
			degree: `Bachelor's degree in Cartography and Geodesy`,
			institution: 'DAUG, Tbilisi, GE',
			period: '2005 - 2007',
			description:
				`Geographic Information Science professional with expertise in cartography, map design, and GIS. 
				Strong background in geodesy, remote sensing, and geospatial data management. 
				Experienced in field surveys and spatial data analysis using specialized software for diverse applications.`
		},
		{
			degree: 'Enterprise System Design Associate',
			institution: 'ESRI, Tbilisi, GE',
			period: '2015',
			description:
				`GIS specialist with programming expertise in Python and Lisp. 
			Completed comprehensive 9-month training in data structures, algorithms, and application development. 
			Demonstrated strong problem-solving and software design skills through collaborative and independent projects.`
		},
		{
			degree: 'Certified Associate in Python',
			institution: 'Free University of Tbilisi, Tbilisi, GE',
			period: '2017',
			description:
				`Completed intensive 6-month programming bootcamp focused on Python development, data structures, and algorithms. 
			Strengthened problem-solving and debugging capabilities through diverse projects. 
			Enhanced technical collaboration skills through regular code reviews, pair programming, and presentations.`
		}
	];

	// Data for Projects
	const projectsData = [
		{
			title: 'TODO',
			description: 'A productivity application with drag-and-drop functionality, user collaboration, and real-time updates.',
			image: 'project2.jpg',
			tags: ['Angular', 'Material UI'],
			link: 'https://github.com/yourusername/task-manager'
		},
	];

	// Function to populate the Journey/Timeline section
	function populateJourney() {
		const timelineContainer = document.querySelector('.timeline');
		timelineContainer.innerHTML = '';

		journeyData.forEach(item => {
			const entryElement = document.createElement('div');
			entryElement.className = 'timeline-entry';

			entryElement.innerHTML = `
                <span class="year">${item.year}</span>
                <h3>${item.icon} ${item.title}</h3>
                <p>${item.description}</p>
            `;

			timelineContainer.appendChild(entryElement);
		});
	}

	// Function to populate the Experience section
	function populateExperience() {
		const experienceContainer = document.querySelector('.experience-items');
		experienceContainer.innerHTML = '';

		experienceData.forEach(item => {
			const experienceElement = document.createElement('div');
			experienceElement.className = 'experience-item';

			let achievementsHTML = '';
			if (item.achievements && item.achievements.length) {
				achievementsHTML = `
                    <ul class="achievements">
                        ${item.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                `;
			}

			experienceElement.innerHTML = `
                <h3>${item.title}</h3>
                <span class="company">${item.company}</span>
                <span class="period">${item.period}</span>
                <p>${item.description}</p>
                ${achievementsHTML}
            `;

			experienceContainer.appendChild(experienceElement);
		});
	}

	// Function to populate the Education section
	function populateEducation() {
		const educationContainer = document.querySelector('.education-items');
		educationContainer.innerHTML = '';

		educationData.forEach(item => {
			const educationElement = document.createElement('div');
			educationElement.className = 'education-item';

			educationElement.innerHTML = `
                <h3>${item.degree}</h3>
                <span class="institution">${item.institution}</span>
                <span class="period">${item.period}</span>
                <p>${item.description}</p>
            `;

			educationContainer.appendChild(educationElement);
		});
	}

	// Function to populate the Projects section
	function populateProjects() {
		const projectsContainer = document.querySelector('.project-grid');
		projectsContainer.innerHTML = '';

		projectsData.forEach(item => {
			const projectElement = document.createElement('div');
			projectElement.className = 'project-item';

			// Use placeholder image if actual image isn't available
			const imageUrl = item.image || 'placeholder-project.jpg';

			const tagsHTML = item.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');

			projectElement.innerHTML = `
                <div class="project-image" style="background-image: url('${imageUrl}')"></div>
                <div class="project-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <div class="project-tags">
                        ${tagsHTML}
                    </div>
                    <a href="${item.link}" class="pixel-btn" target="_blank">View Project</a>
                </div>
            `;

			projectsContainer.appendChild(projectElement);
		});
	}

	// Contact Form Handler
	function setupContactForm() {
		const contactForm = document.getElementById('contact-form');

		if (contactForm) {
			contactForm.addEventListener('submit', function (event) {
				event.preventDefault();

				// Get form values
				const name = document.getElementById('name').value;
				const email = document.getElementById('email').value;
				const message = document.getElementById('message').value;

				// In a real application, you would send this data to a server
				// For GitHub Pages, you might use a service like Formspree or EmailJS

				// Show a success message (in a real app, this would happen after successful submission)
				alert(`Thanks for your message, ${name}! In a real application, this would be sent to the server.`);

				// Reset the form
				contactForm.reset();
			});
		}
	}

	// Add scroll animations for sections
	function setupScrollAnimations() {
		const sections = document.querySelectorAll('section');

		// Simple scroll animation using Intersection Observer
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.style.opacity = 1;
					entry.target.style.transform = 'translateY(0)';
				}
			});
		}, { threshold: 0.1 });

		sections.forEach(section => {
			section.style.opacity = 0;
			section.style.transform = 'translateY(20px)';
			section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
			observer.observe(section);
		});
	}

	// Navigation highlighting for scrolling
	function setupNavigationHighlighting() {
		const sections = document.querySelectorAll('section');
		const navLinks = document.querySelectorAll('.nav-link');

		if (navLinks.length) {
			window.addEventListener('scroll', () => {
				let current = '';

				sections.forEach(section => {
					const sectionTop = section.offsetTop;
					const sectionHeight = section.clientHeight;
					if (pageYOffset >= sectionTop - 60) {
						current = section.getAttribute('id');
					}
				});

				navLinks.forEach(link => {
					link.classList.remove('active');
					if (link.getAttribute('href').substring(1) === current) {
						link.classList.add('active');
					}
				});
			});
		}
	}

	// Initialize all components
	function initializeCV() {
		populateJourney();
		populateExperience();
		populateEducation();
		populateProjects();
		setupContactForm();
		setupScrollAnimations();
		setupNavigationHighlighting();

		// Add custom pixelated cursor
		const cursor = document.createElement('div');
		cursor.className = 'pixel-cursor';
		document.body.appendChild(cursor);

		document.addEventListener('mousemove', (e) => {
			cursor.style.left = e.clientX + 'px';
			cursor.style.top = e.clientY + 'px';
		});
	}

	// Run initialization
	initializeCV();
});