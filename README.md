# Online CV Template

A customizable GitHub Pages template for creating your professional online CV/resume.

## 🚀 Quick Start

1. **Fork this repository** by clicking the "Fork" button at the top right of this page
2. **Enable GitHub Pages** in your forked repository settings
3. **Customize your CV** by editing the files in your repository
4. Your online CV will be available at `https://[your-username].github.io/online-cv/`

## 📋 Customization Guide

### Basic Information

Edit the `index.html` file to update your:
- Name
- Professional title
- Contact information
- Social media links
- About Me section

### Profile Picture

1. Replace the file at `images/profile.jpg` with your own profile picture
2. For best results, use a square image (recommended size: 500x500 pixels)

### Content Sections

Your CV content is stored in YAML files in the `_data` directory:

- **Education**: `_data/education.yml`
- **Experience**: `_data/experience.yml`
- **Skills**: `_data/skills.yml`
- **Projects**: `_data/projects.yml`
- **Activities**: `_data/activities.yml`

Edit these files to add your own information. The structure and format are documented in each file.

### Styling

To customize the appearance of your CV:

1. Basic styling is in `css/main.css`
2. Add your personal style preferences in `css/custom.css`

## 📱 Responsive Design

This template is fully responsive and works well on:
- Desktop computers
- Tablets
- Mobile phones

## 🔧 Advanced Customization

For more advanced customizations:

1. Modify the HTML structure in `index.html`
2. Add custom JavaScript functionality in `js/main.js`
3. Add new sections by creating additional YAML files in the `_data` directory

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- Font Awesome for the icons
- GitHub Pages for the hosting

## 📚 Additional Resources

For more help with customizing your CV:
- [HTML/CSS Tutorial](https://www.w3schools.com/html/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [YAML Tutorial](https://yaml.org/spec/1.2/spec.html)

## 🤝 Contributing

If you have suggestions for improving this template, please feel free to:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Submit a pull request

## 📞 Support

If you encounter any issues or have questions, please open an issue in this repository.

# Repository File Structure

Here's the recommended file structure for your online CV GitHub repository:

```
online-cv/
├── index.html
├── css/
│   ├── main.css
│   └── custom.css
├── js/
│   └── main.js
├── images/
│   ├── profile.jpg
│   └── project-screenshots/
├── _data/
│   ├── education.yml
│   ├── experience.yml
│   ├── projects.yml
│   ├── skills.yml
│   └── activities.yml
└── README.md
```

## Files and Their Purpose

- `index.html` - The main HTML file that displays the CV
- `css/main.css` - Core styling for the CV
- `css/custom.css` - For students to add their custom styling
- `js/main.js` - JavaScript for interactive elements
- `images/` - Directory for profile picture and other images
- `_data/` - YAML files containing the CV content
- `README.md` - Instructions and information about the repository