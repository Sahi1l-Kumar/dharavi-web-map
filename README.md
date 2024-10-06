# Dharavi Community Mapping App

This is a <b>React-based</b> web application designed for the <b>NASA Space Apps Challenge 2024.</b> The app focuses on providing an interactive and insightful exploration of Dharavi, one of the largest and most complex urban areas in the world, through community-driven mapping. Users can navigate through various key aspects of the region, such as industries, housing, sanitation, redevelopment projects, and the impact of COVID-19, using a responsive sidebar navigation.

## Overview

<b>The Dharavi Community Mapping App</b> provides users with a rich, visual experience that showcases the challenges and opportunities in the Dharavi region. Built using React, Vite, and Google Maps API, the app is designed to be highly responsive, providing seamless navigation across devices.

### Key features include:

- Interactive Map: A dynamic map of Dharavi with markers and layers representing various categories like industries, living conditions, and redevelopment areas.
- Responsive Sidebar Navigation: A collapsible sidebar that allows users to easily navigate through different aspects of Dharavi.
- Data-Driven Visualization: Historical, social, and infrastructural data is visualized in different sections, providing a comprehensive view of the region.
- Mobile-First Design: Ensures optimal user experience across both desktop and mobile devices.

The application highlights the issues of urban planning, sanitation, redevelopment, and disease control, making it an ideal tool for stakeholders, policymakers, and community members involved in the betterment of Dharavi.

## Features

### Interactive Map

- The app integrates Google Maps API to display a customizable, zoomable map of Dharavi.
- Key points of interest (POIs) like industries, housing areas, sanitation systems, and redevelopment projects are displayed using markers.
- Users can interact with the map by clicking on markers to get more detailed information about each location.

### Responsive Sidebar Navigation

- The sidebar provides links to various sections, including history, industries, sanitation, COVID-19 impact, and redevelopment projects.
- The sidebar automatically adjusts its behavior based on the device screen size. On mobile, it appears as a temporary drawer, while on desktop, it remains persistent.

### Dynamic Routing

- Built using React Router, the app allows users to switch between sections without a page reload.
- Each section presents different aspects of Dharavi, providing data and visual elements to make the user experience more engaging and informative.

### Theming and Responsiveness

- The app leverages Material UI’s theming system, ensuring a consistent and responsive design across devices.
- The UI adjusts gracefully to different screen sizes, ensuring a smooth user experience whether on mobile or desktop.

## Technology Stack

### Frontend:

- React: Core framework for building dynamic user interfaces.
- Vite: Fast build tool for modern web projects with HMR support.
- React Router: For handling client-side routing and navigation.
- Material UI (MUI): Provides a set of customizable components for building a responsive and modern interface.
- Google Maps API: Used for integrating interactive maps with markers and layers to display important data points within Dharavi.

### State Management:

- React Hooks: For managing local state and handling side effects within functional components.

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/dharavi-web-app.git
cd dharavi-web-app
```
2. Install dependencies
```bash
npm install
```
3. Set up Google Maps API<br><br>
To use the map feature, you'll need to configure the Google Maps API. Obtain an API key from the Google Cloud Console and add it to your environment variables:
```bash
REACT_APP_GOOGLE_MAPS_API_KEY=your-api-key
```
4. Run the development server<br><br>
   Start the application in development mode:
```bash
npm run dev
```

## Usage

Once the app is running, you can use the sidebar to navigate through different sections. These include:

- Map: View the interactive map of Dharavi.
- History: Explore the rich history of the Dharavi region.
- Industries: See the various industries and businesses operating in Dharavi.
- Living Conditions & Sanitation: Understand the housing conditions and sanitation infrastructure.
- COVID-19 Impact: Get insights on how the pandemic affected Dharavi.
- Garbage Disposal: Visualize waste management systems.
- Water & Drainage Systems: Learn about the water supply and drainage systems in the area.
- Diseases: Information about health and disease challenges in Dharavi.
- Redevelopment Projects: Track ongoing and planned redevelopment efforts.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Sahi1l-Kumar/dharavi-web-map/blob/main/LICENSE) file for more details.
