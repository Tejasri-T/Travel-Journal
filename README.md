🌍 Travel Journal – React Project

A clean, responsive Travel Journal built with React, showcasing different travel destinations with images, descriptions, and location details. Designed using reusable components and organized for scalability.

✨ Features

📍 Interactive location cards

🖼️ Images for each destination

🗺️ Country, location & Google Maps link

📝 Short descriptions of places

⚛️ Reusable React components with props

🎨 Modern, minimal UI styling

📱 Fully responsive design

🛠️ Tech Stack

React (Vite or Create React App)

JavaScript (ES6+)

CSS / Tailwind / Custom Styling

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

🚀 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/Tejasri-T/travel-journal.git

2️⃣ Navigate into the project
cd travel-journal

3️⃣ Install dependencies
npm install

4️⃣ Start the development server
npm run dev

🧩 How It Works

data.js contains an array of travel destinations

App.jsx maps over this data and renders an <Entry /> component for each item

Each entry card displays:

Image

Country & location

Google Maps link

Title

Travel dates

Description

🔮 Future Enhancements

🌍 Search or filter by country

🗃️ Add backend to store user travel logs

🎞️ Add a slideshow/gallery

📱 Further improve mobile UI

📝 License

This project is open-source and available under the MIT License.