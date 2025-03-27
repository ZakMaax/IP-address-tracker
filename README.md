# 🌍 IP Address Tracker

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0.0-purple?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)

An interactive web application that visualizes geographical locations based on IP addresses or domains using the ipify API.

![App Screenshot](https://github.com/ZakMaax/IP-address-tracker/raw/main/screenshot/ip-address-tracker-homepage.png)

## ✨ Features

### 🔍 IP/Domain Lookup
- Real-time search by IP address or domain
- Automatic detection of visitor's IP on first load
- Powered by [ipify Geolocation API](https://geo.ipify.org/docs)

### 🗺️ Interactive Map Visualization
- Dynamic [Leaflet.js](https://leafletjs.com/) map with custom markers
- Smooth panning/zooming animations
- Fully responsive design for all devices

### 📊 Location Details
- Displays comprehensive information:
  - 📶 IP address
  - 🏢 ISP information
  - 🌎 Geographical location (city, region, country)
  - ⏰ Timezone

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) | Frontend framework |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white) | Build tool |
| ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white) | Styling |
| ![Leaflet](https://img.shields.io/badge/-Leaflet-199900?logo=leaflet&logoColor=white) | Interactive maps |
| ipify API | Geolocation data |

## 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/Try_Live_Demo-View_Now-success?style=for-the-badge)](https://ip-address-geolocation.netlify.app/)

## 📦 Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm (v8 or later)

### Installation
```bash
# Clone the repository
git clone https://github.com/ZakMaax/IP-address-tracker.git

# Navigate to project directory
cd IP-address-tracker

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Add your ipify API key in the .env file

# Start development server
npm run dev
```


## 👨‍💻 Author
**Sakarie W. Mohamed**  
[![GitHub](https://img.shields.io/badge/GitHub-Profile-blue?logo=github)](https://github.com/ZakMaax)
```
