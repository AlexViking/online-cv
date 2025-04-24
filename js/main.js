// Main JavaScript File for Online CV

document.addEventListener('DOMContentLoaded', function () {
	// Set the last updated date
	setLastUpdated();

	// Initialize any interactive elements
	initializeInteractiveElements();
});

/**
 * Sets the last updated date in the footer
 */
function setLastUpdated() {
	const lastUpdatedElement = document.getElementById('last-updated');
	if (lastUpdatedElement) {
		// You can manually set this date when you update your CV
		// or use a dynamic approach if you're generating the site
		const lastUpdated = new Date().toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
		lastUpdatedElement.textContent = lastUpdated;
	}
}

/**
 * Initialize any interactive elements on the page
 */
function initializeInteractiveElements() {
	// Add smooth scrolling for anchor links
	const anchorLinks = document.querySelectorAll('a[href^="#"]');
	anchorLinks.forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				window.scrollTo({
					top: target.offsetTop - 100,
					behavior: 'smooth'
				});
			}
		});
	});

	// You can add more interactive functionality here:
	// - Filter projects by technology
	// - Toggle between different views
	// - Load more items in long lists
	// - Show/hide sections
}

/**
 * Example function for filtering projects by technology
 * Uncomment and modify if you want to implement this feature
 */
/*
function filterProjectsByTechnology(technology) {
	const projectItems = document.querySelectorAll('.project-item');
    
	projectItems.forEach(item => {
		const techList = item.querySelector('.project-technologies').textContent;
		if (technology === 'all' || techList.includes(technology)) {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});
}
*/

/**
 * Example function for toggling between grid and list view
 * Uncomment and modify if you want to implement this feature
 */
/*
function toggleProjectsView(viewType) {
	const projectsList = document.querySelector('.projects-list');
    
	if (viewType === 'grid') {
		projectsList.classList.remove('list-view');
		projectsList.classList.add('grid-view');
	} else {
		projectsList.classList.remove('grid-view');
		projectsList.classList.add('list-view');
	}
}
*/