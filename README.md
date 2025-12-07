# Travel Journal – React Project

A simple and responsive Travel Journal built with React. It displays travel locations using reusable components and clean design.

## Features
- Interactive travel cards
- Images for each location
- Country and Google Maps link
- Short description
- Reusable components using props
- Responsive layout

## Tech Stack
- React (Vite or CRA)
- JavaScript (ES6+)
- CSS or Tailwind

## Project Structure
'''
📦 travel-journal
 ┣ 📂components
 ┃ ┣ 📜Entry.jsx
 ┃ ┗ 📜Header.jsx
 ┣ 📂images
 ┃ ┣ 📜globe.png
 ┃ ┗ 📜marker.png
 ┣ 📜.gitignore
 ┣ 📜App.jsx
 ┣ 📜data.js
 ┣ 📜eslint.config.js
 ┣ 📜index.css
 ┣ 📜index.html
 ┣ 📜index.jsx
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜vite.config.js
'''
## Installation
1. Clone the repository:
   git clone https://github.com/Tejasri-T/travel-journal.git

2. Navigate to the project:
   cd travel-journal

3. Install dependencies:
   npm install

4. Start the development server:
   npm run dev

## How It Works
- data.js contains an array of travel destinations.
- App.jsx maps over this data and renders the Entry component.
- Each Entry shows:
  - Image
  - Location
  - Google Maps link
  - Title
  - Travel dates
  - Description

## Future Enhancements
- Search or filter by country
- Backend for storing logs
- Slideshow or gallery
- Improved mobile UI

## License
MIT License
