/**
 * main.js
 *
 * This script dynamically updates the copyright year
 * in the website footer. It waits for the DOM to load,
 * then finds the element with ID "year" and sets its
 * text content and datetime attribute to the current year.
 *
 * Usage: Ensure an element with id="year" exists in your HTML.
 */

document.addEventListener("DOMContentLoaded", () => {
	const year = document.getElementById("year");
	if (!year) return;
    
	const thisYear = new Date().getFullYear();
	year.textContent = thisYear;
	year.setAttribute("datetime", thisYear);
});
