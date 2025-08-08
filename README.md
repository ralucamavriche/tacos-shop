# The Little Taco Shop

Welcome to **The Little Taco Shop** website! This project is a static, responsive website for a fictional taco shop, showcasing its menu, hours, contact information, and more.

## Project Description

This project demonstrates a modern, accessible, and responsive static website using only HTML, CSS, and JavaScript. It is ideal for learning or demonstrating best practices in front-end web development, including semantic markup, responsive layouts, and basic interactivity.

## Project Stack

- **HTML5**: Semantic structure for all pages (index, about, contact, hours)
- **CSS3**: Custom styles, responsive design, and layout
- **JavaScript (Vanilla)**: For dynamic content (e.g., updating the year)
- **No frameworks**: Pure front-end, no build tools or backend

## Project Structure

```
├── about.html         # About the shop
├── contact.html       # Contact form and info
├── hours.html         # Opening hours
├── index.html         # Homepage and menu
├── css/
│   └── style.css      # Main stylesheet
├── img/
│   ├── favicon.ico
│   └── ...            # Taco images
├── js/
│   └── main.js        # JavaScript for dynamic features
└── README.md          # Project documentation
```

## Code Implementation

### HTML
- Uses semantic tags: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, etc.
- Navigation links for all pages
- Menu table, contact form, and shop info

### CSS
- Responsive design with media queries
- CSS variables for easy theming
- Utility classes for layout and accessibility
- Custom styles for menu, forms, and images

### JavaScript
- Dynamically updates the copyright year:

```js
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
```

## How to Use

1. Clone the repository:
	```sh
	git clone https://github.com/ralucamavriche/tacos-shop.git
	```
2. Open any `.html` file in your browser.

## Features

- Fully static, no dependencies
- Responsive and accessible
- Menu, contact, about, and hours pages
- Custom images and favicon

## License

This project is open-source and available under the MIT License.
