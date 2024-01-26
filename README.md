# CryptoVerse

A ReactJS project that provides detailed information about various cryptocurrencies, including real-time graphs. Styled with Ant Design, utilizing ChartJS for graph visualization, fetching data from Rapid API, and hosted on Firebase.

For a live demonstration, explore [CryptoVerse Demo](https://cryptoversebyvaishali.web.app).

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [API](#api)
- [Dependencies](#dependencies)

## Overview

CryptoVerse is a comprehensive platform for cryptocurrency enthusiasts, providing detailed information about various cryptocurrencies along with real-time graphs for in-depth analysis. The application is built using ReactJS, styled with Ant Design, and hosted on Firebase.
![Home](https://github.com/Vaishali785/Cryptoverse/blob/main/src/assets/screenshots/homePage.png)
![Detail](https://github.com/Vaishali785/Cryptoverse/blob/main/src/assets/screenshots/detailPage.png)
![Search](https://github.com/Vaishali785/Cryptoverse/blob/main/src/assets/screenshots/searchPage.png)

## Features

- **Cryptocurrency Details**: Explore detailed information about various cryptocurrencies.
- **Real-time Graphs**: Visualize the performance of cryptocurrencies with real-time graphs powered by ChartJS.
- **Ant Design Styling**: Enjoy a polished and user-friendly interface with the elegance of Ant Design.
- **Search Functionality**: Easily find specific cryptocurrencies using the intuitive search feature, making navigation and research efficient.
- **Redux State Management**: Efficiently manage the application's state with Redux, ensuring a centralized and predictable state flow across components.
- **React Router Navigation**: Seamlessly navigate between different pages and components with the integration of React Router, ensuring a smooth and intuitive user experience.
- **React Query Data Management**: Optimize data fetching, caching, and state management with React Query, providing efficient and performant data handling for an improved user interface.

## Tech Stack

<p align="left"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="50" height="50" alt="React" />
<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width="50" height="50" alt="Redux" />
<img alt='React-Query' height="50" width="50" src='https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png'>
<img alt='React-Router' height="50" width="100" src='https://reactrouter.com/_brand/react-router-stacked-color-inverted.png'>
<img src="https://i.pinimg.com/originals/9a/0e/a9/9a0ea991a4367065727f9754e2e09493.png" width="50" height="50" alt="Ant Design" />
<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" width="50" height="50" alt="Firebase" />

</p>

- **Frontend**: ReactJS
- **Styling**: Ant Design
- **Navigation**: React Router
- **State Management**: Redux
- **Data Management**: React Query
- **Graph Visualization**: ChartJS
- **Data Fetching**: Rapid API
- **Hosting**: Firebase

## API

This project fetches cryptocurrency data from Rapid API. To set up the necessary API key, follow these steps:

1. Create a `.env` file in the root of your project.
2. Add the following line to the `.env` file:
   ```env
   REACT_APP_RAPID_API_KEY=your_rapid_api_key_here
   ```
   Replace `your_rapid_api_key_here` with your actual Rapid API key.

## Dependencies

- [React](https://reactjs.org/)
- [Ant Design](https://ant.design/)
- [ChartJS](https://www.chartjs.org/)
- [Rapid API](https://rapidapi.com/)
- [Firebase](https://firebase.google.com/)

For a complete list of dependencies, refer to the `package.json` file.

<!-- Hosted on Main branch  -->
<!-- Master branch contains the code of initial deployed website, so don't change anything here. -->
<!-- Do all the changes on New branch and then merge it in main -->
<!-- nvm default works for this project -->
