✨ Travel Journal — React Project

A clean and responsive travel journal built with React, allowing users to view travel locations, images, descriptions, and interactive card components.

🚀 Features

📍 Interactive travel cards
🖼️ Image display for each location
🗺️ Country & location details
📝 Short description of each place
🎨 Styled with modern, minimal UI (CSS)
⚛️ Built using reusable React components
🔁 Organized using props for cleaner code

🛠️ Tech Stack
React (Vite or CRA)
JavaScript (ES6+)
CSS / Tailwind / custom styling

Responsive layout

📂 Project Structure

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


📦 Installation & Setup

Clone the repository:
git clone https://github.com/your-username/travel-journal.git

Go to the project folder:
cd travel-journal

Install dependencies:
npm install

start the development server:
npm run dev


🧩 How It Works

data.js contains an array of travel destinations
App.jsx maps over the destinations and renders a <Card /> for each

Each <Card /> displays:
Image
Location
Google Maps link
Title
Dates

Description
🔮 Future Enhancements
🌍 Add search or filter by country
🗃️ Add backend to store user travel logs
🎞️ Add slideshow / gallery
📱 Improve mobile UI
📝 License

This project is open-source and available under the MIT License.