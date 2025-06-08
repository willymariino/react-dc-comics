# DC Comics React Project

[![Live Demo](https://img.shields.io/badge/live-demo-green)](https://react-dc-comics.netlify.app/)

This project is my first exercise in React, focusing on component-based development and their integration into a webpage. The goal was to learn how to divide the application into reusable components, import them into the main page, and manage dynamic content such as cards created in separate folders.

## Features
- **Component-based architecture**: The application is divided into multiple reusable components such as `Header`, `Main`, `Banner`, `FooterTop`, and `FooterBottom`.
- **Dynamic content**: Cards are dynamically imported and displayed using data stored in a separate file.
- **Styling**: Custom CSS is used to style the components and layout.

## Live Demo
Visit the live version here: 
[DC Comics + React](https://react-dc-comics.netlify.app/)

## Tech Stack
- React 18+ 
- Vite 4+ 
- CSS3 
- Netlify (for deployment)

## How to Run Locally
1. Clone the repository.
2. Install dependencies using `npm install`
3. Start the development server using `npm run dev`
4. Open the application in your browser at the URL provided by Vite.

## Project Structure
The project is structured as follows:
- **Components**: All reusable components are stored in the `src/components` folder.
- **Data**: Dynamic content such as comics data is stored in `src/components/comics/comics.js`.
- **Styling**: Global styles are defined in `src/index.css`.


